import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, ArrowUp } from 'lucide-react';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-primary pt-20 pb-10 border-t border-gray-800 font-sans">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="space-y-6">
                        <a href="#" className="text-2xl font-serif font-bold tracking-tight text-white">
                            LEYVOLVE <span className="text-gray-400">Furniture</span>.
                        </a>
                        <p className="text-gray-400 font-light leading-relaxed">
                            Redefining luxury living through sustainable design and architectural excellence.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-white hover:text-primary transition-all">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-6">Explore</h4>
                        <ul className="space-y-4">
                            {['Services', 'Projects', 'About'].map((item) => (
                                <li key={item}>
                                    <a href={`/${item.toLowerCase()}`} className="text-gray-400 hover:text-white transition-colors font-light">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-6">Contact</h4>
                        <ul className="space-y-4 text-gray-400 font-light">
                            <li>Patia, Bhubaneswar</li>
                            <li>Odisha, 751019</li>
                            <li>+91 1234567890</li>
                            <li>hello@LEYVOLVEfurniture.com</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-6">Newsletter</h4>
                        <p className="text-gray-400 font-light mb-4">
                            Subscribe to get the latest design trends and news.
                        </p>
                        <form className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Email address"
                                className="bg-gray-800 px-4 py-3 rounded-l-full w-full outline-none focus:ring-1 focus:ring-gray-600 text-white placeholder-gray-500"
                            />
                            <button className="bg-white text-primary px-6 rounded-r-full hover:bg-gray-200 transition-colors font-medium">
                                Join
                            </button>
                        </form>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800 text-sm text-gray-500 font-light">
                    <p>&copy; 2024 LEYVOLVE FURNITURE Inc. All rights reserved.</p>
                    <div className="flex gap-8 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        <button onClick={scrollToTop} className="flex items-center gap-2 hover:text-white transition-colors">
                            Back to Top <ArrowUp size={14} />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
