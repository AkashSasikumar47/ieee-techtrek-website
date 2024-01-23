import React from 'react';

const Navbar = () => {
    return (
        <div>

            <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-black text-white py-3 sm:py-0">
                <nav className="relative max-w-7xl w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 mt-6" aria-label="Global">
                    <div className="flex items-center justify-between">
                        <a href="#">
                            <img className="flex-none h-10 w-36" src="/Logo/TechTrek_Logo.svg" alt="TechTreck Logo" />
                        </a>
                        <div className="sm:hidden">
                            <button
                                type="button"
                                className="hs-collapse-toggle w-9 h-9 flex justify-center items-center text-sm font-semibold rounded-lg border border-indigo text-white hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring focus:border-blue-300"
                                data-hs-collapse="#navbar-collapse-with-animation"
                                aria-controls="navbar-collapse-with-animation"
                                aria-label="Toggle navigation"
                            >
                                <svg
                                    className="hs-collapse-open:hidden w-4 h-4"
                                    width={16}
                                    height={16}
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                                    />
                                </svg>
                                <svg
                                    className="hs-collapse-open:block flex-shrink-0 hidden w-4 h-4"
                                    width={16}
                                    height={16}
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div id="navbar-collapse-with-animation" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block">
                        <div className="flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:ps-7">
                            <a className="group relative inline-block focus:outline-none focus:ring" href="https://registrations.ieeesrmist.com/">
                                <span className="font-sans absolute inset-0 translate-x-1.5 translate-y-1.5 bg-indigo transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></span>
                                <span className="font-sans relative inline-block border-2 border-current px-4 py-2 text-sm font-extrabold uppercase tracking-widest text-white group-active:text-opacity-75">Register</span>
                            </a>
                        </div>
                    </div>
                </nav>
            </header>

        </div>
    );
};

export default Navbar;