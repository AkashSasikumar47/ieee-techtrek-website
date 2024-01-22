import React from 'react'

const FAQ = () => {
    return (
        <div>

            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto bg-deepBlack text-white font-sans">
                <div className="grid md:grid-cols-5 gap-10">
                    <div className="md:col-span-2">
                        <div className="max-w-xs">
                            <h2 className="font-bold text-2xl md:text-3xl">
                                Frequently asked questions
                            </h2>
                            <p className="mt-1 hidden md:block font-body text-gray-300">
                                Answers to the most frequently asked questions.
                            </p>
                        </div>
                    </div>
                    <div className="md:col-span-3">
                        <div className="hs-accordion-group divide-y divide-gray-700">
                            <div
                                className="hs-accordion pb-3 active"
                                id="hs-basic-with-title-and-arrow-stretched-heading-one"
                            >
                                <button
                                    className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-medium text-start font-body text-gray-300 rounded-lg transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                    aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one"
                                >
                                    Who can participate in TechTrek: Code Your Commerce Canvas?
                                    <svg
                                        className="hs-accordion-active:hidden block flex-shrink-0 w-5 h-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="m6 9 6 6 6-6" />
                                    </svg>
                                    <svg
                                        className="hs-accordion-active:block hidden flex-shrink-0 w-5 h-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="m18 15-6-6-6 6" />
                                    </svg>
                                </button>
                                <div
                                    id="hs-basic-with-title-and-arrow-stretched-collapse-one"
                                    className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                                    aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one"
                                >
                                    <p className="text-sm font-body text-gray-300">
                                        TechTrek is open to everyone, regardless of skill level. Whether you're a beginner or an experienced developer, everyone is encouraged to participate.
                                    </p>
                                </div>
                            </div>
                            <div
                                className="hs-accordion pt-6 pb-3"
                                id="hs-basic-with-title-and-arrow-stretched-heading-two"
                            >
                                <button
                                    className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-medium text-start font-body text-gray-300 rounded-lg transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                    aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-two"
                                >
                                    How can I register for TechTrek?
                                    <svg
                                        className="hs-accordion-active:hidden block flex-shrink-0 w-5 h-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="m6 9 6 6 6-6" />
                                    </svg>
                                    <svg
                                        className="hs-accordion-active:block hidden flex-shrink-0 w-5 h-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="m18 15-6-6-6 6" />
                                    </svg>
                                </button>
                                <div
                                    id="hs-basic-with-title-and-arrow-stretched-collapse-two"
                                    className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                                    aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-two"
                                >
                                    <p className="text-sm font-body text-gray-300">
                                        To register for TechTrek, simply visit our registration page{" "}
                                        <a
                                            href="https://registrations.ieeesrmist.com/"
                                            target="_blank"  // Add this line if you want to open the link in a new tab
                                            rel="noopener noreferrer"  // Recommended for security reasons when using target="_blank"
                                            className="text-blue-500 hover:underline"
                                        >
                                            Register Here
                                        </a>{" "}
                                        and follow the instructions. Hurry, as spots are limited!
                                    </p>
                                </div>
                            </div>
                            <div
                                className="hs-accordion pt-6 pb-3"
                                id="hs-basic-with-title-and-arrow-stretched-heading-three"
                            >
                                <button
                                    className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-medium text-start font-body text-gray-300 rounded-lg transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                    aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-three"
                                >
                                    Can I participate as an individual, or do I need to form a team?
                                    <svg
                                        className="hs-accordion-active:hidden block flex-shrink-0 w-5 h-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="m6 9 6 6 6-6" />
                                    </svg>
                                    <svg
                                        className="hs-accordion-active:block hidden flex-shrink-0 w-5 h-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="m18 15-6-6-6 6" />
                                    </svg>
                                </button>
                                <div
                                    id="hs-basic-with-title-and-arrow-stretched-collapse-three"
                                    className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                                    aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-three"
                                >
                                    <p className="text-sm font-body text-gray-300">
                                        While individual participation is allowed, we encourage forming teams of three. Teamwork often enhances the hackathon experience and fosters collaboration.
                                    </p>
                                </div>
                            </div>
                            <div
                                className="hs-accordion pt-6 pb-3"
                                id="hs-basic-with-title-and-arrow-stretched-heading-four"
                            >
                                <button
                                    className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-medium text-start font-body text-gray-300 rounded-lg transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                    aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-four"
                                >
                                    Is there a specific technology or framework I need to use for the hackathon?
                                    <svg
                                        className="hs-accordion-active:hidden block flex-shrink-0 w-5 h-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="m6 9 6 6 6-6" />
                                    </svg>
                                    <svg
                                        className="hs-accordion-active:block hidden flex-shrink-0 w-5 h-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="m18 15-6-6-6 6" />
                                    </svg>
                                </button>
                                <div
                                    id="hs-basic-with-title-and-arrow-stretched-collapse-four"
                                    className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                                    aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-four"
                                >
                                    <p className="text-sm font-body text-gray-300">
                                        No, there are no restrictions on the technologies or frameworks you can use. Feel free to choose the tools that best align with your skills and project requirements.
                                    </p>
                                </div>
                            </div>
                            <div
                                className="hs-accordion pt-6 pb-3"
                                id="hs-basic-with-title-and-arrow-stretched-heading-five"
                            >
                                <button
                                    className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-medium text-start font-body text-gray-300 rounded-lg transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                    aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-five"
                                >
                                    What happens during the Introduction & Speaker Session?
                                    <svg
                                        className="hs-accordion-active:hidden block flex-shrink-0 w-5 h-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="m6 9 6 6 6-6" />
                                    </svg>
                                    <svg
                                        className="hs-accordion-active:block hidden flex-shrink-0 w-5 h-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="m18 15-6-6-6 6" />
                                    </svg>
                                </button>
                                <div
                                    id="hs-basic-with-title-and-arrow-stretched-collapse-five"
                                    className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                                    aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-five"
                                >
                                    <p className="text-sm font-body text-gray-300">
                                        The Introduction & Speaker Session is an opportunity to learn from industry experts. It includes keynote addresses, panel discussions, and valuable insights into web development and E-commerce trends.
                                    </p>
                                </div>
                            </div>
                            <div
                                className="hs-accordion pt-6 pb-3"
                                id="hs-basic-with-title-and-arrow-stretched-heading-six"
                            >
                                <button
                                    className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-medium text-start font-body text-gray-300 rounded-lg transition hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                                    aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-six"
                                >
                                    How will the Project Showcase be conducted, and what is the evaluation criteria?
                                    <svg
                                        className="hs-accordion-active:hidden block flex-shrink-0 w-5 h-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="m6 9 6 6 6-6" />
                                    </svg>
                                    <svg
                                        className="hs-accordion-active:block hidden flex-shrink-0 w-5 h-5 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="m18 15-6-6-6 6" />
                                    </svg>
                                </button>
                                <div
                                    id="hs-basic-with-title-and-arrow-stretched-collapse-six"
                                    className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                                    aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-six"
                                >
                                    <p className="text-sm font-body text-gray-300">
                                        Each team will have a 10-minute slot to present and demonstrate their project during the Project Showcase. Projects will be evaluated based on functionality, user experience, creativity, and code quality.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default FAQ