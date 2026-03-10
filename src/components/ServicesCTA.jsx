import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ServicesCTA = () => {
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
                type: "spring",
                stiffness: 80,
                damping: 20
            }
        }
    };

    return (
        <div className="py-32 bg-[#FFF8F0] overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-15%" }}
                    variants={containerVariants}
                    className="max-w-4xl mx-auto text-center"
                >
                    <motion.h2
                        className="text-5xl md:text-6xl lg:text-7xl font-serif text-gray-900 mb-6 leading-tight"
                        variants={itemVariants}
                    >
                        Start Your Dream Project Today
                    </motion.h2>

                    <motion.p
                        className="text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto"
                        variants={itemVariants}
                    >
                        Let's collaborate to bring your vision to life. Our team of expert designers and craftsmen
                        is ready to create furniture that perfectly reflects your style and needs.
                    </motion.p>

                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                        variants={itemVariants}
                    >
                        <motion.button
                            className="px-10 py-4 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all duration-300 font-medium flex items-center gap-2 group"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Schedule Consultation
                            <motion.div
                                animate={{ x: [0, 4, 0] }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 1.5,
                                    ease: "easeInOut"
                                }}
                            >
                                <ArrowRight className="w-5 h-5" />
                            </motion.div>
                        </motion.button>

                        <motion.button
                            className="px-10 py-4 bg-white text-gray-900 rounded-full hover:bg-gray-50 border border-gray-200 transition-all duration-300 font-medium"
                            whileHover={{ scale: 1.05, borderColor: "#000" }}
                            whileTap={{ scale: 0.98 }}
                        >
                            View Portfolio
                        </motion.button>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default ServicesCTA;
