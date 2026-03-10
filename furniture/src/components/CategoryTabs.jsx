import React from 'react';
import { motion } from 'framer-motion';

const CategoryTabs = ({ categories, activeCategory, onCategoryChange }) => {
    return (
        <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => onCategoryChange(category)}
                    className={`relative px-6 py-2.5 rounded-full font-medium transition-colors text-sm ${activeCategory === category
                            ? 'text-gray-900'
                            : 'text-gray-400 hover:text-gray-600'
                        }`}
                >
                    {activeCategory === category && (
                        <motion.div
                            layoutId="activeCategory"
                            className="absolute inset-0 bg-white border border-gray-200 rounded-full shadow-sm"
                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                    )}
                    <span className="relative z-10">{category}</span>
                </button>
            ))}
        </div>
    );
};

export default CategoryTabs;
