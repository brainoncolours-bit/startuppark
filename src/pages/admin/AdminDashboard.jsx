import React, { useState, useEffect } from 'react';
import { supabase } from '../../supabaseClient';
import { useNavigate, Link } from 'react-router-dom';
import { LogOut, FileText, LayoutDashboard, Plus, Trash2, Image as ImageIcon, Edit, CheckCircle, Clock } from 'lucide-react';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('blogs');
  const [posts, setPosts] = useState([]);
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    checkUser();
    fetchData();
  }, [activeTab]);

  const checkUser = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      navigate('/admin');
    }
  };

  const fetchData = async () => {
    setLoading(true);
    if (activeTab === 'blogs') {
      const { data, error } = await supabase
        .from('posts')
        .select('*, post_images(*)')
        .order('created_at', { ascending: false });
      if (!error) setPosts(data);
    } else {
      const { data, error } = await supabase
        .from('contact_submissions')
        .select('*')
        .order('created_at', { ascending: false });
      if (!error) setSubmissions(data);
    }
    setLoading(false);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/admin');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg flex flex-col sticky top-0 h-screen">
        <div className="p-6 border-b">
          <h1 className="text-xl font-bold text-gray-800">Admin Panel</h1>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <button
            onClick={() => setActiveTab('blogs')}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
              activeTab === 'blogs' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <FileText size={20} />
            <span className="font-medium">Blog Posts</span>
          </button>
          <button
            onClick={() => setActiveTab('forms')}
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
              activeTab === 'forms' ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <LayoutDashboard size={20} />
            <span className="font-medium">Form Submissions</span>
          </button>
        </nav>
        <div className="p-4 border-t">
          <button
            onClick={handleLogout}
            className="w-full flex items-center space-x-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
          >
            <LogOut size={20} />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">
              {activeTab === 'blogs' ? 'Blog Posts' : 'Form Submissions'}
            </h2>
            {activeTab === 'blogs' && (
              <button
                onClick={() => navigate('/admin/posts/new')}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"
              >
                <Plus size={20} />
                <span>New Post</span>
              </button>
            )}
          </div>

          {loading ? (
            <div className="text-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading data...</p>
            </div>
          ) : activeTab === 'blogs' ? (
            <BlogList posts={posts} refresh={fetchData} />
          ) : (
            <SubmissionList submissions={submissions} />
          )}
        </div>
      </div>
    </div>
  );
};

const BlogList = ({ posts, refresh }) => {
  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      const { error } = await supabase.from('posts').delete().eq('id', id);
      if (!error) refresh();
    }
  };

  const toggleStatus = async (id, currentStatus) => {
    const newStatus = currentStatus === 'published' ? 'draft' : 'published';
    const { error } = await supabase
      .from('posts')
      .update({ status: newStatus })
      .eq('id', id);
    if (!error) refresh();
  };

  return (
    <div className="grid gap-6">
      {posts.length === 0 ? (
        <p className="text-gray-500 text-center py-10 bg-white rounded-xl shadow-sm">No blog posts found.</p>
      ) : (
        posts.map((post) => (
          <div key={post.id} className="bg-white p-6 rounded-2xl shadow-sm flex items-center justify-between border border-gray-100 hover:border-blue-200 transition-all group">
            <div className="flex items-center space-x-6">
              <div className="w-20 h-20 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400 overflow-hidden shadow-inner">
                {post.post_images && post.post_images[0] ? (
                  <img src={post.post_images[0].image_url} alt="" className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                ) : (
                  <ImageIcon size={28} />
                )}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{post.title}</h3>
                <div className="flex items-center space-x-4">
                   <div className={`flex items-center space-x-1 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                    post.status === 'published' ? 'bg-green-50 text-green-600' : 'bg-orange-50 text-orange-600'
                  }`}>
                    {post.status === 'published' ? <CheckCircle size={10} /> : <Clock size={10} />}
                    <span>{post.status}</span>
                  </div>
                  <p className="text-xs text-gray-400">{new Date(post.created_at).toLocaleDateString()}</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <button
                onClick={() => toggleStatus(post.id, post.status)}
                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest transition-all ${
                  post.status === 'published' 
                  ? 'bg-gray-100 text-gray-600 hover:bg-orange-50 hover:text-orange-600' 
                  : 'bg-green-600 text-white hover:bg-green-700 shadow-lg shadow-green-100'
                }`}
              >
                {post.status === 'published' ? 'Move to Draft' : 'Publish Now'}
              </button>
              
              <Link
                to={`/admin/posts/edit/${post.id}`}
                className="p-2.5 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors border border-transparent hover:border-blue-100"
                title="Edit Post"
              >
                <Edit size={20} />
              </Link>
              
              <button
                onClick={() => handleDelete(post.id)}
                className="p-2.5 text-red-500 hover:bg-red-50 rounded-lg transition-colors border border-transparent hover:border-red-100"
                title="Delete Post"
              >
                <Trash2 size={20} />
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

const SubmissionList = ({ submissions }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <table className="w-full text-left">
        <thead className="bg-gray-50/50 border-b border-gray-100">
          <tr>
            <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-widest">Name</th>
            <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-widest">Email</th>
            <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-widest">Message</th>
            <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-widest">Date</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-50">
          {submissions.length === 0 ? (
            <tr>
              <td colSpan="4" className="px-6 py-10 text-center text-gray-500">No submissions found.</td>
            </tr>
          ) : (
            submissions.map((sub) => (
              <tr key={sub.id} className="hover:bg-blue-50/30 transition-colors">
                <td className="px-6 py-5 text-sm text-gray-900 font-bold">{sub.name}</td>
                <td className="px-6 py-5 text-sm text-gray-600">{sub.email}</td>
                <td className="px-6 py-5 text-sm text-gray-500 max-w-xs truncate">{sub.message}</td>
                <td className="px-6 py-5 text-sm text-gray-400">{new Date(sub.created_at).toLocaleDateString()}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
