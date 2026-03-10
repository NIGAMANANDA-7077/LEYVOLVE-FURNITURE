import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutCTA = () => {
    return (
        <section className="py-32 bg-white">
            <div className="container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-20%" }}
                    transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
                    className="max-w-3xl mx-auto space-y-8"
                >
                    <h2 className="text-5xl md:text-6xl font-serif text-gray-900">
                        Ready to transform your space?
                    </h2>
                    <p className="text-xl text-gray-600">
                        Explore our curated collections and discover furniture that tells your story.
                    </p>

                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <Link
                            to="/products"
                            className="inline-flex items-center gap-3 px-10 py-4 bg-gray-900 text-white text-lg rounded-full hover:bg-gray-800 transition-all duration-300 font-medium group"
                        >
                            Explore Our Collections
                            <motion.div
                                animate={{ x: [0, 4, 0] }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 1.5,
                                    ease: "easeInOut"
                                }}
                            >
                                <ArrowRight className="w-6 h-6" />
                            </motion.div>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutCTA;
