import React from 'react'

const EventTimeline = () => {
    return (
        <div>

            <div className="max-w-4xl mx-auto px-4 py-10 sm:px-6 lg:px-8 lg:py-14 bg-deepBlack text-white">
                <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14 text-white font-sans">
                    <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
                        Event Timeline
                    </h2>
                </div>

                {/* Day 1 & 2 - 23rd - 24th January */}
                <div>
                    <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14 text-white font-body">
                        <h2 className="text-lg font-semibold md:text-xl md:leading-tight dark:text-white">
                            Day 1 & 2 - 23rd - 24th January
                        </h2>
                    </div>

                    <div className="flex gap-x-3 font-body">
                        {/* Opening and Welcome */}
                        <div className="w-16 text-end">
                            <span className="text-xs text-gray-300">6:00 PM</span>
                        </div>
                        <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200">
                            <div className="relative z-10 w-7 h-7 flex justify-center items-center">
                                <div className="w-2 h-2 rounded-full bg-gray-400" />
                            </div>
                        </div>
                        <div className="grow pt-0.5 pb-8">
                            <h3 className="flex gap-x-1.5 font-semibold text-white">
                                Opening and Welcome
                            </h3>
                            <p className="mt-1 text-sm text-gray-300">
                                Event kickoff and welcome address.
                                Brief overview of the agenda and expectations.
                            </p>
                        </div>
                    </div>

                    {/* Introduction and Speaker Session */}
                    <div className="flex gap-x-3 font-body">
                        <div className="w-16 text-end">
                            <span className="text-xs text-gray-300">6:15 PM</span>
                        </div>
                        <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200">
                            <div className="relative z-10 w-7 h-7 flex justify-center items-center">
                                <div className="w-2 h-2 rounded-full bg-gray-400" />
                            </div>
                        </div>
                        <div className="grow pt-0.5 pb-8">
                            <h3 className="flex gap-x-1.5 font-semibold text-white">
                                Introduction and Speaker Session
                            </h3>
                            <p className="mt-1 text-sm text-gray-300">
                                Keynote speakers discuss relevant topics.
                                Q&A session if time permits.
                            </p>
                        </div>
                    </div>

                    {/* Resource Session */}
                    <div className="flex gap-x-3 font-body">
                        <div className="w-16 text-end">
                            <span className="text-xs text-gray-300">7:00 PM</span>
                        </div>
                        <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200">
                            <div className="relative z-10 w-7 h-7 flex justify-center items-center">
                                <div className="w-2 h-2 rounded-full bg-gray-400" />
                            </div>
                        </div>
                        <div className="grow pt-0.5 pb-8">
                            <h3 className="flex gap-x-1.5 font-semibold text-white">
                                Resource Session
                            </h3>
                            <p className="mt-1 text-sm text-gray-300">
                                Information on tools, platforms, and resources for the hackathon.
                                Tips and tricks for effective development.
                            </p>
                        </div>
                    </div>

                    {/* Team Setup and Coordination */}
                    <div className="flex gap-x-3 font-body">
                        <div className="w-16 text-end">
                            <span className="text-xs text-gray-300">7:30 PM</span>
                        </div>
                        <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200">
                            <div className="relative z-10 w-7 h-7 flex justify-center items-center">
                                <div className="w-2 h-2 rounded-full bg-gray-400" />
                            </div>
                        </div>
                        <div className="grow pt-0.5 pb-8">
                            <h3 className="flex gap-x-1.5 font-semibold text-white">
                                Team Setup and Coordination
                            </h3>
                            <p className="mt-1 text-sm text-gray-300">
                                Teams set up their development environments.
                                Coordinate and communicate through Discord or other channels.
                            </p>
                        </div>
                    </div>

                    {/* Hackathon Begins */}
                    <div className="flex gap-x-3 font-body">
                        <div className="w-16 text-end">
                            <span className="text-xs text-gray-300">8:00 PM</span>
                        </div>
                        <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200">
                            <div className="relative z-10 w-7 h-7 flex justify-center items-center">
                                <div className="w-2 h-2 rounded-full bg-gray-400" />
                            </div>
                        </div>
                        <div className="grow pt-0.5 pb-8">
                            <h3 className="flex gap-x-1.5 font-semibold text-white">
                                Hackathon Begins
                            </h3>
                            <p className="mt-1 text-sm text-gray-300">
                                Official start of the 48-hour hackathon.
                                Teams can start working on their projects.
                            </p>
                        </div>
                    </div>

                    {/* Hackathon Continues */}
                    <div className="flex gap-x-3 font-body">
                        <div className="w-16 text-end">
                            <span className="text-xs text-gray-300">24Hr</span>
                        </div>
                        <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200">
                            <div className="relative z-10 w-7 h-7 flex justify-center items-center">
                                <div className="w-2 h-2 rounded-full bg-gray-400" />
                            </div>
                        </div>
                        <div className="grow pt-0.5 pb-8">
                            <h3 className="flex gap-x-1.5 font-semibold text-white">
                                Hackathon Continues
                            </h3>
                            <p className="mt-1 text-sm text-gray-300">
                                The ongoing hackathon continues into the second day.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Day 3 - 25th January */}
                <div>
                    <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14 text-white mt-8 font-body">
                        <h2 className="text-lg font-semibold md:text-xl md:leading-tight dark:text-white">
                            Day 3 - 25th January
                        </h2>
                    </div>

                    {/* Hackathon Ends */}
                    <div className="flex gap-x-3 font-body">
                        <div className="w-16 text-end">
                            <span className="text-xs text-gray-300">8:00 PM</span>
                        </div>
                        <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200">
                            <div className="relative z-10 w-7 h-7 flex justify-center items-center">
                                <div className="w-2 h-2 rounded-full bg-gray-400" />
                            </div>
                        </div>
                        <div className="grow pt-0.5 pb-8">
                            <h3 className="flex gap-x-1.5 font-semibold text-white">
                                Hackathon Ends
                            </h3>
                            <p className="mt-1 text-sm text-gray-300">
                                All development activities cease.
                                Teams prepare for the showcase.
                            </p>
                        </div>
                    </div>

                    {/* Project Showcase Preparation */}
                    <div className="flex gap-x-3 font-body">
                        <div className="w-16 text-end">
                            <span className="text-xs text-gray-300">8:00 PM - 8:15 PM</span>
                        </div>
                        <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200">
                            <div className="relative z-10 w-7 h-7 flex justify-center items-center">
                                <div className="w-2 h-2 rounded-full bg-gray-400" />
                            </div>
                        </div>
                        <div className="grow pt-0.5 pb-8">
                            <h3 className="flex gap-x-1.5 font-semibold text-white">
                                Project Showcase Preparation
                            </h3>
                            <p className="mt-1 text-sm text-gray-300">
                                Teams prepare their presentations.
                                Ensure all necessary files and demos are ready.
                            </p>
                        </div>
                    </div>

                    {/* Project Showcase */}
                    <div className="flex gap-x-3 font-body">
                        <div className="w-16 text-end">
                            <span className="text-xs text-gray-300">8:00 PM - 10:00 PM</span>
                        </div>
                        <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200">
                            <div className="relative z-10 w-7 h-7 flex justify-center items-center">
                                <div className="w-2 h-2 rounded-full bg-gray-400" />
                            </div>
                        </div>
                        <div className="grow pt-0.5 pb-8">
                            <h3 className="flex gap-x-1.5 font-semibold text-white">
                                Project Showcase
                            </h3>
                            <p className="mt-1 text-sm text-gray-300">
                                Each team has 10 minutes to present their project.
                                Judges may ask questions during or after the presentation.
                            </p>
                        </div>
                    </div>

                    {/* Closing and Thank You */}
                    <div className="flex gap-x-3 font-body">
                        <div className="w-16 text-end">
                            <span className="text-xs text-gray-300">10:00 PM</span>
                        </div>
                        <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200">
                            <div className="relative z-10 w-7 h-7 flex justify-center items-center">
                                <div className="w-2 h-2 rounded-full bg-gray-400" />
                            </div>
                        </div>
                        <div className="grow pt-0.5 pb-8">
                            <h3 className="flex gap-x-1.5 font-semibold text-white">
                                Event Ends
                            </h3>
                            <p className="mt-1 text-sm text-gray-300">
                                The results will be announced on 26th January 2024, and certificates will be provided.
                            </p>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default EventTimeline