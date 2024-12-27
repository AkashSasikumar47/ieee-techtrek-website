import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    return (
        <footer className="max-w-screen-lg bg-white mx-auto px-4 py-6 md:px-8 md:py-10">
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
                transition={{ duration: 1 }}
                className="text-center flex flex-col items-center"
            >
                <div>
                    <a
                        className="flex-none"
                        href="#"
                        aria-label="Brand"
                    >
                        <motion.img
                            src="/assets/Logo/TechTrek_Logo.svg"
                            alt="TechTrek-Logo"
                            className="w-36 h-16"
                            whileHover={{
                                scale: 1.2,
                                transition: {
                                    duration: 0.8,
                                    ease: "easeInOut"
                                }
                            }}
                            whileTap={{ scale: 0.9 }}
                        />
                    </a>
                </div>

                <div className="mt-3">
                    <p className="mb-2 font-sans font-base text-black text-normal sm:text-lg">
                        We're part of the{' '}
                        <a
                            className="font-sans font-bold text-normal text-neonCyan sm:text-lg hover:text-blue-800"
                            href="https://www.ieee.org/"
                        >
                            IEEE
                        </a>{' '}
                        family.
                    </p>
                    <p className="font-sans font-base text-black text-xs sm:text-normal">© 2024 IEEE SRM. All rights reserved.</p>
                </div>

                <div className="mt-3 md:text-end space-x-2">
                    <a
                        className="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent focus:outline-none disabled:opacity-50 disabled:pointer-events-none text-neutral-400 hover:text-neonCyan hover:bg-neutral-700 focus:bg-neutral-700"
                        href="https://www.linkedin.com/company/ieeesrmist/"
                        target='_blank'
                        rel='noopener noreferrer'
                        aria-label="LinkedIn"
                    >
                        <FontAwesomeIcon icon={faLinkedin} className="shrink-0 size-3.5" />
                    </a>
                    <a
                        className="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent focus:outline-none disabled:opacity-50 disabled:pointer-events-none text-neutral-400 hover:text-neonCyan hover:bg-neutral-700 focus:bg-neutral-700"
                        href="https://www.instagram.com/ieeesrmist"
                        target='_blank'
                        rel='noopener noreferrer'
                        aria-label="Instagram"
                    >
                        <FontAwesomeIcon icon={faInstagram} className="shrink-0 size-3.5" />
                    </a>
                    <a
                        className="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent focus:outline-none disabled:opacity-50 disabled:pointer-events-none text-neutral-400 hover:text-neonCyan hover:bg-neutral-700 focus:bg-neutral-700"
                        href="https://github.com/IEEE-SRMIST"
                        target='_blank'
                        rel='noopener noreferrer'
                        aria-label="GitHub"
                    >
                        <FontAwesomeIcon icon={faGithub} className="shrink-0 size-3.5" />
                    </a>
                    <a
                        className="size-8 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent focus:outline-none disabled:opacity-50 disabled:pointer-events-none text-neutral-400 hover:text-neonCyan hover:bg-neutral-700 focus:bg-neutral-700"
                        href="https://www.twitter.com/ieeesrmist"
                        target='_blank'
                        rel='noopener noreferrer'
                        aria-label="Twitter"
                    >
                        <FontAwesomeIcon icon={faTwitter} className="shrink-0 size-3.5" />
                    </a>
                </div>
            </motion.div>
        </footer>
    );
};

export default Footer;