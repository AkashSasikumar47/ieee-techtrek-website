import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const AnimatedAbout = () => {
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
            <div className="flex flex-wrap justify-between">
                <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48">
                    <h1 className="mb-4 font-sans font-bold text-black text-2xl sm:text-4xl">
                        About PROTOCOL 1.0
                    </h1>
                    <p className="max-w-md leading-relaxed font-sans font-base text-gray-500 text-justify text-sm sm:text-lg">
                        PROTOCOL 1.0, is an innovative online hackathon aimed at empowering Computer Science and Engineering students to innovate and create impactful solutions. With a focus on fostering creativity and collaboration, PROTOCOL 1.0 provides participants with a platform to explore cutting-edge technologies and address real-world challenges.
                    </p>
                    <motion.a
                        href="/EventDocumentation"
                        className="text-blue-500 hover:underline mt-4"
                        animate={{
                            y: [0, -10, 0],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                    >
                        Know More
                    </motion.a>
                </div>
                <div className="mb-12 flex w-full md:mb-16 lg:w-2/3">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.8 }}
                        transition={{ duration: 0.5 }}
                        className="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0"
                    >
                        <img
                            src="/assets/Posters/POSTER 1.jpg"
                            loading="lazy"
                            alt="IEEE SRM SB"
                            className="h-full w-full object-cover object-center"
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.8 }}
                        transition={{ duration: 0.5 }}
                        className="overflow-hidden rounded-lg bg-gray-100 shadow-lg"
                    >
                        <img
                            src="/assets/Posters/POSTER 3.jpg"
                            loading="lazy"
                            alt="IEEE SRM SB"
                            className="h-full w-full object-cover object-center"
                        />
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

export default AnimatedAbout;