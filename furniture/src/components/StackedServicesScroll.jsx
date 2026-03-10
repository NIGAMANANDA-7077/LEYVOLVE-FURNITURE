import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Check } from 'lucide-react';

const Card = ({ service, index, progress, total }) => {
    // Calculate the range for this card's animations
    // Card i enters during (i-1)/total to i/total
    // Card i exits (scales down) during i/total to (i+1)/total

    // Range where this card is the primary active card (scrolling in to fully locked)
    // For card 0, it's always visible initially.
    // For card 1, it slides in from 0/N to 1/N.

    const rangeStart = index * (1 / total);
    const rangeEnd = (index + 1) * (1 / total);
    const rangePrev = (index - 1) * (1 / total);

    // Y Position: Slides up from 100vh to 0
    // Only applies if index > 0.
    const y = useTransform(
        progress,
        [rangePrev, rangeStart],
        ['100%', '0%']
    );

    // Scale: Scales down from 1 to 0.9 as the NEXT card slides over it
    const scale = useTransform(
        progress,
        [rangeStart, rangeEnd],
        [1, 0.9]
    );

    // Brightness/Filter: Darkens slightly as it goes back
    const brightness = useTransform(
        progress,
        [rangeStart, rangeEnd],
        [1, 0.6] // Dim to 60%
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
            className="absolute w-full h-full flex items-center justify-center bg-[#FFF8F0]"
        >
            <motion.div
                className="w-full h-full bg-white shadow-xl overflow-hidden flex flex-col lg:flex-row"
                style={{
                    filter: "brightness(inherit)",
                }}
            >
                {/* Left: Content */}
                <div className="lg:w-1/2 p-8 lg:p-16 flex flex-col justify-center relative z-10">
                    <div className="space-y-6">
                        <span className="text-xs font-semibold text-gray-400 tracking-[0.2em] uppercase block">
                            {service.number}
                        </span>

                        <h2 className="text-4xl lg:text-5xl font-serif text-gray-900 leading-tight">
                            {service.title}
                        </h2>

                        <p className="text-base lg:text-lg text-gray-600 leading-relaxed max-w-lg">
                            {service.description}
                        </p>
                    </div>

                    {/* Key Points & Button */}
                    <div className="space-y-6 mt-8">
                        <div className="hidden md:block">
                            <ul className="space-y-3">
                                {service.keyPoints.slice(0, 3).map((point, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <div className="w-5 h-5 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <Check className="w-3 h-3 text-white" />
                                        </div>
                                        <span className="text-sm text-gray-700 leading-relaxed">{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <button className="group px-8 py-3 bg-gray-900 text-white text-sm rounded-full hover:bg-gray-800 transition-all duration-300 font-medium w-fit flex items-center gap-2">
                            <span>Learn More</span>
                            <span className="bg-white/20 rounded-full p-0.5 group-hover:translate-x-1 transition-transform">
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </span>
                        </button>
                    </div>
                </div>

                {/* Right: Image */}
                <div className="lg:w-1/2 relative h-48 lg:h-auto">
                    <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-black/10 to-transparent" />
                </div>
            </motion.div>
        </motion.div>
    );
};

const StackedServicesScroll = ({ services }) => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end']
    });

    return (
        <div ref={containerRef} className="relative" style={{ height: `${services.length * 100}vh` }}>
            <div className="sticky top-0 h-screen overflow-hidden">
                {services.map((service, index) => (
                    <Card
                        key={service.id}
                        service={service}
                        index={index}
                        progress={scrollYProgress}
                        total={services.length}
                    />
                ))}
            </div>
        </div>
    );
};

export default StackedServicesScroll;
