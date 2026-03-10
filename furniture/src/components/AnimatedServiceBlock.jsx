import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Check } from 'lucide-react';

const AnimatedServiceBlock = ({ service, index }) => {
    const ref = useRef(null);

    // Track scroll progress for this specific section
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    // Smooth spring physics for animations
    const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
    const smoothProgress = useSpring(scrollYProgress, springConfig);

    // Parallax image movement
    const imageY = useTransform(smoothProgress, [0, 1], [100, -100]);
    const imageScale = useTransform(smoothProgress, [0, 0.5, 1], [0.9, 1, 0.9]);

    // Content reveal animations
    const contentY = useTransform(smoothProgress, [0, 0.3, 0.7], [80, 0, -20]);
    const contentOpacity = useTransform(smoothProgress, [0, 0.2, 0.6, 1], [0, 1, 1, 0.7]);

    // Check for reduced motion preference
    const prefersReducedMotion = typeof window !== 'undefined'
        ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
        : false;

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1,
            }
        }
    };

    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 40,
            scale: 0.95
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 20,
                mass: 0.8
            }
        }
    };

    const keyPointVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: (i) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: i * 0.08,
                type: "spring",
                stiffness: 100,
                damping: 15
            }
        })
    };

    return (
        <motion.div
            ref={ref}
            className="relative py-24 lg:py-32 border-b border-gray-200"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-10%" }}
            variants={containerVariants}
        >
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                    {/* Left: Number + Title + Description + Button */}
                    <motion.div
                        variants={itemVariants}
                        className="lg:col-span-3"
                        style={prefersReducedMotion ? {} : {
                            y: contentY,
                            opacity: contentOpacity
                        }}
                    >
                        <motion.span
                            className="text-sm font-medium text-gray-400 tracking-wider block mb-2"
                            variants={itemVariants}
                        >
                            {service.number}
                        </motion.span>

                        <motion.h2
                            className="text-3xl lg:text-4xl font-serif text-gray-900 mb-4 leading-tight"
                            variants={itemVariants}
                        >
                            {service.title}
                        </motion.h2>

                        <motion.p
                            className="text-base text-gray-600 leading-relaxed mb-6"
                            variants={itemVariants}
                        >
                            {service.description}
                        </motion.p>

                        <motion.button
                            className="group px-6 py-2.5 bg-gray-900 text-white text-sm rounded-md hover:bg-gray-800 transition-all duration-300 font-medium inline-flex items-center gap-2"
                            variants={itemVariants}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            LEARN MORE
                            <motion.span
                                className="inline-block"
                                animate={{ x: [0, 4, 0] }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 1.5,
                                    ease: "easeInOut"
                                }}
                            >
                                →
                            </motion.span>
                        </motion.button>
                    </motion.div>

                    {/* Center: Image with Parallax */}
                    <motion.div
                        variants={itemVariants}
                        className="lg:col-span-5 relative"
                    >
                        <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-gray-100">
                            <motion.img
                                src={service.image}
                                alt={service.title}
                                className="w-full h-full object-cover"
                                style={prefersReducedMotion ? {} : {
                                    y: imageY,
                                    scale: imageScale
                                }}
                                loading="lazy"
                            />
                            {/* Overlay gradient for depth */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />
                        </div>
                    </motion.div>

                    {/* Right: Key Points */}
                    <motion.div
                        variants={itemVariants}
                        className="lg:col-span-4"
                    >
                        <motion.h3
                            className="text-sm font-semibold text-gray-900 mb-5"
                            variants={itemVariants}
                        >
                            Key Point
                        </motion.h3>

                        <ul className="space-y-3">
                            {service.keyPoints.map((point, idx) => (
                                <motion.li
                                    key={idx}
                                    className="flex items-start gap-3"
                                    custom={idx}
                                    variants={keyPointVariants}
                                    whileHover={{ x: 4 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                >
                                    <motion.div
                                        className="w-5 h-5 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0 mt-0.5"
                                        whileHover={{ scale: 1.1, rotate: 360 }}
                                        transition={{ type: "spring", stiffness: 200, damping: 10 }}
                                    >
                                        <Check className="w-3 h-3 text-white" />
                                    </motion.div>
                                    <span className="text-sm text-gray-700 leading-relaxed">
                                        {point}
                                    </span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default AnimatedServiceBlock;
