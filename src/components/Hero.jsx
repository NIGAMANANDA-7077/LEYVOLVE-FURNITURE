import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden bg-secondary">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2070&auto=format&fit=crop"
                    alt="Luxury Architecture"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 md:bg-black/20" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            <div className="container mx-auto px-6 relative z-10 pt-20">
                <div className="max-w-4xl mx-auto text-center text-white">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="inline-block mb-4 text-sm md:text-base font-medium tracking-[0.2em] uppercase opacity-90"
                    >
                        Redefining Modern Living
                    </motion.span>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium leading-tight mb-8"
                    >
                        Designed for <br />
                        <span className="italic font-light">Timeless Moments</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 font-light leading-relaxed"
                    >
                        Experience the perfect harmony of nature and architecture.
                        Sustainable luxury homes crafted for the visionary.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <a
                            href="#projects"
                            className="group flex items-center gap-2 px-8 py-4 bg-white text-primary text-sm font-semibold tracking-wide rounded-full hover:bg-neutral-100 transition-all transform hover:scale-105"
                        >
                            View Projects
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-4 bg-transparent border border-white/30 text-white text-sm font-semibold tracking-wide rounded-full hover:bg-white/10 backdrop-blur-sm transition-all"
                        >
                            Contact Us
                        </a>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/70"
            >
                <div className="flex flex-col items-center gap-2">
                    <span className="text-[10px] uppercase tracking-widest">Scroll</span>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                        className="w-px h-12 bg-gradient-to-b from-white to-transparent"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
