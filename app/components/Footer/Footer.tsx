import React from 'react';

const Footer = () => {
    return (
        <div>

            <footer className="w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto bg-deepBlack text-white font-sans">
                <div className="text-center">

                    <div>
                        <a
                            className="flex-none text-4xl font-extrabold text-white"
                            href="#"
                            aria-label="Brand"
                        >
                            TechTrek
                        </a>
                    </div>

                    <div className="mt-3">
                        <p className="text-white font-body">
                            We're part of the{' '}
                            <a
                                className="font-semibold text-blue-600 hover:text-blue-700"
                                href="https://www.ieee.org/"
                            >
                                IEEE
                            </a>{' '}
                            family.
                        </p>
                        <p className="text-white">© 2024 IEEE SRM. All rights reserved.</p>
                    </div>

                </div>
            </footer>

        </div>
    );
};

export default Footer;