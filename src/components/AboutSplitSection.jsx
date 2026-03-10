import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const AboutSplitSection = ({ title, description, image, reverse = false, link }) => {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, margin: "-20%" });

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start']
    });

    const imageY = useTransform(scrollYProgress, [0, 1], ['10%', '-10%']);

    const textVariants = {
        hidden: { opacity: 0, x: reverse ? 40 : -40 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: [0.6, 0.05, 0.01, 0.9]
            }
        }
    };

    return (
        <section ref={containerRef} className="py-20 bg-[#FFF8F0]">
            <div className="container mx-auto px-6">
                <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${reverse ? 'lg:grid-flow-dense' : ''}`}>
                    {/* Text Content */}
                    <motion.div
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        variants={textVariants}
                        className={`space-y-6 ${reverse ? 'lg:col-start-2' : ''}`}
                    >
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-gray-900 leading-tight">
                            {title}
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            {description}
                        </p>
                        {link && (
                            <motion.a
                                href={link.url}
                                className="inline-flex items-center gap-2 text-gray-900 font-medium group"
                                whileHover={{ x: 4 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                {link.text}
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </motion.a>
                        )}
                    </motion.div>

                    {/* Image with Parallax */}
                    <motion.div
                        className={`relative overflow-hidden rounded-2xl shadow-2xl ${reverse ? 'lg:col-start-1 lg:row-start-1' : ''}`}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] }}
                    >
                        <div className="aspect-[4/3] relative overflow-hidden">
                            <motion.img
                                src={image}
                                alt={title}
                                style={{ y: imageY }}
                                className="w-full h-full object-cover scale-110"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutSplitSection;
