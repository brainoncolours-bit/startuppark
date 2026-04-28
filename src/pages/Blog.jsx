import React, { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import { Calendar, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const { data, error } = await supabase
      .from('posts')
      .select('*, post_images(*)')
      .eq('status', 'published')
      .order('created_at', { ascending: false });

    if (!error) setPosts(data);
    setLoading(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50/50 py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20 text-center max-w-3xl mx-auto">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 bg-linear-to-b from-black to-gray-500 bg-clip-text text-transparent"
          >
            Insights & <br/>Innovation
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 text-xl leading-relaxed"
          >
            Discover the stories behind the most successful startups and the trends shaping the future of technology.
          </motion.p>
        </header>

        {posts.length === 0 ? (
          <div className="text-center py-32 bg-white rounded-[40px] shadow-sm border border-gray-100">
            <p className="text-gray-400 text-lg">Our stories are being curated. Check back soon.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {posts.map((post, idx) => (
              <motion.div 
                key={post.id}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => navigate(`/blog/${post.id}`)}
                className="group cursor-pointer bg-white rounded-[40px] p-4 border border-gray-100 hover:border-black/5 hover:shadow-2xl hover:shadow-black/5 transition-all duration-500"
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-[32px] mb-8">
                  {post.post_images && post.post_images[0] ? (
                    <img 
                      src={post.post_images[0].image_url} 
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-300">
                      No Image
                    </div>
                  )}
                  <div className="absolute top-6 left-6 flex gap-2">
                    <span className="bg-white/80 backdrop-blur-md px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.2em]">
                      Article
                    </span>
                  </div>
                </div>
                
                <div className="px-6 pb-8">
                  <div className="flex items-center space-x-3 text-sm text-gray-400 mb-6">
                    <Calendar size={14} />
                    <span className="font-medium tracking-wide">
                      {new Date(post.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                    <span className="text-gray-200">•</span>
                    <span className="text-black font-bold uppercase text-[10px] tracking-widest">5 min read</span>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-bold mb-6 group-hover:text-blue-600 transition-colors leading-tight">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-500 text-lg line-clamp-2 mb-8 leading-relaxed">
                    {post.description}
                  </p>
                  
                  <div className="flex items-center text-black font-bold uppercase text-xs tracking-widest group-hover:translate-x-2 transition-transform duration-300">
                    Explore Story <ArrowRight size={16} className="ml-2" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
