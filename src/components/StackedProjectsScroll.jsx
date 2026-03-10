import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project, index, progress, total }) => {
    // Range for this card's animations
    const rangeStart = index * (1 / total);
    const rangeEnd = (index + 1) * (1 / total);
    const rangePrev = (index - 1) * (1 / total);

    // Y Position: Slides up from 100vh to 0 (except first card)
    const y = useTransform(
        progress,
        [rangePrev, rangeStart],
        ['100%', '0%']
    );

    // Scale: Scales down slightly as next card arrives
    const scale = useTransform(
        progress,
        [rangeStart, rangeEnd],
        [1, 0.95]
    );

    // Brightness: Dims slightly as it goes back
    const brightness = useTransform(
        progress,
        [rangeStart, rangeEnd],
        [1, 0.7]
    );

    return (
        <motion.div
            style={{
                top: 0,
                scale: index === total - 1 ? 1 : scale,
                y: index === 0 ? 0 : y,
                zIndex: index,
                filter: `brightness(${brightness})`,
            }}
            className="absolute w-full h-full flex items-center justify-center bg-[#FFF8F0] px-6 lg:px-20 py-10"
        >
            <div className="w-full max-w-7xl h-full max-h-[85vh] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row">

                {/* Left: Content */}
                <div className="lg:w-2/5 p-8 lg:p-12 flex flex-col justify-center relative z-10">
                    <div className="space-y-6">
                        <span className="text-xs font-bold tracking-widest text-primary/60 uppercase block">
                            {project.category}
                        </span>

                        <h2 className="text-4xl lg:text-5xl font-serif text-gray-900 leading-tight">
                            {project.title}
                        </h2>

                        <p className="text-lg text-gray-600 leading-relaxed font-light">
                            {project.description}
                        </p>

                        <div className="pt-6">
                            <Link to={`/projects/${project.slug}`}>
                                <button className="group flex items-center gap-3 text-lg font-medium text-gray-900 hover:text-primary transition-colors">
                                    <span className="border-b border-gray-900 group-hover:border-primary pb-1">View Project</span>
                                    <div className="p-2 bg-gray-100 rounded-full group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                        <ArrowUpRight className="w-5 h-5" />
                                    </div>
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Stats / Tags - Optional aesthetic addition */}
                    <div className="mt-12 pt-8 border-t border-gray-100 flex gap-6 text-sm text-gray-500">
                        <div>
                            <span className="block font-medium text-gray-900 mb-1">Location</span>
                            {project.stats?.location || "India"}
                        </div>
                        <div>
                            <span className="block font-medium text-gray-900 mb-1">Year</span>
                            {project.stats?.year || "2023"}
                        </div>
                    </div>
                </div>

                {/* Right: Image */}
                <div className="lg:w-3/5 relative h-64 lg:h-auto overflow-hidden">
                    <img
                        src={project.featuredImage}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-black/20 to-transparent pointer-events-none" />
                </div>
            </div>
        </motion.div>
    );
};

const StackedProjectsScroll = ({ projects }) => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end']
    });

    return (
        <div ref={containerRef} className="relative" style={{ height: `${projects.length * 100}vh` }}>
            <div className="sticky top-0 h-screen overflow-hidden">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                        index={index}
                        progress={scrollYProgress}
                        total={projects.length}
                    />
                ))}
            </div>
        </div>
    );
};

export default StackedProjectsScroll;
