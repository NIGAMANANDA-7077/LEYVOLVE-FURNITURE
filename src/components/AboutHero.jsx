import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const AboutHero = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end start']
    });

    const y = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);

    return (
        <section ref={containerRef} className="relative h-screen overflow-hidden bg-[#FFF8F0]">
            {/* Hero Image with Parallax */}
            <motion.div
                className="absolute inset-0"
                style={{ y, opacity }}
            >
                <div className="relative w-full h-full">
                    <img
                        src="https://images.unsplash.com/photo-1513519245088-0e12902e35ca?auto=format&fit=crop&w=2000&q=80"
                        alt="Furniture craftsmanship"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-[#FFF8F0]" />
                </div>
            </motion.div>

            {/* Hero Title */}
            <div className="relative z-10 h-full flex items-center justify-center">
                <div className="container mx-auto px-6">
                    <motion.h1
                        initial={{ opacity: 0, y: 60 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 1.2,
                            ease: [0.6, 0.05, 0.01, 0.9]
                        }}
                        className="text-8xl md:text-9xl lg:text-[12rem] font-serif text-black text-center leading-none tracking-tight"
                    >
                        Our Story
                    </motion.h1>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{
                        repeat: Infinity,
                        duration: 2,
                        ease: "easeInOut"
                    }}
                    className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2"
                >
                    <motion.div className="w-1.5 h-1.5 bg-white rounded-full" />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default AboutHero;
