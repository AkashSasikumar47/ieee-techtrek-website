import React from 'react';

const Hero = () => {
    return (
        <div>

            <div className="relative h-screen bg-deepBlack text-white font-sans">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: 'url("/img/Hero_Image.png")' }}
                >
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto text-center">
                        <p className="font-sans font-extrabold inline-block text-sm bg-clip-text bg-gradient-to-l from-blue-600 to-violet-500 text-transparent">
                            Innovate, Collaborate, Elevate.
                        </p>
                        <div className="mt-5 max-w-2xl">
                            <h1 className="font-extrabold block text-6xl md:text-5xl lg:text-8xl">
                                TechTrek-24
                            </h1>
                        </div>
                        <div className="mt-5 max-w-3xl">
                            <p className="font-body font-medium text-lg">
                                Join the web development adventure at TechTrek. Craft a cutting-edge E-commerce website in just 2 days. Let's code the future together!
                            </p>
                        </div>
                        <div className="mt-8 gap-3 flex justify-center">
                            <a className="group relative inline-block focus:outline-none focus:ring" href="https://registrations.ieeesrmist.com/">
                                <span className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-indigo transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></span>
                                <span className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest text-white group-active:text-opacity-75">Register</span>
                            </a>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Hero;