import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Footer = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    return (
        <footer className="max-w-screen-xl mx-auto px-4 py-6 md:px-8 md:py-10">
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
                transition={{ duration: 1 }}
                className="text-center flex flex-col items-center"
            >
                <div>
                    <a
                        className="flex-none text-sm font-head font-extrabold text-orange"
                        href="#"
                        aria-label="Brand"
                    >
                        <motion.img
                            src="/assets/Logo/protocol.svg"
                            alt="protocol-Logo"
                            className="w-36 h-16"
                            whileHover={{ rotate: [0, 360], transition: { duration: 2, loop: Infinity } }}
                        />
                    </a>
                </div>

                <div className="mt-3">
                    <p className="mb-2 font-sans font-base text-gray-500 text-normal sm:text-lg">
                        We're part of the{' '}
                        <a
                            className="font-sans font-bold text-normal sm:text-lg hover:text-blue-800"
                            href="https://www.ieee.org/"
                        >
                            IEEE
                        </a>{' '}
                        family.
                    </p>
                    <p className="font-sans font-base text-gray-500 text-xs sm:text-normal">© 2024 IEEE SRM. All rights reserved.</p>
                </div>
            </motion.div>
        </footer>
    );
};

export default Footer;