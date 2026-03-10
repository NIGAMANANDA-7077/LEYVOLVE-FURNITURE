import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const AboutStory = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-20%" });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.6, 0.05, 0.01, 0.9]
            }
        }
    };

    return (
        <section className="py-32 bg-white">
            <div className="container mx-auto px-6 max-w-6xl">
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={containerVariants}
                    className="text-center space-y-8"
                >
                    <motion.h2
                        variants={itemVariants}
                        className="text-5xl md:text-6xl lg:text-7xl font-serif text-gray-900 leading-tight"
                    >
                        Every piece tells a story of
                        <br />
                        craftsmanship and care
                    </motion.h2>

                    <motion.p
                        variants={itemVariants}
                        className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto"
                    >
                        For over three decades, we've been crafting furniture that transforms houses into homes.
                        Each piece begins with sustainably sourced materials and passes through the hands of
                        master artisans who bring decades of experience to every cut, joint, and finish.
                        Our commitment to quality means furniture that doesn't just look beautiful—it becomes
                        part of your family's story for generations to come.
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutStory;
