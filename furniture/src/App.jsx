import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import ScrollHero from './components/ScrollHero';
import ProductShowcase from './components/ProductShowcase';
import Services from './components/Services';
import Projects from './components/Projects';
import About from './components/About';
import ContactCTA from './components/ContactCTA';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ProductsPage from './components/ProductsPage';
import ServicesPageNew from './components/ServicesPageNew';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import CartPage from './pages/CartPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import ScrollToTop from './components/ScrollToTop';
import Preloader from './components/Preloader';

// Home Page Component
const HomePage = () => (
  <>
    <ScrollHero />
    <Services />
    <ProductShowcase />
    <Projects />
    <About />
    <FAQ />
    <ContactCTA />
  </>
);

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <CartProvider>
      <BrowserRouter>
        <ScrollToTop />
        <AnimatePresence mode="wait">
          {loading ? (
            <Preloader key="preloader" />
          ) : (
            <motion.div
              key="main-content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="bg-white min-h-screen text-gray-900 font-sans selection:bg-black selection:text-white"
            >
              <Navbar />
              <main>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/products" element={<ProductsPage />} />
                  <Route path="/products/:id" element={<ProductDetailPage />} />
                  <Route path="/projects" element={<ProjectsPage />} />
                  <Route path="/projects/:slug" element={<ProjectDetailPage />} />
                  <Route path="/services" element={<ServicesPageNew />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/contact" element={<ContactPage />} />
                  <Route path="/cart" element={<CartPage />} />
                </Routes>
              </main>
              <Footer />
            </motion.div>
          )}
        </AnimatePresence>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
