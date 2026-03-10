import React, { useRef, useEffect } from 'react';
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';

const StatCounter = ({ end, label, suffix = '' }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-20%" });
    const count = useMotionValue(0);
    const rounded = useSpring(count, { stiffness: 50, damping: 20 });
    const display = useTransform(rounded, (latest) => Math.round(latest));

    useEffect(() => {
        if (isInView) {
            count.set(end);
        }
    }, [isInView, end, count]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center"
        >
            <motion.div className="text-5xl md:text-6xl lg:text-7xl font-serif text-gray-900 mb-3 flex justify-center items-center">
                <motion.span>{display}</motion.span>
                <span className="text-4xl md:text-5xl">{suffix}</span>
            </motion.div>
            <div className="text-sm md:text-base text-gray-600 uppercase tracking-wider font-medium">
                {label}
            </div>
        </motion.div>
    );
};

const AboutStats = () => {
    const stats = [
        { end: 30, suffix: '+', label: 'Years of Excellence' },
        { end: 50, suffix: '+', label: 'Design Partners' },
        { end: 10, suffix: 'K+', label: 'Happy Homes' },
        { end: 500, suffix: '+', label: 'Custom Projects' }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                    {stats.map((stat, index) => (
                        <StatCounter
                            key={index}
                            end={stat.end}
                            suffix={stat.suffix}
                            label={stat.label}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutStats;
