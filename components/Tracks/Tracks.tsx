import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const AnimatedTracks = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    return (
        <motion.section
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
            transition={{ duration: 0.5 }}
            className="max-w-screen-xl mx-auto px-4 py-6 md:px-8 md:py-10"
        >
            <div className="mx-auto mb-10">
                <h3 className="mb-2 sm:mb-4 font-sans font-semibold text-blue-800 text-xs lg:text-base">
                    TRACKS
                </h3>
                <h2 className="mb-4 md:mb-6 font-sans font-bold text-black text-2xl sm:text-4xl">
                    Explore Our Tracks
                </h2>
                <h4 className="max-w-screen-sm font-sans font-base text-gray-500 text-sm sm:text-lg">
                    At PROTOCOL 1.0, participants have the opportunity to explore and innovate within three exciting tracks
                </h4>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
                <motion.a
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.8 }}
                    transition={{ duration: 0.5 }}
                    href="#"
                    className="group relative flex h-48 items-end overflow-hidden rounded-4xl sm:rounded-6xl bg-gray-100 shadow-lg md:h-80"
                >
                    <img
                        src="/assets/Tracks/HealthTech Solutions.jpg"
                        loading="lazy"
                        alt="HealthTech Solutions"
                        className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50" />
                    <span className="relative ml-4 mb-3 md:ml-7 md:mb-4 inline-block text-white text-sm lg:text-lg">
                        HealthTech Solutions
                    </span>
                </motion.a>
                <motion.a
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.8 }}
                    transition={{ duration: 0.5 }}
                    href="#"
                    className="group relative flex h-48 items-end overflow-hidden rounded-4xl sm:rounded-6xl bg-gray-100 shadow-lg md:col-span-2 md:h-80"
                >
                    <img
                        src="/assets/Tracks/Future Tech Innovations.jpg"
                        loading="lazy"
                        alt="Future Tech Innovations"
                        className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50" />
                    <span className="relative ml-4 mb-3 md:ml-7 md:mb-4 inline-block text-white text-sm lg:text-lg">
                        Future Tech Innovations
                    </span>
                </motion.a>
                <motion.a
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.8 }}
                    transition={{ duration: 0.5 }}
                    href="#"
                    className="group relative flex h-48 items-end overflow-hidden rounded-4xl sm:rounded-6xl bg-gray-100 shadow-lg md:col-span-2 md:h-80"
                >
                    <img
                        src="/assets/Tracks/Sustainable Development.jpg"
                        loading="lazy"
                        alt="Sustainable Development"
                        className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50" />
                    <span className="relative ml-4 mb-3 md:ml-7 md:mb-4 inline-block text-white text-sm lg:text-lg">
                        Sustainable Development
                    </span>
                </motion.a>
                <motion.a
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.8 }}
                    transition={{ duration: 0.5 }}
                    href="#"
                    className="group relative flex h-48 items-end overflow-hidden rounded-4xl sm:rounded-6xl bg-gray-100 shadow-lg md:h-80"
                >
                    <img
                        src="/assets/Tracks/Open Ended.jpg"
                        loading="lazy"
                        alt="Open Ended"
                        className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50" />
                    <span className="relative ml-4 mb-3 md:ml-7 md:mb-4 inline-block text-white text-sm lg:text-lg">
                        Open Ended
                    </span>
                </motion.a>
            </div>
        </motion.section>
    );
};

export default AnimatedTracks;