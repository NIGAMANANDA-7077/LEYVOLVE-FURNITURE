import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Handle form submission here
    };

    const containerVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: [0.6, 0.05, 0.01, 0.9],
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: [0.6, 0.05, 0.01, 0.9]
            }
        }
    };

    return (
        <motion.form
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            onSubmit={handleSubmit}
            className="w-full max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12"
        >
            {/* Two-column layout for Name and Email */}
            <div className="grid md:grid-cols-2 gap-6 mb-6">
                <motion.div variants={itemVariants}>
                    <label htmlFor="name" className="block text-xs uppercase tracking-wider text-gray-600 mb-2 font-medium">
                        Full Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                    />
                </motion.div>

                <motion.div variants={itemVariants}>
                    <label htmlFor="email" className="block text-xs uppercase tracking-wider text-gray-600 mb-2 font-medium">
                        Email Address
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your email address"
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                    />
                </motion.div>
            </div>

            {/* Message textarea */}
            <motion.div variants={itemVariants} className="mb-6">
                <label htmlFor="message" className="block text-xs uppercase tracking-wider text-gray-600 mb-2 font-medium">
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your furniture needs, custom designs, or showroom visit..."
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all resize-none"
                />
            </motion.div>

            {/* Submit button */}
            <motion.div variants={itemVariants}>
                <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gray-900 text-white py-4 rounded-lg font-medium text-lg flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors"
                >
                    Send Message
                    <Send className="w-5 h-5" />
                </motion.button>
            </motion.div>
        </motion.form>
    );
};

export default ContactForm;
