import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-24 bg-surface-dark text-white relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 transform origin-top" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Image Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="w-full lg:w-1/2"
                    >
                        <div className="relative group">
                            <div className="absolute -inset-4 border border-white/10 rounded-2xl transform rotate-3 transition-transform duration-700 group-hover:rotate-0" />
                            <div className="overflow-hidden rounded-2xl shadow-2xl">
                                <motion.img
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 1.5, ease: "easeOut" }}
                                    src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop"
                                    alt="Our Studio"
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Text Section */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-10%" }}
                        variants={{
                            visible: { transition: { staggerChildren: 0.1 } }
                        }}
                        className="w-full lg:w-1/2"
                    >
                        <motion.span
                            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
                            className="text-accent tracking-widest uppercase text-sm font-bold mb-4 block"
                        >
                            Who We Are
                        </motion.span>

                        <motion.h2
                            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } }}
                            className="text-4xl md:text-5xl font-serif mb-8 leading-tight"
                        >
                            Designing the Future of <br />
                            <span className="text-white/50">Modern Living.</span>
                        </motion.h2>

                        <motion.p
                            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
                            className="text-gray-400 text-lg font-light mb-8 leading-relaxed"
                        >
                            At LEYVOLVE FURNITURE, we believe that architecture is more than just buildings; it's about creating spaces that elevate the human experience. With over 15 years of excellence, we have redefined luxury living through sustainable innovation and timeless design.
                        </motion.p>

                        <motion.div
                            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
                            className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10"
                        >
                            {['Award Winning Design', 'Sustainable Materials', '24/7 Client Support', 'Lifetime Warranty'].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                                        <Check size={14} className="text-white" />
                                    </div>
                                    <span className="text-gray-300 font-light">{item}</span>
                                </div>
                            ))}
                        </motion.div>

                        <motion.div
                            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
                            className="flex gap-8 border-t border-white/10 pt-8"
                        >
                            {[
                                { number: '150+', label: 'Projects Completed' },
                                { number: '15+', label: 'Design Awards' },
                                { number: '100%', label: 'Client Satisfaction' }
                            ].map((stat, idx) => (
                                <div key={idx}>
                                    <span className="text-3xl font-serif text-white block">{stat.number}</span>
                                    <span className="text-xs text-gray-400 uppercase tracking-wider">{stat.label}</span>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
