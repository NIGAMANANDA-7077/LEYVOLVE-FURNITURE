import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar = () => {
    const { getCartCount } = useCart();
    const location = useLocation();
    const [isScrolled, setIsScrolled] = useState(() => {
        // Initialize based on current path and scroll position to avoid animation flash
        if (location.pathname !== '/') return true;
        return typeof window !== 'undefined' && window.scrollY > 2700;
    });
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (location.pathname === '/') {
                setIsScrolled(window.scrollY > 2700);
            } else {
                setIsScrolled(true);
            }
        };

        // Run immediately on route change
        handleScroll();

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [location.pathname]);

    const navLinks = [
        { name: 'Home', href: '/', isHash: false },
        { name: 'Services', href: '/services', isHash: false },
        { name: 'Products', href: '/products', isHash: false },
        { name: 'About', href: '/about', isHash: false },
    ];

    return (
        <AnimatePresence>
            <motion.nav
                initial={{ y: -100, x: "-50%", opacity: 0 }}
                animate={{
                    y: 0,
                    x: "-50%",
                    opacity: 1,
                    width: isScrolled ? "100%" : "95%",
                    top: isScrolled ? "0px" : "20px",
                    borderRadius: isScrolled ? "0px" : "100px",
                }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }} // smooth easeOutQuint-ish
                className={`fixed left-1/2 z-50 transition-colors duration-500 ${isScrolled
                    ? 'bg-white shadow-sm py-4 text-primary'
                    : 'bg-black/30 backdrop-blur-lg border border-white/10 py-4 text-white max-w-7xl'
                    }`}
                style={{
                    maxWidth: isScrolled ? "100%" : "1280px"
                }}
            >
                <div className="container mx-auto px-6 md:px-12 flex justify-between items-center bg-transparent">
                    {/* Brand */}
                    <Link to="/" className={`text-2xl font-serif font-bold tracking-tight transition-colors duration-300 ${isScrolled ? 'text-primary' : 'text-white'}`}>
                        LEYVOLVE <span className={`${isScrolled ? 'text-gray-500' : 'text-white/60'}`}>Furniture</span>.
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => {
                            const isActive = link.isHash ? false : location.pathname === link.href;
                            return link.isHash ? (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className={`text-sm font-medium transition-colors duration-300 ${isScrolled
                                        ? 'text-gray-600 hover:text-primary'
                                        : 'text-white/80 hover:text-white'
                                        }`}
                                >
                                    {link.name}
                                </a>
                            ) : (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    className={`text-sm font-medium transition-colors duration-300 ${isActive
                                        ? isScrolled ? 'text-primary' : 'text-white'
                                        : isScrolled
                                            ? 'text-gray-600 hover:text-primary'
                                            : 'text-white/80 hover:text-white'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
                        <Link
                            to="/cart"
                            className={`p-2.5 rounded-full transition-all duration-300 relative ${isScrolled
                                ? 'text-gray-900 hover:bg-gray-100'
                                : 'text-white hover:bg-white/10'
                                }`}
                        >
                            <ShoppingCart className="w-5 h-5" />
                            {getCartCount() > 0 && (
                                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-[10px] flex items-center justify-center rounded-full font-bold">
                                    {getCartCount()}
                                </span>
                            )}
                        </Link>
                        <Link
                            to="/contact"
                            className={`px-6 py-2.5 text-sm font-medium rounded-full transition-all duration-300 ${isScrolled
                                ? 'bg-primary text-white hover:bg-gray-800'
                                : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                                }`}
                        >
                            Contact
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen
                            ? <X size={24} className={isScrolled ? 'text-primary' : 'text-white'} />
                            : <Menu size={24} className={isScrolled ? 'text-primary' : 'text-white'} />
                        }
                    </button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0, borderRadius: 20 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className={`md:hidden overflow-hidden mt-2 mx-4 rounded-2xl ${isScrolled ? 'bg-white shadow-lg' : 'bg-black/90 backdrop-blur-xl border border-white/10'
                                }`}
                        >
                            <div className="flex flex-col px-6 py-8 space-y-6">
                                {navLinks.map((link) => (
                                    link.isHash ? (
                                        <a
                                            key={link.name}
                                            href={link.href}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className={`text-lg font-medium ${isScrolled ? 'text-gray-800' : 'text-white'}`}
                                        >
                                            {link.name}
                                        </a>
                                    ) : (
                                        <Link
                                            key={link.name}
                                            to={link.href}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className={`text-lg font-medium ${isScrolled ? 'text-gray-800' : 'text-white'}`}
                                        >
                                            {link.name}
                                        </Link>
                                    )
                                ))}
                                <Link
                                    to="/cart"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`flex items-center justify-center gap-2 text-lg font-medium relative ${isScrolled ? 'text-gray-800' : 'text-white'}`}
                                >
                                    <ShoppingCart className="w-5 h-5" />
                                    Cart
                                    {getCartCount() > 0 && (
                                        <span className="absolute top-0 left-6 w-5 h-5 bg-red-500 text-white text-[10px] flex items-center justify-center rounded-full font-bold">
                                            {getCartCount()}
                                        </span>
                                    )}
                                </Link>
                                <Link
                                    to="/contact"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`inline-block text-center w-full px-6 py-3 font-medium rounded-full ${isScrolled
                                        ? 'bg-primary text-white'
                                        : 'bg-white/20 text-white'
                                        }`}
                                >
                                    Contact
                                </Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>
        </AnimatePresence>
    );
};

export default Navbar;
