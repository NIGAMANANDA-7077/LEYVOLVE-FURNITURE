import React from 'react';
import { Pencil, Hammer, Armchair, Ruler } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
    {
        icon: <Pencil className="w-8 h-8" />,
        title: "Interior Design",
        description: "Comprehensive design services for residential and commercial spaces, focusing on aesthetics and functionality."
    },
    {
        icon: <Armchair className="w-8 h-8" />,
        title: "Custom Furniture",
        description: "Bespoke furniture pieces tailored to your exact specifications, ensuring a perfect fit for your home."
    },
    {
        icon: <Hammer className="w-8 h-8" />,
        title: "Renovation",
        description: "Full-scale home and office renovations managed from start to finish with premium quality materials."
    },
    {
        icon: <Ruler className="w-8 h-8" />,
        title: "Space Planning",
        description: "Efficient layout planning to maximize functionality and flow in your living or working environment."
    }
];

const Services = () => {
    return (
        <section id="services" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl font-serif text-gray-900 mb-6"
                    >
                        Our Services
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-gray-500 text-lg"
                    >
                        We provide exceptional design and construction solutions tailored to your unique needs.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="p-8 border border-gray-100 rounded-2xl hover:shadow-lg transition-all duration-300 group"
                        >
                            <div className="mb-6 text-gray-900 group-hover:scale-110 transition-transform duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
                            <p className="text-gray-500 leading-relaxed">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
