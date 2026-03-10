import React from 'react';
import { motion } from 'framer-motion';
import StackedServicesScroll from './StackedServicesScroll';
import ServicesGallery from './ServicesGallery';
import ServicesCTA from './ServicesCTA';
import { servicesData } from '../data/servicesData';

const ServicesPageNew = () => {
    return (
        <div className="min-h-screen bg-[#FFF8F0]">
            {/* Hero Section */}
            <section className="relative py-32 bg-white border-b border-gray-200 overflow-hidden">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.8,
                            ease: [0.6, 0.05, 0.01, 0.9]
                        }}
                        className="max-w-4xl"
                    >
                        <motion.span
                            className="text-sm font-medium text-gray-400 tracking-widest uppercase block mb-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                        >
                            What We Do
                        </motion.span>

                        <motion.h1
                            className="text-6xl md:text-7xl lg:text-8xl font-serif text-gray-900 mb-8 leading-none"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                        >
                            Our Services
                        </motion.h1>

                        <motion.p
                            className="text-xl text-gray-600 leading-relaxed max-w-2xl"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                        >
                            From custom design to complete furnishing solutions, we offer comprehensive
                            services to transform your space into a masterpiece of comfort and style.
                        </motion.p>
                    </motion.div>
                </div>

                {/* Decorative gradient */}
                <motion.div
                    className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.6, duration: 1.2 }}
                />
            </section>

            {/* Stacked Services Scroll Section */}
            <StackedServicesScroll services={servicesData} />

            {/* Gallery Section */}
            <ServicesGallery />

            {/* CTA Section */}
            <ServicesCTA />
        </div>
    );
};

export default ServicesPageNew;
