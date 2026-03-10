import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projectsData';
import StackedProjectsScroll from './StackedProjectsScroll';

const Projects = () => {
    // We'll show a curated selection of 4 projects for the scroll effect
    const featuredProjects = projects.slice(0, 4);

    return (
        <section id="projects" className="bg-[#FFF8F0]">
            {/* Header Section - Sticky or static before the scroll starts */}
            <div className="container mx-auto px-6 py-20 pb-0">
                <div className="text-center mb-10 max-w-2xl mx-auto">
                    <span className="text-sm font-medium tracking-widest text-primary/60 uppercase mb-4 block">Selected Works</span>
                    <h2 className="text-4xl md:text-5xl font-serif font-medium text-primary mb-6">Our Masterpieces</h2>
                    <p className="text-gray-600 font-light text-lg">
                        Immerse yourself in our finest architectural and interior design projects.
                    </p>
                </div>
            </div>

            {/* The Scroll Animation Section */}
            <StackedProjectsScroll projects={featuredProjects} />

            {/* Footer / View All */}
            <div className="py-20 bg-[#FFF8F0] text-center border-t border-white/50">
                <Link to="/projects">
                    <button className="px-10 py-4 border border-primary text-primary hover:bg-primary hover:text-white transition-all rounded-full font-medium tracking-wide text-lg">
                        View Complete Portfolio
                    </button>
                </Link>
            </div>
        </section>
    );
};

export default Projects;
