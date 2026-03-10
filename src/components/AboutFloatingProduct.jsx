import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';

const AboutFloatingProduct = () => {
    const containerRef = useRef(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start']
    });

    const textOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
    const textX = useTransform(scrollYProgress, [0, 1], ['10%', '-10%']);
    const productRotate = useTransform(scrollYProgress, [0, 1], [-15, 15]);
    const productScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.9]);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 150 };
    const rotateX = useSpring(mouseY, springConfig);
    const rotateY = useSpring(mouseX, springConfig);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;

            const x = (clientX - innerWidth / 2) / innerWidth;
            const y = (clientY - innerHeight / 2) / innerHeight;

            mouseX.set(x * 20);
            mouseY.set(-y * 20);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <section
            ref={containerRef}
            className="relative py-48 bg-[#FAF7F2] overflow-hidden"
        >
            {/* Background Text */}
            <motion.div
                style={{ opacity: textOpacity, x: textX }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
                <h2 className="text-[10rem] md:text-[14rem] lg:text-[16rem] font-serif text-gray-200 leading-none whitespace-nowrap select-none">
                    LEYVOLVE FURNITURE
                </h2>
            </motion.div>

            {/* Floating Product */}
            <div className="relative z-10 flex items-center justify-center">
                <motion.div
                    style={{
                        rotate: productRotate,
                        scale: productScale,
                        rotateX,
                        rotateY,
                        transformPerspective: 1000
                    }}
                    className="w-full max-w-sm"
                >
                    <img
                        src="https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=800&q=80"
                        alt="Floating furniture piece"
                        className="w-full drop-shadow-2xl"
                    />
                </motion.div>
            </div>

            {/* Subtitle */}
            <motion.div
                style={{ opacity: textOpacity }}
                className="relative z-10 text-center mt-12"
            >
                <p className="text-2xl md:text-3xl font-serif text-gray-700">
                    that breathes life into your space
                </p>
            </motion.div>
        </section>
    );
};

export default AboutFloatingProduct;
