import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CTA = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    return (
        <motion.section
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
            transition={{ duration: 1 }}
            className="max-w-screen-xl mx-auto px-4 py-6 md:px-8 md:py-10"
        >
            <div className="mx-auto mb-10 items-center justify-center text-center">
                <h3 className="mb-2 sm:mb-4 font-sans font-semibold text-blue-800 text-xs lg:text-base">
                    JOIN US
                </h3>
                <h2 className="mb-4 md:mb-6 font-sans font-bold text-black text-2xl sm:text-4xl">
                    Join the Conversation
                </h2>
                <h4 className="max-w-screen-sm mx-auto font-sans font-base text-gray-500 text-sm sm:text-lg">
                    Connect with fellow participants, mentors, and organizers on Discord to stay updated and collaborate throughout the hackathon.
                </h4>
            </div>
            <div className="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
                <a href="https://discord.gg/aCfaC3Ywhh" className="relative inline-block text-lg text-center group">
                    <span className="relative z-10 block px-5 py-3 overflow-hidden font-sans font-medium leading-tight text-blue-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-xl group-hover:text-blue-500">
                        <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-xl bg-gray-50" />
                        <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease" />
                        <span className="relative">JOIN DISCORD</span>
                    </span>
                    <span
                        className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-xl group-hover:mb-0 group-hover:mr-0"
                        data-rounded="rounded-xl"
                    />
                </a>
            </div>
        </motion.section>
    );
};

export default CTA;