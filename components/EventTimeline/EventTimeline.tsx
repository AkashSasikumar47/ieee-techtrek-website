import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const AnimatedEventTimeline = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    return (
        <motion.section
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
            transition={{ duration: 1 }}
            className="max-w-screen-xl mx-auto px-4 py-6 md:px-8 md:py-10"
        >
            <div className="mx-auto mb-10">
                <h3 className="mb-2 sm:mb-4 font-sans font-semibold text-blue-800 text-xs lg:text-base">
                    EVENT TIMELINE
                </h3>
                <h2 className="mb-4 md:mb-6 font-sans font-bold text-black text-2xl sm:text-4xl">
                    Hackathon Schedule
                </h2>
                <h4 className="max-w-screen-sm font-sans font-base text-gray-500 text-sm sm:text-lg">
                    Stay on track with our hackathon schedule, from introduction to project submission and results declaration.
                </h4>
            </div>
            <div className="mx-auto">
                <div className="border-l-2 border-gray-500 pl-8">
                    <div className="flex flex-col md:flex-row md:justify-between mb-4">
                        <div className="mb-4 md:mb-0">
                            <h3 className="mb-2 font-sans font-bold text-base sm:text-lg">Introduction & Track Description</h3>
                            <p className="mb-1 font-sans font-base text-gray-600 text-xs sm:text-sm">Date: April 12, 2024</p>
                            <p className="font-sans font-base text-gray-600 text-xs sm:text-sm">Time: 8:00 PM - 10:00 PM</p>
                        </div>
                        <p className="max-w-sm font-sans font-base text-gray-600 text-xs sm:text-sm text-justify">
                            ✦ Kick off the event with an introduction to PROTOCOL 1.0.
                            <br />
                            ✦ Provide detailed descriptions of the three tracks: HealthTech Solutions, Future Tech Innovations, and Sustainable Development.
                            <br />
                            ✦ Address any questions or doubts participants may have about the hackathon.
                        </p>
                    </div>
                    <div className="flex flex-col md:flex-row md:justify-between mb-4">
                        <div className="mb-4 md:mb-0">
                            <h3 className="mb-2 font-sans font-bold text-base sm:text-lg">Hackathon Begins</h3>
                            <p className="mb-1 font-sans font-base text-gray-600 text-xs sm:text-sm">Date: April 13, 2024</p>
                            <p className="font-sans font-base text-gray-600 text-xs sm:text-sm">Time: 10:00 AM</p>
                        </div>
                        <p className="max-w-sm font-sans font-base text-gray-600 text-xs sm:text-sm text-justify">
                            ✦ Start hacking! Participants begin working on their projects according to the tracks.
                        </p>
                    </div>
                    <div className="flex flex-col md:flex-row md:justify-between mb-4">
                        <div className="mb-4 md:mb-0">
                            <h3 className="mb-2 font-sans font-bold text-base sm:text-lg">Project Submission Deadline</h3>
                            <p className="mb-1 font-sans font-base text-gray-600 text-xs sm:text-sm">Date: April 15, 2024</p>
                            <p className="font-sans font-base text-gray-600 text-xs sm:text-sm">Time: 8:00 PM - 10:00 PM</p>
                        </div>
                        <p className="max-w-sm font-sans font-base text-gray-600 text-xs sm:text-sm text-justify">
                            ✦ Participants must submit their projects by this time.
                            <br />
                            ✦ Submission requirements: GitHub links to code repositories, a case study PowerPoint presentation, and a small video about their project.
                        </p>
                    </div>
                    <div className="flex flex-col md:flex-row md:justify-between">
                        <div className="mb-4 md:mb-0">
                            <h3 className="mb-2 font-sans font-bold text-base sm:text-lg">Results Declaration</h3>
                            <p className="mb-1 font-sans font-base text-gray-600 text-xs sm:text-sm">Date: April 16, 2024</p>
                            <p className="font-sans font-base text-gray-600 text-xs sm:text-sm">Time: 8:00 PM - 10:00 PM</p>
                        </div>
                        <p className="max-w-sm font-sans font-base text-gray-600 text-xs sm:text-sm text-justify">
                            ✦ Winners and top projects will be announced. Certificates will be provided for all Participants.
                        </p>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default AnimatedEventTimeline;