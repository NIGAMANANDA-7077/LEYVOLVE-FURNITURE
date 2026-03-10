import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const ScrollHero = () => {
    const containerRef = useRef(null);
    const canvasRef = useRef(null);
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // Scroll progress for the container
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Smooth out the scroll progress to avoid jitter
    const smoothProgress = useSpring(scrollYProgress, {
        mass: 0.1,
        stiffness: 100,
        damping: 20,
        restDelta: 0.001
    });

    // --- Animation Transforms ---

    // Stage 1: Headline (Visible initially, fades out)
    const stage1Opacity = useTransform(smoothProgress, [0, 0.15, 0.25], [1, 1, 0]);

    // Stage 1.5: New Description from Left (0.25 - 0.45)
    const stageNewOpacity = useTransform(smoothProgress, [0.25, 0.35, 0.45, 0.55], [0, 1, 1, 0]);
    const stageNewX = useTransform(smoothProgress, [0.25, 0.4], [-100, 0]);

    // Stage 2: Text from Right (0.55 - 0.75)
    // Shifted later to accommodate new stage
    const stage2Opacity = useTransform(smoothProgress, [0.55, 0.65, 0.75, 0.85], [0, 1, 1, 0]);
    const stage2X = useTransform(smoothProgress, [0.55, 0.7], [100, 0]);

    // Stage 3: Final Caption from Center/Bottom (0.85 - 1.0)
    const stage3Opacity = useTransform(smoothProgress, [0.85, 0.95], [0, 1]);
    const stage3Y = useTransform(smoothProgress, [0.85, 0.95], [40, 0]);


    useEffect(() => {
        // Dynamically import all images from the specific folder
        const loadImages = async () => {
            const glue = await import.meta.glob('../assets/ezgif-3ea04aa3a57af83b-jpg/*.jpg', { eager: true, as: 'url' });
            // Sort keys to ensure numeric order (001, 002, etc.)
            const keys = Object.keys(glue).sort();

            const loadedImages = await Promise.all(
                keys.map(key => {
                    return new Promise((resolve) => {
                        const img = new Image();
                        img.src = glue[key];
                        img.onload = () => resolve(img);
                    });
                })
            );

            setImages(loadedImages);
            setIsLoading(false);
        };

        loadImages();
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas || images.length === 0) return;

        const context = canvas.getContext('2d');

        // Function to draw a specific frame
        const renderFrame = (index) => {
            const img = images[index];
            if (!img) return;

            // Calculate aspect ratio to cover the canvas (like object-fit: cover)
            const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
            const x = (canvas.width / 2) - (img.width / 2) * scale;
            const y = (canvas.height / 2) - (img.height / 2) * scale;

            context.clearRect(0, 0, canvas.width, canvas.height);
            context.drawImage(img, x, y, img.width * scale, img.height * scale);
        };

        // Initial render
        renderFrame(0);

        // Subscribe to scroll changes
        const unsubscribe = smoothProgress.on("change", (latest) => {
            // Pinning behavior is smooth; latest maps from 0 to 1
            const totalFrames = images.length;
            // Map 0-1 to 0-(totalFrames-1)
            const frameIndex = Math.min(
                totalFrames - 1,
                Math.floor(latest * totalFrames)
            );

            requestAnimationFrame(() => renderFrame(frameIndex));
        });

        // Handle Resize
        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            // Re-render current frame on resize
            const currentProgress = smoothProgress.get();
            const frameIndex = Math.min(
                images.length - 1,
                Math.floor(currentProgress * images.length)
            );
            renderFrame(frameIndex);
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Call once to set initial size

        return () => {
            unsubscribe();
            window.removeEventListener('resize', handleResize);
        };
    }, [images, smoothProgress]);

    return (
        <div ref={containerRef} className="relative h-[400vh] bg-black">
            <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">

                {isLoading && (
                    <div className="absolute inset-0 flex items-center justify-center z-50 bg-black text-white">
                        <div className="animate-pulse tracking-widest text-xs uppercase">Loading Experience...</div>
                    </div>
                )}

                {/* Canvas Background */}
                <canvas
                    ref={canvasRef}
                    className="w-full h-full object-cover"
                />

                {/* Subtle Gradient Overlay for Readability */}
                <div className="absolute inset-0 bg-black/20 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 pointer-events-none" />


                {/* Text Content Container */}
                <div className="absolute inset-0 pointer-events-none flex flex-col justify-center items-center w-full h-full">

                    {/* Stage 1: Headline (Initially Visible) */}
                    <motion.div
                        style={{ opacity: stage1Opacity }}
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center max-w-4xl w-full px-4"
                    >
                        <h2 className="text-5xl md:text-7xl font-serif text-white leading-none">
                            Transforming <span className="italic text-black font-medium">INDIAN</span> Homes <br />
                            <span className="font-sans font-light text-2xl md:text-4xl block mt-6 tracking-wide text-white/90">with Vision, Craft, and Care.</span>
                        </h2>
                    </motion.div>

                    {/* Stage 1.5: New Description from Left */}
                    <motion.div
                        style={{ opacity: stageNewOpacity, x: stageNewX }}
                        className="absolute left-10 md:left-24 top-1/3 md:top-1/2 -translate-y-1/2 max-w-md text-left"
                    >
                        <h3 className="text-4xl md:text-6xl font-serif font-medium text-white mb-6">
                            Architectural <br /> <span className="italic text-gray-300">Excellence.</span>
                        </h3>
                        <p className="text-lg text-white/80 font-sans font-light leading-relaxed tracking-wide">
                            We blend modern innovation with timeless traditions to create spaces that breathe life into every moment.
                        </p>
                    </motion.div>

                    {/* Stage 2: Description Slide In (Right) */}
                    <motion.div
                        style={{ opacity: stage2Opacity, x: stage2X }}
                        className="absolute right-10 md:right-24 top-1/3 md:top-1/2 -translate-y-1/2 max-w-md text-right"
                    >
                        <h3 className="text-4xl md:text-6xl font-serif font-medium text-white mb-6">
                            Seamless Design.
                        </h3>
                        <p className="text-lg text-white/80 font-sans font-light leading-relaxed tracking-wide">
                            Crafted with obsession. Every curve, every shadow, every interaction designed to feel completely natural.
                        </p>
                    </motion.div>

                    {/* Stage 3: Final Callout (Center) */}
                    <motion.div
                        style={{ opacity: stage3Opacity, y: stage3Y }}
                        className="absolute inset-x-0 top -translate-y-1/2 flex flex-col items-center justify-center px-6"
                    >
                        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-serif font-bold tracking-tight text-white mb-4 md:mb-6 text-center">
                            LEYVOLVE <span className="italic font-light text-black">Furniture</span>.
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl uppercase tracking-[0.2em] md:tracking-[0.3em] text-white/80 font-sans font-light text-center">
                            The New Standard
                        </p>
                    </motion.div>

                </div>


                {/* Scroll Indicator - Fades out very early */}
                <motion.div
                    style={{ opacity: useTransform(scrollYProgress, [0, 0.05], [1, 0]) }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
                >
                    <span className="text-[10px] uppercase tracking-widest">Scroll to Begin</span>
                </motion.div>
            </div>
        </div>
    );
};

export default ScrollHero;
