import React from 'react';

const About = () => {
    return (
        <div>

            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto bg-deepBlack font-sans text-white">
                <div className="aspect-w-16 aspect-h-7">
                    <img
                        className="w-full object-cover rounded-xl"
                        src="/img/About_Banner.png"
                        alt="IEEE SRM Student Branch"
                    />
                </div>
                <div className="mt-5 lg:mt-16 grid lg:grid-cols-3 gap-8 lg:gap-12">
                    <div className="lg:col-span-1">
                        <h2 className="font-bold text-2xl md:text-3xl">
                            Discover IEEE SRMIST Student Branch
                        </h2>
                        <p className="mt-2 md:mt-4 text-sm font-body text-gray-300">
                            IEEE SRM Student Branch is a dynamic community dedicated to fostering technological innovation and excellence. As a proud chapter of the world's largest professional organization, IEEE, we strive to inspire, educate, and empower our members.
                        </p>
                    </div>
                    <div className="lg:col-span-2">
                        <div className="grid sm:grid-cols-2 gap-8 md:gap-12">
                            <IconBlock
                                icon={
                                    <svg
                                        className="flex-shrink-0 mt-1 w-6 h-6 text-blue-300"
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
                                        <rect width={18} height={10} x={3} y={11} rx={2} />
                                        <circle cx={12} cy={5} r={2} />
                                        <path d="M12 7v4" />
                                        <line x1={8} x2={8} y1={16} y2={16} />
                                        <line x1={16} x2={16} y1={16} y2={16} />
                                    </svg>
                                }
                                title="Our Founding"
                                content="IEEE SRMIST SB was established in 2015 with a vision to inspire, educate, and empower the next generation of engineers and innovators."
                            />
                            <IconBlock
                                icon={
                                    <svg
                                        className="flex-shrink-0 mt-1 w-6 h-6 text-blue-300"
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
                                        <path d="M7 10v12" />
                                        <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
                                    </svg>
                                }
                                title="Our Values"
                                content="We are driven by innovation, education, community, and excellence. These values guide our actions and initiatives."
                            />
                            <IconBlock
                                icon={
                                    <svg
                                        className="flex-shrink-0 mt-1 w-6 h-6 text-blue-300"
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
                                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                                    </svg>
                                }
                                title="Our Journey"
                                content="Over the years, we've organized impactful events, workshops, and initiatives, fostering talent and technological advancement."
                            />
                            <IconBlock
                                icon={
                                    <svg
                                        className="flex-shrink-0 mt-1 w-6 h-6 text-blue-300"
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
                                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                        <circle cx={9} cy={7} r={4} />
                                        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                    </svg>
                                }
                                title="Membership Benefits"
                                content="Joining IEEE opens doors to a world of resources, networking, and professional development opportunities."
                            />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

interface IconBlockProps {
    icon: React.ReactNode;
    title: string;
    content: string;
}

const IconBlock: React.FC<IconBlockProps> = ({ icon, title, content }) => (
    <div className="flex gap-x-5">
        {icon}
        <div className="grow">
            <h3 className="text-lg font-bold">
                {title}
            </h3>
            <p className="mt-1 text-sm font-body text-gray-300">
                {content}
            </p>
        </div>
    </div>
);

export default About;