import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const AnimatedMentors = () => {
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
            className="max-w-screen-xl mx-auto px-4 py-6 md:px-8 md:py-10"
        >
            <link
                rel="stylesheet"
                href="https://cdn.materialdesignicons.com/6.5.95/css/materialdesignicons.min.css"
            />
            <div className="mx-auto mb-10">
                <h3 className="mb-2 sm:mb-4 font-sans font-semibold text-blue-800 text-xs lg:text-base">
                    MENTORS
                </h3>
                <h2 className="mb-4 md:mb-6 font-sans font-bold text-black text-2xl sm:text-4xl">
                    Meet Our Mentors
                </h2>
                <h4 className="max-w-screen-sm font-sans font-base text-gray-500 text-sm sm:text-lg">
                    Get guidance from experienced mentors to elevate your hackathon experience at PROTOCOL 1.0.
                </h4>
            </div>
            <div className="grid gap-x-4 gap-y-10 grid-cols-2 md:gap-x-6 lg:grid-cols-4">
                <motion.div
                    className="mb-2"
                    variants={iconVariants}
                >
                    <a
                        href="#"
                        className="group block h-120 overflow-hidden rounded-4xl sm:rounded-6xl bg-gray-100"
                    >
                        <img
                            src="/assets/Mentors/Head.jpg"
                            loading="lazy"
                            alt="Head"
                            className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                        />
                    </a>
                    <div className="text-center mt-6">
                        <h1 className="mb-1 font-sans font-bold text-black text-base sm:text-xl">
                            Akash Sasikumar
                        </h1>
                        <div className="mb-2 font-sans font-base text-black text-xs sm:text-base">
                            Head - WAD
                        </div>
                        <div className="flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300">
                            <a
                                href="https://www.linkedin.com/in/akash-sasikumar47/"
                                className="flex rounded-full hover:bg-blue-50 h-10 w-10"
                            >
                                <i className="mdi mdi-linkedin text-blue-500 mx-auto mt-2" />
                            </a>
                            <a
                                href="https://github.com/AkashSasikumar47"
                                className="flex rounded-full hover:bg-gray-50 h-10 w-10"
                            >
                                <i className="mdi mdi-github text-black-300 mx-auto mt-2" />
                            </a>
                            <a
                                href="https://www.instagram.com/akash__sasikumar/"
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
                        className="group block h-120 overflow-hidden rounded-4xl sm:rounded-6xl bg-gray-100"
                    >
                        <img
                            src="/assets/Mentors/Secretary.jpg"
                            loading="lazy"
                            alt="Secretary"
                            className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                        />
                    </a>
                    <div className="text-center mt-6">
                        <h1 className="mb-1 font-sans font-bold text-black text-base sm:text-xl">
                            Kristen Talukdar
                        </h1>
                        <div className="mb-2 font-sans font-base text-black text-xs sm:text-base">
                            Secretary - WAD
                        </div>
                        <div className="flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300">
                            <a
                                href="https://www.linkedin.com/in/kristen-talukdar-1b5335269/"
                                className="flex rounded-full hover:bg-blue-50 h-10 w-10"
                            >
                                <i className="mdi mdi-linkedin text-blue-500 mx-auto mt-2" />
                            </a>
                            <a
                                href="https://github.com/kristentalukdar/"
                                className="flex rounded-full hover:bg-gray-50 h-10 w-10"
                            >
                                <i className="mdi mdi-github text-black-300 mx-auto mt-2" />
                            </a>
                            <a
                                href="#"
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
                        className="group block h-120 overflow-hidden rounded-4xl sm:rounded-6xl bg-gray-100"
                    >
                        <img
                            src="/assets/Mentors/Lead-Web.jpg"
                            loading="lazy"
                            alt="Lead-Web"
                            className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                        />
                    </a>
                    <div className="text-center mt-6">
                        <h1 className="mb-1 font-sans font-bold text-black text-base sm:text-xl">
                            Lakshaya K
                        </h1>
                        <div className="mb-2 font-sans font-base text-black text-xs sm:text-base">
                            Web Dev Lead - WAD
                        </div>
                        <div className="flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300">
                            <a
                                href="https://www.linkedin.com/in/lakshayakrishnaraj/"
                                className="flex rounded-full hover:bg-blue-50 h-10 w-10"
                            >
                                <i className="mdi mdi-linkedin text-blue-500 mx-auto mt-2" />
                            </a>
                            <a
                                href="https://github.com/pixelpurfect"
                                className="flex rounded-full hover:bg-gray-50 h-10 w-10"
                            >
                                <i className="mdi mdi-github text-black-300 mx-auto mt-2" />
                            </a>
                            <a
                                href="https://www.instagram.com/itzlakshaya/?hl=en"
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
                        className="group block h-120 overflow-hidden rounded-4xl sm:rounded-6xl bg-gray-100"
                    >
                        <img
                            src="/assets/Mentors/Lead-App.jpg"
                            loading="lazy"
                            alt="Lead-App"
                            className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                        />
                    </a>
                    <div className="text-center mt-6">
                        <h1 className="mb-1 font-sans font-bold text-black text-base sm:text-xl">
                            Sreeram A S
                        </h1>
                        <div className="mb-2 font-sans font-base text-black text-xs sm:text-base">
                            App Dev Lead - WAD
                        </div>
                        <div className="flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300">
                            <a
                                href="http://linkedin.com/in/sreeram3927"
                                className="flex rounded-full hover:bg-blue-50 h-10 w-10"
                            >
                                <i className="mdi mdi-linkedin text-blue-500 mx-auto mt-2" />
                            </a>
                            <a
                                href="http://github.com/sreeram3927"
                                className="flex rounded-full hover:bg-gray-50 h-10 w-10"
                            >
                                <i className="mdi mdi-github text-black-300 mx-auto mt-2" />
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

export default AnimatedMentors;