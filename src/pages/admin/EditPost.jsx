import React, { useState, useEffect } from 'react';
import { supabase } from '../../supabaseClient';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Save, Plus, X, Upload } from 'lucide-react';

const EditPost = () => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('draft');
  const [existingImages, setExistingImages] = useState([]); // Images already in DB
  const [newImageFiles, setNewImageFiles] = useState([]); // New local files
  const [newPreviews, setNewPreviews] = useState([]); // Previews for new files
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchPost();
  }, [id]);

  const fetchPost = async () => {
    const { data, error } = await supabase
      .from('posts')
      .select('*, post_images(*)')
      .eq('id', id)
      .single();

    if (error) {
      navigate('/admin/dashboard');
    } else {
      setTitle(data.title);
      setDescription(data.description);
      setStatus(data.status);
      setExistingImages(data.post_images || []);
    }
    setLoading(false);
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 0) {
      const previews = files.map(file => URL.createObjectURL(file));
      setNewImageFiles([...newImageFiles, ...files]);
      setNewPreviews([...newPreviews, ...previews]);
    }
  };

  const removeNewImage = (index) => {
    const files = [...newImageFiles];
    const previews = [...newPreviews];
    files.splice(index, 1);
    previews.splice(index, 1);
    setNewImageFiles(files);
    setNewPreviews(previews);
  };

  const removeExistingImage = async (imgId, imgUrl) => {
    if (window.confirm('Remove this image permanently?')) {
      // 1. Delete from DB
      const { error: dbError } = await supabase.from('post_images').delete().eq('id', imgId);
      if (!dbError) {
        setExistingImages(existingImages.filter(img => img.id !== imgId));
        
        // 2. Try to delete from Storage (extract path from URL)
        const path = imgUrl.split('blog-images/').pop();
        await supabase.storage.from('blog-images').remove([path]);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);

    try {
      // 1. Update post text
      const { error: postError } = await supabase
        .from('posts')
        .update({ title, description, status })
        .eq('id', id);

      if (postError) throw postError;

      // 2. Upload new images
      const uploadedImageUrls = [];
      for (const file of newImageFiles) {
        const fileExt = file.name.split('.').pop();
        const fileName = `${Math.random()}.${fileExt}`;
        const filePath = `${id}/${fileName}`;

        const { error: uploadError } = await supabase.storage
          .from('blog-images')
          .upload(filePath, file);

        if (uploadError) throw uploadError;

        const { data: { publicUrl } } = supabase.storage
          .from('blog-images')
          .getPublicUrl(filePath);
        
        uploadedImageUrls.push(publicUrl);
      }

      // 3. Insert new image records
      if (uploadedImageUrls.length > 0) {
        const imageInserts = uploadedImageUrls.map((url, index) => ({
          post_id: id,
          image_url: url,
          display_order: existingImages.length + index
        }));

        const { error: imageError } = await supabase
          .from('post_images')
          .insert(imageInserts);

        if (imageError) throw imageError;
      }

      navigate('/admin/dashboard');
    } catch (error) {
      alert('Error: ' + error.message);
    } finally {
      setSaving(false);
    }
  };

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => navigate('/admin/dashboard')}
          className="flex items-center text-gray-600 hover:text-gray-900 mb-6 transition-colors font-medium"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Dashboard
        </button>

        <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-8 border-b border-gray-100 flex justify-between items-center bg-white sticky top-0 z-10">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Edit Post</h2>
              <p className="text-sm text-gray-500">Update your story details and images</p>
            </div>
            <button
              type="submit"
              disabled={saving}
              className="bg-blue-600 text-white px-8 py-3 rounded-xl flex items-center space-x-2 hover:bg-blue-700 transition-all disabled:opacity-50 shadow-lg shadow-blue-100"
            >
              <Save size={20} />
              <span className="font-bold">{saving ? 'Saving Changes...' : 'Save Changes'}</span>
            </button>
          </div>

          <div className="p-8 space-y-8">
            <div className="grid grid-cols-2 gap-8">
              <div className="col-span-1">
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Post Title</label>
                <input
                  type="text"
                  required
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all font-medium"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Status</label>
                <select
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all font-bold"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option value="draft">Draft (Private)</option>
                  <option value="published">Published (Live)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Content</label>
              <textarea
                required
                rows="10"
                className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all resize-none leading-relaxed"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Manage Images</label>
              
              {/* Image Grid */}
              <div className="grid grid-cols-4 gap-4 mb-8">
                {/* Existing Images */}
                {existingImages.map((img) => (
                  <div key={img.id} className="relative group aspect-square bg-gray-100 rounded-2xl overflow-hidden border border-gray-200">
                    <img src={img.image_url} alt="" className="w-full h-full object-cover" />
                    <button
                      type="button"
                      onClick={() => removeExistingImage(img.id, img.image_url)}
                      className="absolute top-2 right-2 bg-black/60 backdrop-blur-md text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-500"
                    >
                      <X size={16} />
                    </button>
                    <div className="absolute bottom-0 left-0 right-0 p-2 bg-black/40 text-[10px] text-white font-bold uppercase text-center backdrop-blur-sm">
                      Existing
                    </div>
                  </div>
                ))}

                {/* New Previews */}
                {newPreviews.map((url, index) => (
                  <div key={index} className="relative group aspect-square bg-blue-50 rounded-2xl overflow-hidden border border-blue-100">
                    <img src={url} alt="" className="w-full h-full object-cover" />
                    <button
                      type="button"
                      onClick={() => removeNewImage(index)}
                      className="absolute top-2 right-2 bg-black/60 backdrop-blur-md text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-500"
                    >
                      <X size={16} />
                    </button>
                    <div className="absolute bottom-0 left-0 right-0 p-2 bg-blue-600 text-[10px] text-white font-bold uppercase text-center">
                      New
                    </div>
                  </div>
                ))}

                {/* Upload Button */}
                <label className="aspect-square border-2 border-dashed border-gray-200 rounded-2xl flex flex-col items-center justify-center text-gray-400 hover:border-blue-400 hover:text-blue-500 transition-all cursor-pointer bg-gray-50/50">
                  <Upload size={24} className="mb-2" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Add More</span>
                  <input type="file" className="sr-only" multiple accept="image/*" onChange={handleFileChange} />
                </label>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditPost;
