import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const AnimatedFAQ = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    const faqVariants = {
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
    };

    return (
        <motion.section
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={faqVariants}
            transition={{ duration: 1 }}
            className="max-w-screen-xl mx-auto px-4 py-6 md:px-8 md:py-10"
        >
            <div className="mx-auto mb-10">
                <h3 className="mb-2 sm:mb-4 font-sans font-semibold text-blue-800 text-xs lg:text-base">
                    FAQ
                </h3>
                <h2 className="mb-4 md:mb-6 font-sans font-bold text-black text-2xl sm:text-4xl">
                    Frequently Asked Questions
                </h2>
                <h4 className="max-w-screen-sm font-sans font-base text-gray-500 text-sm sm:text-lg">
                    Answers to commonly asked questions about PROTOCOL 1.0.
                </h4>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 md:gap-12 xl:grid-cols-3 xl:gap-16">
                <motion.div
                    className="mb-8"
                >
                    <h3 className="mb-2 font-sans font-bold text-base sm:text-lg">
                        How do I register for the hackathon?
                    </h3>
                    <p className="font-sans font-base text-gray-600 text-xs sm:text-sm text-justify">
                        Registration is simple! Click on the "Register Now" button on the homepage and follow the instructions on the registration page.
                    </p>
                </motion.div>
                <motion.div
                    className="mb-8"
                >
                    <h3 className="mb-2 font-sans font-bold text-base sm:text-lg">
                        Can I participate individually or do I need to form a team?
                    </h3>
                    <p className="font-sans font-base text-gray-600 text-xs sm:text-sm text-justify">
                        You can participate individually or as part of a team. However, forming a team is recommended to collaborate and tackle challenges more effectively.
                    </p>
                </motion.div>
                <motion.div
                    className="mb-8"
                >
                    <h3 className="mb-2 font-sans font-bold text-base sm:text-lg">
                        Are there any registration fees for participating in the hackathon?
                    </h3>
                    <p className="font-sans font-base text-gray-600 text-xs sm:text-sm text-justify">
                        No, participation in the hackathon is completely free of charge.
                    </p>
                </motion.div>
                <motion.div
                    className="mb-8"
                >
                    <h3 className="mb-2 font-sans font-bold text-base sm:text-lg">
                        What are the eligibility criteria to participate?
                    </h3>
                    <p className="font-sans font-base text-gray-600 text-xs sm:text-sm text-justify">
                        PROTOCOL 1.0 is open to Computer Science and Engineering students from all over the world. As long as you have a passion for technology and innovation, you're welcome to join!
                    </p>
                </motion.div>
                <motion.div
                    className="mb-8"
                >
                    <h3 className="mb-2 font-sans font-bold text-base sm:text-lg">
                        Can I work on a project that I've already started before the hackathon?
                    </h3>
                    <p className="font-sans font-base text-gray-600 text-xs sm:text-sm text-justify">
                        Yes, you're allowed to work on pre-existing projects, as long as they align with one of the hackathon's themes and are submitted within the specified timeline.
                    </p>
                </motion.div>
                <motion.div
                    className="mb-8"
                >
                    <h3 className="mb-2 font-sans font-bold text-base sm:text-lg">
                        How will projects be judged, and what criteria will be used?
                    </h3>
                    <p className="font-sans font-base text-gray-600 text-xs sm:text-sm text-justify">
                        Projects will be judged based on criteria such as creativity, technical complexity, impact, and presentation. Judges will evaluate each project holistically to determine the winners.
                    </p>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default AnimatedFAQ;