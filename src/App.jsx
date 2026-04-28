import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Lenis from '@studio-freight/lenis';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';


import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import CreatePost from './pages/admin/CreatePost';
import EditPost from './pages/admin/EditPost';

function AppContent() {
  const [showNavbar, setShowNavbar] = useState(true); // Default to true so it shows at start
  const location = useLocation();
  const lenisRef = useRef(null);

  const isAdminPage = location.pathname.startsWith('/admin');

  // Initialize Lenis for smooth scroll
  useEffect(() => {
    if (isAdminPage) return; // Disable Lenis on admin pages if preferred

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, [isAdminPage]);

  // Reset navbar visibility when route changes
  useEffect(() => {
    if (location.pathname !== '/') {
      setShowNavbar(true);
    } else {
      setShowNavbar(true); // Show initially on home
    }
    
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    }
  }, [location.pathname]);

  const isHome = location.pathname === '/';

  return (
    <div className="flex flex-col min-h-screen w-full">
      {!isAdminPage && <Navbar show={showNavbar} />}
      <main className={`flex-1 w-full ${isHome || isAdminPage ? '' : 'bg-gray-50'}`}>
        <Routes>
          <Route path="/" element={<Home onNavbarShow={setShowNavbar} />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          
          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/posts/new" element={<CreatePost />} />
          <Route path="/admin/posts/edit/:id" element={<EditPost />} />
        </Routes>
      </main>
      {!isHome && !isAdminPage && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;