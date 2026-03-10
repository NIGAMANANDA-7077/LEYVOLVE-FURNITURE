import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, Calendar, Ruler, ArrowRight } from 'lucide-react';
import { projects } from '../data/projectsData';

const ProjectDetailPage = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const project = projects.find(p => p.slug === slug);

    useEffect(() => {
        window.scrollTo(0, 0);
        if (!project) {
            navigate('/projects');
        }
    }, [slug, navigate, project]);

    if (!project) return null;

    const relatedProjects = projects
        .filter(p => p.category === project.category && p.id !== project.id)
        .slice(0, 3);

    return (
        <div className="min-h-screen bg-[#FFF8F0]">
            {/* Hero Section */}
            <div className="relative h-[70vh] min-h-[500px]">
                <motion.img
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1 }}
                    src={project.featuredImage}
                    alt={project.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                {/* Hero Content */}
                <div className="absolute inset-0 flex flex-col justify-end">
                    <div className="container mx-auto px-6 pb-16">
                        <button
                            onClick={() => navigate(-1)}
                            className="mb-8 flex items-center gap-2 text-white hover:text-gray-200 transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Back
                        </button>

                        <motion.div
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                        >
                            <span className="text-sm font-medium text-white/80 uppercase tracking-wider mb-3 block">
                                {project.category}
                            </span>
                            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-4">
                                {project.title}
                            </h1>
                            <p className="text-xl md:text-2xl text-white/90 font-light max-w-2xl">
                                {project.subtitle}
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Stats Row */}
            <div className="border-y border-gray-200 bg-white">
                <div className="container mx-auto px-6 py-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <MapPin className="w-6 h-6 text-gray-900 mx-auto mb-2" />
                            <p className="text-sm text-gray-500 uppercase tracking-wide">Location</p>
                            <p className="text-lg font-medium text-gray-900">{project.stats.location}</p>
                        </div>
                        <div className="text-center">
                            <Ruler className="w-6 h-6 text-gray-900 mx-auto mb-2" />
                            <p className="text-sm text-gray-500 uppercase tracking-wide">Size</p>
                            <p className="text-lg font-medium text-gray-900">{project.stats.size}</p>
                        </div>
                        <div className="text-center">
                            <Calendar className="w-6 h-6 text-gray-900 mx-auto mb-2" />
                            <p className="text-sm text-gray-500 uppercase tracking-wide">Duration</p>
                            <p className="text-lg font-medium text-gray-900">{project.stats.duration}</p>
                        </div>
                        <div className="text-center">
                            <Calendar className="w-6 h-6 text-gray-900 mx-auto mb-2" />
                            <p className="text-sm text-gray-500 uppercase tracking-wide">Completed</p>
                            <p className="text-lg font-medium text-gray-900">{project.stats.year}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-6 py-20">
                <div className="grid lg:grid-cols-3 gap-16">
                    {/* Left Column - Content */}
                    <div className="lg:col-span-2 space-y-12">
                        {/* Overview */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl font-serif text-gray-900 mb-4">Project Overview</h2>
                            <p className="text-lg text-gray-600 leading-relaxed mb-4">
                                {project.longDescription}
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                {project.description}
                            </p>
                        </motion.div>

                        {/* Gallery */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl font-serif text-gray-900 mb-6">Project Gallery</h2>
                            <div className="grid grid-cols-2 gap-4">
                                {project.gallery.map((img, idx) => (
                                    <motion.div
                                        key={idx}
                                        whileHover={{ scale: 1.02 }}
                                        className="aspect-[4/3] rounded-lg overflow-hidden cursor-pointer"
                                        onClick={() => setCurrentImageIndex(idx)}
                                    >
                                        <img
                                            src={img}
                                            alt={`${project.title} - ${idx + 1}`}
                                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                                        />
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Client Goals & Outcome */}
                        <div className="grid md:grid-cols-2 gap-8">
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="bg-white p-8 rounded-xl shadow-sm"
                            >
                                <h3 className="text-xl font-serif text-gray-900 mb-3">Client Goals</h3>
                                <p className="text-gray-600 leading-relaxed">{project.clientGoals}</p>
                            </motion.div>

                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className="bg-white p-8 rounded-xl shadow-sm"
                            >
                                <h3 className="text-xl font-serif text-gray-900 mb-3">Outcome</h3>
                                <p className="text-gray-600 leading-relaxed">{project.outcome}</p>
                            </motion.div>
                        </div>
                    </div>

                    {/* Right Column - Details */}
                    <div className="space-y-8">
                        {/* Materials */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-white p-8 rounded-xl shadow-sm sticky top-24"
                        >
                            <h3 className="text-2xl font-serif text-gray-900 mb-6">Materials Used</h3>
                            <ul className="space-y-3">
                                {project.materials.map((material, idx) => (
                                    <li key={idx} className="flex items-center gap-3">
                                        <span className="w-2 h-2 bg-gray-900 rounded-full" />
                                        <span className="text-gray-700">{material}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-8 pt-8 border-t border-gray-200">
                                <h3 className="text-2xl font-serif text-gray-900 mb-6">Furniture Supplied</h3>
                                <ul className="space-y-3">
                                    {project.furnitureSupplied.map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-3">
                                            <span className="w-2 h-2 bg-gray-900 rounded-full" />
                                            <span className="text-gray-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gray-900 py-20">
                <div className="container mx-auto px-6 text-center">
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
                            Ready to Start Your Project?
                        </h2>
                        <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                            Let's create something extraordinary together. Contact us to discuss your vision.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 rounded-full font-medium hover:bg-gray-100 transition-colors"
                        >
                            Start a Similar Project
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Related Projects */}
            {relatedProjects.length > 0 && (
                <div className="container mx-auto px-6 py-20">
                    <h2 className="text-4xl font-serif text-gray-900 mb-12 text-center">Related Projects</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {relatedProjects.map(related => (
                            <Link key={related.id} to={`/projects/${related.slug}`}>
                                <motion.div
                                    whileHover={{ y: -8 }}
                                    className="group cursor-pointer"
                                >
                                    <div className="aspect-[4/3] rounded-lg overflow-hidden mb-4">
                                        <img
                                            src={related.featuredImage}
                                            alt={related.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                    </div>
                                    <span className="text-sm text-gray-500 uppercase tracking-wide">{related.category}</span>
                                    <h3 className="text-xl font-serif text-gray-900 mt-2 group-hover:text-gray-600 transition-colors">
                                        {related.title}
                                    </h3>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProjectDetailPage;
