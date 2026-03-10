import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const AnimatedContactPanel = ({ icon: Icon, title, content, isOpen, onToggle }) => {
    return (
        <div className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
            {/* Header Button */}
            <motion.button
                onClick={onToggle}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
            >
                <div className="flex items-center gap-3">
                    <Icon className="w-5 h-5 text-gray-700" />
                    <span className="font-medium text-gray-900">{title}</span>
                </div>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                </motion.div>
            </motion.button>

            {/* Expandable Content */}
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30,
                            opacity: { duration: 0.2 }
                        }}
                        className="overflow-hidden"
                    >
                        <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                            {content}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default AnimatedContactPanel;
