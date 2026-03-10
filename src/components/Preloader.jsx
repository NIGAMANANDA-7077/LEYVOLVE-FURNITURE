import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const Preloader = ({ onComplete }) => {
    useEffect(() => {
        // Lock body scroll
        document.body.style.overflow = 'hidden';

        // Unlock body scroll on cleanup
        return () => {
            document.body.style.overflow = 'unset';
            document.body.style.overflowX = 'hidden'; // Maintain x-hidden from global styles if needed
        };
    }, []);

    const text = "LEYVOLVE FURNITURE";

    const containerVariants = {
        initial: { opacity: 1 },
        exit: {
            opacity: 0,
            transition: {
                duration: 0.8,
                ease: [0.76, 0, 0.24, 1]
            }
        }
    };

    const letterContainerVariants = {
        initial: { transition: { staggerChildren: 0.1 } },
        animate: {
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const letterVariants = {
        initial: {
            y: 40,
            opacity: 0,
            scale: 0.9,
            filter: "blur(10px)"
        },
        animate: {
            y: 0,
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            transition: {
                duration: 1.2,
                ease: [0.6, 0.01, 0.05, 0.95]
            }
        }
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="initial"
            exit="exit"
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#FFF8F0]"
        >
            <motion.div
                variants={letterContainerVariants}
                initial="initial"
                animate="animate"
                className="overflow-hidden flex items-center py-4"
            >
                {text.split("").map((letter, index) => (
                    <motion.span
                        key={index}
                        variants={letterVariants}
                        className={`text-4xl md:text-6xl lg:text-7xl font-serif tracking-widest text-[#1a1a1a] ${index < 4 ? "font-bold" : "font-light"
                            } ${letter === " " ? "w-4 md:w-8" : ""}`}
                    >
                        {letter}
                    </motion.span>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default Preloader;
