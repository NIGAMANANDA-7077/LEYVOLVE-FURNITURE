import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import AnimatedContactPanel from '../components/AnimatedContactPanel';

const ContactPage = () => {
    const [openPanel, setOpenPanel] = useState(null);

    const handlePanelToggle = (panelName) => {
        setOpenPanel(openPanel === panelName ? null : panelName);
    };

    const headingVariants = {
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
        <div className="min-h-screen relative py-20 px-6">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=2000&q=80"
                    alt="Contact background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#FFF8F0]/30 via-[#FFF8F0]/90 to-[#FFF8F0]/95" />
            </div>

            <div className="container mx-auto max-w-5xl relative z-10">
                {/* Heading */}
                <motion.h1
                    initial="hidden"
                    animate="visible"
                    variants={headingVariants}
                    className="text-6xl md:text-7xl lg:text-8xl font-serif text-gray-900 text-center mb-16"
                >
                    Contact Us
                </motion.h1>

                {/* Contact Form */}
                <ContactForm />

                {/* Expandable Contact Panels */}
                <div className="mt-12 space-y-4 max-w-3xl mx-auto">
                    <AnimatedContactPanel
                        icon={Phone}
                        title="Call Us"
                        isOpen={openPanel === 'call'}
                        onToggle={() => handlePanelToggle('call')}
                        content={
                            <div className="space-y-3">
                                <p className="text-gray-700">
                                    Speak with our design consultants about custom furniture, showroom visits, or bulk orders.
                                </p>
                                <div className="space-y-1">
                                    <p className="font-medium text-gray-900">+91 (XXX) XXX-XXXX</p>
                                    <p className="text-sm text-gray-600">Mon-Sat, 10 AM - 7 PM</p>
                                </div>
                            </div>
                        }
                    />

                    <AnimatedContactPanel
                        icon={Mail}
                        title="Email Us"
                        isOpen={openPanel === 'email'}
                        onToggle={() => handlePanelToggle('email')}
                        content={
                            <div className="space-y-3">
                                <p className="text-gray-700">
                                    For custom furniture inquiries, design consultations, or bulk orders.
                                </p>
                                <div className="space-y-1">
                                    <p className="font-medium text-gray-900">hello@LEYVOLVEfurniture.com</p>
                                    <p className="text-sm text-gray-600">Response time: Within 24 hours</p>
                                </div>
                            </div>
                        }
                    />
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
