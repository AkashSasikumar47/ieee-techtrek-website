import React from 'react';

const AboutTechTrek = () => {
    return (
        <div>
            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto bg-deepBlack text-white font-sans">
                <div className="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
                    <div className="mt-5 sm:mt-10 lg:mt-0">
                        <div className="space-y-6 sm:space-y-8">
                            <div className="space-y-2 md:space-y-4 mb-8">
                                <h2 className="font-bold text-2xl md:text-3xl">
                                    TechTrek: Code Your Commerce Canvas
                                </h2>
                                <p className="text-sm font-body text-gray-300">
                                    TechTrek is not just a hackathon; it's an innovation journey that invites you to explore the exciting landscape of web development. Created by IEEE SRM Student Branch, TechTrek is a 2-day coding extravaganza where participants embark on the challenge to 'Code Your Commerce Canvas.' Whether you're a coding enthusiast, a beginner looking to learn, or an experienced developer seeking a creative challenge, TechTrek provides the platform to unleash your coding prowess. Join us to collaborate, innovate, and elevate your skills in an immersive environment. Let's code the future together!
                                </p>
                                <div className="mt-8 gap-3 flex mb-8">
                                    <a className="group relative inline-block focus:outline-none focus:ring" href="https://registrations.ieeesrmist.com/">
                                        <span className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-indigo transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></span>
                                        <span className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest text-white group-active:text-opacity-75">Register</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img
                            className="rounded-xl w-full h-full object-cover aspect-w-4 aspect-h-5"
                            src="/img/TechTreck 2024.png"
                            alt="TechTreck 2024"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutTechTrek;