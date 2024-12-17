import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const Mentors = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    const mentorVariants = {
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
    };

    const iconVariants = {
        hidden: { opacity: 0, scale: 0 },
        visible: { opacity: 1, scale: 1, transition: { delay: 0.5 } },
    };

    return (
        <motion.section
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={mentorVariants}
            transition={{ duration: 1 }}
            className="max-w-screen-2xl bg-black mx-auto px-4 py-6 md:px-8 md:py-10 mb-8"
        >
            <link
                rel="stylesheet"
                href="https://cdn.materialdesignicons.com/6.5.95/css/materialdesignicons.min.css"
            />
            <div className="mx-auto mb-10 items-center justify-center text-center">
                <h2 className="mb-4 md:mb-6 font-sans font-bold text-white text-2xl sm:text-4xl">
                    Meet Our Mentors
                </h2>
                <h4 className="max-w-screen-sm mx-auto font-sans font-base text-neutral-400 text-sm sm:text-lg">
                    Get guidance from experienced mentors to elevate your experience at E-VOLVE.
                </h4>
            </div>
            <div className="grid gap-x-4 gap-y-10 grid-cols-2 md:gap-x-6 lg:grid-cols-4">
                <motion.div
                    className="mb-2"
                    variants={iconVariants}
                >
                    <a
                        href="#"
                        className="group block h-120 overflow-hidden rounded-xl sm:rounded-2xl bg-black"
                    >
                        <img
                            src="/assets/Mentors/Aswin.jpg"
                            loading="lazy"
                            alt="Head - S&M"
                            className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                        />
                    </a>
                    <div className="text-center mt-6">
                        <h1 className="mb-1 font-sans font-bold text-white text-base sm:text-xl">
                            Aswin Sujith
                        </h1>
                        <div className="mb-2 font-sans font-base text-white text-xs sm:text-base">
                            Head - S&M
                        </div>
                        <div className="flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300">
                            <a
                                href="https://www.linkedin.com/in/aswin-sujith-varghese/"
                                className="flex rounded-full hover:bg-blue-50 h-10 w-10"
                            >
                                <i className="mdi mdi-linkedin text-blue-500 mx-auto mt-2" />
                            </a>
                            <a
                                href="https://www.instagram.com/aswin.sv/"
                                className="flex rounded-full hover:bg-pink-50 h-10 w-10"
                            >
                                <i className="mdi mdi-instagram text-pink-500 mx-auto mt-2" />
                            </a>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="mb-2"
                    variants={iconVariants}
                >
                    <a
                        href="#"
                        className="group block h-120 overflow-hidden rounded-xl sm:rounded-2xl bg-black"
                    >
                        <img
                            src="/assets/Mentors/Amal.jpg"
                            loading="lazy"
                            alt=" Head - CLP"
                            className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                        />
                    </a>
                    <div className="text-center mt-6">
                        <h1 className="mb-1 font-sans font-bold text-white text-base sm:text-xl">
                            Amal Krishna M K
                        </h1>
                        <div className="mb-2 font-sans font-base text-white text-xs sm:text-base">
                            Head - CLP
                        </div>
                        <div className="flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300">
                            <a
                                href="https://www.linkedin.com/in/amal-krishna-376b272b6"
                                className="flex rounded-full hover:bg-blue-50 h-10 w-10"
                            >
                                <i className="mdi mdi-linkedin text-blue-500 mx-auto mt-2" />
                            </a>
                            <a
                                href="https://www.instagram.com/20__coco__20?igsh=MXZ5dHh4bWV0eDRvOQ=="
                                className="flex rounded-full hover:bg-pink-50 h-10 w-10"
                            >
                                <i className="mdi mdi-instagram text-pink-500 mx-auto mt-2" />
                            </a>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="mb-2"
                    variants={iconVariants}
                >
                    <a
                        href="#"
                        className="group block h-120 overflow-hidden rounded-xl sm:rounded-2xl bg-black"
                    >
                        <img
                            src="/assets/Mentors/Andrew.jpg"
                            loading="lazy"
                            alt="Lead-Web"
                            className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                        />
                    </a>
                    <div className="text-center mt-6">
                        <h1 className="mb-1 font-sans font-bold text-white text-base sm:text-xl">
                            Andrew Harris
                        </h1>
                        <div className="mb-2 font-sans font-base text-white text-xs sm:text-base">
                            Head - MnC
                        </div>
                        <div className="flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300">
                            <a
                                href="https://www.linkedin.com/in/andrewharrisjf"
                                className="flex rounded-full hover:bg-blue-50 h-10 w-10"
                            >
                                <i className="mdi mdi-linkedin text-blue-500 mx-auto mt-2" />
                            </a>
                            <a
                                href="https://www.instagram.com/andrewharris_jf"
                                className="flex rounded-full hover:bg-pink-50 h-10 w-10"
                            >
                                <i className="mdi mdi-instagram text-pink-500 mx-auto mt-2" />
                            </a>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="mb-2"
                    variants={iconVariants}
                >
                    <a
                        href="#"
                        className="group block h-120 overflow-hidden rounded-xl sm:rounded-2xl bg-black"
                    >
                        <img
                            src="/assets/Mentors/Sreeram.jpg"
                            loading="lazy"
                            alt="Head - WAD"
                            className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                        />
                    </a>
                    <div className="text-center mt-6">
                        <h1 className="mb-1 font-sans font-bold text-white text-base sm:text-xl">
                            Sreeram A S
                        </h1>
                        <div className="mb-2 font-sans font-base text-white text-xs sm:text-base">
                            Head - WAD
                        </div>
                        <div className="flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300">
                            <a
                                href="http://linkedin.com/in/sreeram3927"
                                className="flex rounded-full hover:bg-blue-50 h-10 w-10"
                            >
                                <i className="mdi mdi-linkedin text-blue-500 mx-auto mt-2" />
                            </a>
                            <a
                                href="http://instagram.com/sreeram3927"
                                className="flex rounded-full hover:bg-pink-50 h-10 w-10"
                            >
                                <i className="mdi mdi-instagram text-pink-500 mx-auto mt-2" />
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Mentors;