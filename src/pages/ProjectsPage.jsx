import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { projects, categories } from '../data/projectsData';

const ProjectsPage = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredProjects = activeCategory === 'All'
        ? projects
        : projects.filter(p => p.category === activeCategory);

    return (
        <div className="min-h-screen bg-[#FFF8F0] pt-24 pb-20">
            <div className="container mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16 max-w-3xl mx-auto"
                >
                    <span className="text-sm font-medium tracking-widest text-gray-500 uppercase mb-4 block">
                        Our Portfolio
                    </span>
                    <h1 className="text-5xl md:text-6xl font-serif text-gray-900 mb-6">
                        All Projects
                    </h1>
                    <p className="text-xl text-gray-600">
                        Explore our complete collection of architectural and interior design projects.
                    </p>
                </motion.div>

                {/* Category Filter */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-4 mb-16"
                >
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-6 py-3 rounded-full font-medium transition-all ${activeCategory === category
                                    ? 'bg-gray-900 text-white'
                                    : 'bg-white text-gray-700 hover:bg-gray-100'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </motion.div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                        <Link
                            key={project.id}
                            to={`/projects/${project.slug}`}
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="group cursor-pointer"
                            >
                                <div className="aspect-[4/3] rounded-xl overflow-hidden mb-4 relative">
                                    <img
                                        src={project.featuredImage}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />

                                    {/* Hover Arrow */}
                                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="p-3 bg-white rounded-full text-gray-900 shadow-lg">
                                            <ArrowUpRight size={20} />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                                        {project.category}
                                    </span>
                                    <h3 className="text-2xl font-serif text-gray-900 group-hover:text-gray-600 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-600 line-clamp-2">
                                        {project.description}
                                    </p>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>

                {/* No Results */}
                {filteredProjects.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-xl text-gray-500">
                            No projects found in this category.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectsPage;
