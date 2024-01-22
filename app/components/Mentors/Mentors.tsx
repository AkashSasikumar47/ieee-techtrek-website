import React from 'react';

const Mentors = () => {
    return (
        <div>

            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto bg-deepBlack text-white font-sans">
                <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
                    <h2 className="font-bold text-2xl md:text-3xl">
                        Meet Our Expert Mentors
                    </h2>
                    <p className="mt-1 font-body text-gray-300">Guiding Your TechTrek Journey with Excellence</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="group relative block bg-black">
                        <img
                            alt="Web & App Development Head"
                            src="/img/WAD.png"
                            className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                        />

                        <div className="relative p-4 sm:p-6 lg:p-8">
                            <p className="text-sm font-medium uppercase tracking-widest text-indigo">Web & App Development Head</p>

                            <p className="text-xl font-bold text-white sm:text-2xl">Akash Sasikumar</p>

                            <div className="mt-32 sm:mt-48 lg:mt-64">
                                <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                                    <p className="text-sm text-white">
                                        I'm excited to be your mentor for web and app development. Let's delve into the world of coding, where innovation and creativity collide. Together, we'll build something extraordinary.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="group relative block bg-black">
                        <img
                            alt="Secretary"
                            src="/img/Secretary.png"
                            className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                        />

                        <div className="relative p-4 sm:p-6 lg:p-8">
                            <p className="text-sm font-medium uppercase tracking-widest text-indigo">Secretary</p>

                            <p className="text-xl font-bold text-white sm:text-2xl">Sampurna Sahoo</p>

                            <div className="mt-32 sm:mt-48 lg:mt-64">
                                <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                                    <p className="text-sm text-white">
                                        As your guide through TechTrek, I'm here to ensure your journey is seamless. From project intricacies to unlocking your potential, I'm committed to supporting you every step of the way.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="group relative block bg-black">
                        <img
                            alt="Joint-Secretary"
                            src="/img/Joint-Secretary.png"
                            className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                        />

                        <div className="relative p-4 sm:p-6 lg:p-8">
                            <p className="text-sm font-medium uppercase tracking-widest text-indigo">Joint-Secretary</p>

                            <p className="text-xl font-bold text-white sm:text-2xl">Dipanwitha Saha</p>

                            <div className="mt-32 sm:mt-48 lg:mt-64">
                                <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                                    <p className="text-sm text-white">
                                        Embark on the hackathon adventure with me as your mentor. I'm here to assist, encourage, and empower you to conquer challenges and turn your ideas into impactful solutions.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Mentors;