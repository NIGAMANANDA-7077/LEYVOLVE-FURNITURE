import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const ServiceBlock = ({ service, index }) => {
    return (
        <div className="py-20 border-b border-gray-200">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                    {/* Left: Number + Title + Description + Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-3"
                    >
                        <span className="text-sm font-medium text-gray-400 tracking-wide">
                            {service.number}
                        </span>
                        <h2 className="text-3xl font-serif text-gray-900 mt-4 mb-4">
                            {service.title}
                        </h2>
                        <p className="text-base text-gray-600 leading-relaxed mb-6">
                            {service.description}
                        </p>
                        <button className="px-6 py-2.5 bg-gray-900 text-white text-sm rounded-md hover:bg-gray-800 transition-colors duration-300 font-medium">
                            LEARN MORE →
                        </button>
                    </motion.div>

                    {/* Center: Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:col-span-5"
                    >
                        <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-gray-100">
                            <img
                                src={service.image}
                                alt={service.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </motion.div>

                    {/* Right: Key Points */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="lg:col-span-4"
                    >
                        <h3 className="text-sm font-semibold text-gray-900 mb-4">
                            Key Point
                        </h3>
                        <ul className="space-y-3">
                            {service.keyPoints.map((point, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <div className="w-5 h-5 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <Check className="w-3 h-3 text-white" />
                                    </div>
                                    <span className="text-sm text-gray-700">{point}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ServiceBlock;
