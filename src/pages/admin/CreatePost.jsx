import React, { useState } from 'react';
import { supabase } from '../../supabaseClient';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Save, Plus, X, Image as ImageIcon, Upload } from 'lucide-react';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('draft');
  const [imageFiles, setImageFiles] = useState([]); // Array of File objects
  const [previews, setPreviews] = useState([]); // Array of preview URLs
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 0) {
      const newPreviews = files.map(file => URL.createObjectURL(file));
      setImageFiles([...imageFiles, ...files]);
      setPreviews([...previews, ...newPreviews]);
    }
  };

  const removeImage = (index) => {
    const newFiles = [...imageFiles];
    const newPreviews = [...previews];
    newFiles.splice(index, 1);
    newPreviews.splice(index, 1);
    setImageFiles(newFiles);
    setPreviews(newPreviews);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 1. Insert the post (Slug removed)
      const { data: postData, error: postError } = await supabase
        .from('posts')
        .insert([{ title, description, status }])
        .select()
        .single();

      if (postError) throw postError;

      // 2. Upload images to Supabase Storage
      const uploadedImageUrls = [];
      for (const file of imageFiles) {
        const fileExt = file.name.split('.').pop();
        const fileName = `${Math.random()}.${fileExt}`;
        const filePath = `${postData.id}/${fileName}`;

        const { error: uploadError } = await supabase.storage
          .from('blog-images')
          .upload(filePath, file);

        if (uploadError) throw uploadError;

        const { data: { publicUrl } } = supabase.storage
          .from('blog-images')
          .getPublicUrl(filePath);
        
        uploadedImageUrls.push(publicUrl);
      }

      // 3. Insert the image records
      if (uploadedImageUrls.length > 0) {
        const imageInserts = uploadedImageUrls.map((url, index) => ({
          post_id: postData.id,
          image_url: url,
          display_order: index
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
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => navigate('/admin/dashboard')}
          className="flex items-center text-gray-600 hover:text-gray-900 mb-6 transition-colors"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Dashboard
        </button>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-8 border-b border-gray-100 flex justify-between items-center bg-white sticky top-0 z-10">
            <h2 className="text-2xl font-bold text-gray-800">Create New Post</h2>
            <button
              type="submit"
              disabled={loading}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-700 transition-colors disabled:opacity-50"
            >
              <Save size={20} />
              <span>{loading ? 'Uploading...' : 'Save Post'}</span>
            </button>
          </div>

          <div className="p-8 space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="col-span-1">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Title</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="Enter post title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Status</label>
                <select
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Description</label>
              <textarea
                required
                rows="6"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                placeholder="Write your post content here..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Carousel Images (Local Upload)</label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-xl hover:border-blue-400 transition-colors">
                <div className="space-y-1 text-center">
                  <Upload className="mx-auto h-12 w-12 text-gray-400" />
                  <div className="flex text-sm text-gray-600">
                    <label className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500">
                      <span>Upload images</span>
                      <input type="file" className="sr-only" multiple accept="image/*" onChange={handleFileChange} />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-4 mt-6">
                {previews.map((url, index) => (
                  <div key={index} className="relative group aspect-square bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                    <img src={url} alt="" className="w-full h-full object-cover" />
                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <X size={14} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
