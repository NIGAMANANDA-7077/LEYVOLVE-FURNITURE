import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const AboutFeedGallery = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start']
    });

    const x = useTransform(scrollYProgress, [0, 1], ['0%', '-50%']);

    const images = [
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1556912167-f556f1f39fdf?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=800&q=80",
        "https://mysleepyhead.com/media/catalog/product/b/u/buy_sectional_sofa_brown.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=",
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1519961655809-34fa156820ff?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&w=800&q=80"
    ];

    // Duplicate images for seamless loop
    const doubledImages = [...images, ...images];

    return (
        <section ref={containerRef} className="py-20 bg-[#FFF8F0] overflow-hidden">
            <div className="mb-12 px-6">
                <h2 className="text-4xl md:text-5xl font-serif text-gray-900 text-center">
                    From Our Collections
                </h2>
            </div>

            {/* Horizontal Scroll Gallery */}
            <motion.div
                style={{ x }}
                className="flex gap-6"
            >
                {doubledImages.map((image, index) => (
                    <motion.div
                        key={index}
                        className="flex-shrink-0"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <div className="w-[400px] h-[500px] rounded-2xl overflow-hidden shadow-xl">
                            <img
                                src={image}
                                alt={`Gallery item ${index + 1}`}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default AboutFeedGallery;
