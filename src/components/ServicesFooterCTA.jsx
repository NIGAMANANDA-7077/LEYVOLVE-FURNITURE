import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, ArrowRight } from 'lucide-react';

const ServicesFooterCTA = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
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
        <div className="py-32 bg-gray-900 text-white">
            <div className="container mx-auto px-6">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-10%" }}
                    variants={containerVariants}
                    className="grid lg:grid-cols-2 gap-12 items-center"
                >
                    <motion.div variants={itemVariants}>
                        <h2 className="text-5xl md:text-6xl font-serif mb-6 leading-tight">
                            Let's Talk!
                        </h2>
                        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                            Ready to transform your space? Get in touch with our team to discuss
                            your project and discover how we can help bring your vision to life.
                        </p>
                        <div className="space-y-4">
                            <motion.div
                                className="flex items-center gap-4"
                                whileHover={{ x: 4 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <Mail className="w-6 h-6 text-gray-400" />
                                <a href="mailto:hello@LEYVOLVEfurniture.com" className="text-lg hover:text-gray-300 transition-colors">
                                    hello@LEYVOLVEfurniture.com
                                </a>
                            </motion.div>
                            <motion.div
                                className="flex items-center gap-4"
                                whileHover={{ x: 4 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <Phone className="w-6 h-6 text-gray-400" />
                                <a href="tel:+1234567890" className="text-lg hover:text-gray-300 transition-colors">
                                    +1 (234) 567-890
                                </a>
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10"
                    >
                        <h3 className="text-2xl font-serif mb-6">Send us a message</h3>
                        <form className="space-y-4">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                            >
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white/40 transition-colors"
                                />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                            >
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white/40 transition-colors"
                                />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                            >
                                <textarea
                                    placeholder="Tell us about your project..."
                                    rows="4"
                                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white/40 transition-colors resize-none"
                                ></textarea>
                            </motion.div>
                            <motion.button
                                type="submit"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 }}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full px-8 py-4 bg-white text-gray-900 rounded-full hover:bg-gray-100 transition-all duration-300 font-medium flex items-center justify-center gap-2 group"
                            >
                                Send Message
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
                        </form>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default ServicesFooterCTA;
