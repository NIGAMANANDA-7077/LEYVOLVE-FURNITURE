import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, ArrowRight, User, MapPin } from 'lucide-react';
import sofaModernInterior from '../assets/sofa_modern_interior.png';

const ContactCTA = () => {
    return (
        <section id="contact" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Left Column */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-block px-4 py-2 rounded-full border border-gray-200 text-gray-600 text-sm font-semibold tracking-wide uppercase mb-6"
                        >
                            Request a Quote
                        </motion.div>

                        <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6 leading-tight">
                            Let’s Talk <span className="text-gray-600">Renovation</span>
                        </h2>

                        <p className="text-gray-500 text-lg mb-10 max-w-md">
                            Have a renovation in mind? Fill out the form and we’ll get in touch within 24 hours to discuss your project.
                        </p>

                        <div className="rounded-3xl overflow-hidden mb-10 h-64 w-full">
                            <img
                                src={sofaModernInterior}
                                alt="Modern Interior"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="flex flex-col sm:flex-row gap-8">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full border border-orange-200 flex items-center justify-center text-orange-600 shrink-0">
                                    <Phone className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-900">Call Us Now</p>
                                    <p className="text-gray-500">+91 1234567890</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full border border-orange-200 flex items-center justify-center text-orange-600 shrink-0">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-900">Email Us</p>
                                    <p className="text-gray-500">hello@LEYVOLVEfurniture.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Form */}
                    <div className="bg-[#F9F9F9] rounded-[2rem] p-8 md:p-12">
                        <form className="space-y-6">
                            <div>
                                <label className="block text-sm font-semibold text-gray-900 mb-2">Full Name *</label>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-transparent focus:border-orange-500 focus:ring-0 outline-none transition-colors"
                                />
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-900 mb-2">Email Address *</label>
                                    <input
                                        type="email"
                                        placeholder="Your Email"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-transparent focus:border-orange-500 focus:ring-0 outline-none transition-colors"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-900 mb-2">Phone Number (optional)</label>
                                    <input
                                        type="tel"
                                        placeholder="Your Phone Number"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-transparent focus:border-orange-500 focus:ring-0 outline-none transition-colors"
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-900 mb-2">Project Location *</label>
                                    <input
                                        type="text"
                                        placeholder="Your Location"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-transparent focus:border-orange-500 focus:ring-0 outline-none transition-colors"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-900 mb-2">Type of Products*</label>
                                    <select className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-transparent focus:border-orange-500 focus:ring-0 outline-none transition-colors text-gray-500">
                                        <option>Select...</option>
                                        <option>Sofa</option>
                                        <option>Bed</option>
                                        <option>Table</option>
                                        <option>Chair</option>
                                        <option>Wardrobe</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-900 mb-2">Message / Project Brief</label>
                                <textarea
                                    rows="4"
                                    placeholder="Write your project details..."
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-transparent focus:border-orange-500 focus:ring-0 outline-none transition-colors resize-none"
                                ></textarea>
                            </div>

                            <button className="px-8 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-colors font-medium flex items-center gap-2">
                                Request Free Quote
                                <ArrowRight className="w-4 h-4 text-orange-500" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactCTA;
