import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Calendar, ArrowLeft } from 'lucide-react';

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    const fetchPost = async () => {
      const { data, error } = await supabase
        .from('posts')
        .select('*, post_images(*)')
        .eq('id', id)
        .single();
      
      if (error) navigate('/blog');
      else setPost(data);
      setLoading(false);
    };
    fetchPost();
  }, [id, navigate]);

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black"></div>
    </div>
  );

  const images = post.post_images || [];

  const nextImg = () => setCurrentImg((prev) => (prev + 1) % images.length);
  const prevImg = () => setCurrentImg((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="min-h-screen bg-white pb-24">
      {/* Hero Carousel */}
      <div className="relative h-[70vh] w-full bg-gray-900 overflow-hidden">
        <AnimatePresence mode="wait">
          {images.length > 0 ? (
            <motion.img
              key={currentImg}
              src={images[currentImg].image_url}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : (
             <div className="w-full h-full flex items-center justify-center text-gray-500 italic">No images available</div>
          )}
        </AnimatePresence>

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />

        {/* Carousel Controls */}
        {images.length > 1 && (
          <>
            <button onClick={prevImg} className="absolute left-6 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white transition-all">
              <ChevronLeft size={24} />
            </button>
            <button onClick={nextImg} className="absolute right-6 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full text-white transition-all">
              <ChevronRight size={24} />
            </button>
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, i) => (
                <div key={i} className={`h-1 transition-all rounded-full ${i === currentImg ? 'w-8 bg-white' : 'w-2 bg-white/40'}`} />
              ))}
            </div>
          </>
        )}

        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-full max-w-4xl px-6">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <button onClick={() => navigate('/blog')} className="flex items-center text-white/70 hover:text-white mb-6 transition-colors">
              <ArrowLeft size={20} className="mr-2" /> Back to Stories
            </button>
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight leading-tight">
              {post.title}
            </h1>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 pt-16">
        <div className="flex items-center space-x-4 text-gray-400 mb-10 border-b pb-6">
          <div className="flex items-center space-x-2">
            <Calendar size={18} />
            <span className="text-sm font-medium">{new Date(post.created_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
          </div>
          <span className="text-gray-200">|</span>
          <span className="text-xs uppercase tracking-widest font-bold text-blue-600">Startup Insights</span>
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-800 leading-relaxed whitespace-pre-wrap">
            {post.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
