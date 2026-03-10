import React from 'react';
import { motion } from 'framer-motion';

const ServicesGallery = () => {
    const galleryImages = [
        "https://images.unsplash.com/photo-1556912167-f556f1f39fdf?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1519961655809-34fa156820ff?auto=format&fit=crop&w=800&q=80",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ95h3fTCE4yOpV73x--EVXsGMWkop8lq38w&s",
        "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=800&q=80"
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.12,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 60,
            scale: 0.9
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 80,
                damping: 20
            }
        }
    };

    return (
        <div className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-10%" }}
                    variants={containerVariants}
                    className="grid grid-cols-2 md:grid-cols-3 gap-6"
                >
                    {galleryImages.map((image, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{
                                scale: 1.05,
                                zIndex: 10,
                                transition: {
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 20
                                }
                            }}
                            className="relative aspect-square rounded-2xl overflow-hidden bg-gray-100 group cursor-pointer"
                        >
                            <motion.img
                                src={image}
                                alt={`Gallery ${index + 1}`}
                                className="w-full h-full object-cover"
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                loading="lazy"
                            />
                            <motion.div
                                className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 1 }}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default ServicesGallery;
