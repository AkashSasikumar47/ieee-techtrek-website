import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollTop, setLastScrollTop] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if (currentScrollTop > lastScrollTop) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
            setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollTop]);

    return (
        <header
            className={`sticky top-0 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'
                } backdrop-blur-md bg-neutral-800/30`}
        >
            <nav className="relative max-w-screen-2xl w-full py-2.5 px-5 flex md:items-center justify-between md:py-0 mx-2 lg:mx-auto">
                <div className="flex items-center justify-between">
                    <a href="/" className="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl" aria-label="logo">
                        <img src="/assets/Logo/IEEE-Logo.svg" alt="Gen_AI logo" className="h-8 md:h-12" />
                    </a>
                </div>
                <div className="flex flex-col md:flex-row md:items-center md:justify-end py-2 md:py-0 md:ps-7">
                    <div className='ps-px md:py-4 px-4'>
                        <a
                            className="group inline-flex items-center gap-x-2 py-2 px-3 bg-cyan-400 text-black font-medium text-sm rounded-full focus:outline-none"
                            href="https://registrations.ieeesrmist.com/"
                        >
                            Register Now
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;