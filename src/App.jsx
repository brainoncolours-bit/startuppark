import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Lenis from '@studio-freight/lenis';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';


function AppContent() {
  const [showNavbar, setShowNavbar] = useState(true); // Default to true so it shows at start
  const location = useLocation();
  const lenisRef = useRef(null);

  // Initialize Lenis for smooth scroll
  useEffect(() => {
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
  }, []);

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
      <Navbar show={showNavbar} />
      <main className={`flex-1 w-full ${isHome ? '' : 'bg-gray-50'}`}>
        <Routes>
          <Route path="/" element={<Home onNavbarShow={setShowNavbar} />} />
         
        </Routes>
      </main>
      {!isHome && <Footer />}
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