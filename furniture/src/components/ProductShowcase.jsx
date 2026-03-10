import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const getCategoryLink = (title) => {
    switch (title) {
        case 'SOFA': return 'Sofas';
        case 'BED': return 'Beds';
        case 'TABLE': return 'Tables';
        case 'CHAIR': return 'Chairs';
        default: return 'All';
    }
};

const ProductShowcase = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const products = [
        {
            id: 1,
            title: "SOFA",
            image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop", // Modern Grey Sofa
            description: "Comfort defined by elegant curves."
        },
        {
            id: 2,
            title: "BED",
            image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=2070&auto=format&fit=crop", // Cozy Bedroom
            description: "Rest in absolute serenity."
        },
        {
            id: 3,
            title: "TABLE",
            image: "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?q=80&w=2070&auto=format&fit=crop", // Minimalist Dining Table
            description: "Where conversations flourish."
        },
        {
            id: 4,
            title: "CHAIR",
            image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?q=80&w=2070&auto=format&fit=crop", // Accent Chair
            description: "Iconic seating for modern spaces."
        }
    ];

    return (
        <section id="products" className="relative w-full h-[60vh] md:h-[80vh] flex flex-col md:flex-row bg-black overflow-hidden group">
            {products.map((product, index) => (
                <motion.div
                    key={product.id}
                    onHoverStart={() => setHoveredIndex(index)}
                    onHoverEnd={() => setHoveredIndex(null)}
                    className="relative flex-1 h-full cursor-pointer overflow-hidden border-b md:border-b-0 md:border-r border-white/10 last:border-none transition-all duration-700 ease-out"
                // On mobile, they stack just as flex-auto. On desktop, we could expand the hovered one?
                // For now, keeping equal width but "focusing" visually.
                >
                    {/* Background Image */}
                    <motion.div
                        className="absolute inset-0 w-full h-full"
                        animate={{
                            scale: hoveredIndex === index ? 1.1 : 1,
                            filter: hoveredIndex !== null && hoveredIndex !== index ? "brightness(0.5) grayscale(100%)" : "brightness(0.9) grayscale(0%)"
                        }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <img
                            src={product.image}
                            alt={product.title}
                            className="w-full h-full object-cover"
                        />
                    </motion.div>

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />

                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col justify-end items-center pb-12 p-6 text-center z-10">
                        <motion.h3
                            className="text-4xl md:text-5xl font-sans font-bold tracking-widest text-white uppercase mb-4"
                            animate={{
                                y: hoveredIndex === index ? -10 : 0,
                                opacity: hoveredIndex !== null && hoveredIndex !== index ? 0.3 : 1
                            }}
                            transition={{ duration: 0.4 }}
                        >
                            {product.title}
                        </motion.h3>

                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{
                                opacity: hoveredIndex === index ? 1 : 0,
                                height: hoveredIndex === index ? 'auto' : 0,
                                y: hoveredIndex === index ? 0 : 20
                            }}
                            className="overflow-hidden"
                        >
                            <p className="text-gray-300 font-light text-sm tracking-wide mb-4">
                                {product.description}
                            </p>
                            <div className="inline-block">
                                <Link
                                    to={`/products?category=${getCategoryLink(product.title)}`}
                                    className="inline-flex items-center gap-2 text-white text-xs uppercase tracking-[0.2em] border-b border-white pb-1 group/btn"
                                >
                                    Explore <ArrowUpRight size={14} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            ))}
        </section>
    );
};

export default ProductShowcase;
