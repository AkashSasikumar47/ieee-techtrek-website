import React from 'react'

const AboutHactrix = () => {
    return (
        <div>

            {/* Features */}
            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                {/* Grid */}
                <div className="lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
                    {/* End Col */}
                    <div className="mt-5 sm:mt-10 lg:mt-0 lg:col-span-5">
                        <div className="space-y-6 sm:space-y-8">
                            {/* Title */}
                            <div className="space-y-2 md:space-y-4">
                                <h2 className="font-bold text-3xl lg:text-4xl text-gray-800 dark:text-gray-200">
                                    TechTrek: Code Your Commerce Canvas
                                </h2>
                                <p className="text-gray-500">
                                    TechTrek is not just a hackathon; it's an innovation journey that invites you to explore the exciting landscape of web development. Created by IEEE SRM Student Branch, TechTrek is a 2-day coding extravaganza where participants embark on the challenge to 'Code Your Commerce Canvas.' Whether you're a coding enthusiast, a beginner looking to learn, or an experienced developer seeking a creative challenge, TechTrek provides the platform to unleash your coding prowess. Join us to collaborate, innovate, and elevate your skills in an immersive environment. Let's code the future together!
                                </p>
                            </div>
                            {/* End Title */}
                        </div>
                    </div>
                    {/* End Col */}
                    <div className="lg:col-span-7">
                        {/* Grid */}
                        <div className="grid grid-cols-12 gap-2 sm:gap-6 items-center lg:-translate-x-10">
                            <div className="col-span-4">
                                <img
                                    className="rounded-xl"
                                    src="https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1981&q=80"
                                    alt="Image Description"
                                />
                            </div>
                            {/* End Col */}
                            <div className="col-span-3">
                                <img
                                    className="rounded-xl"
                                    src="https://images.unsplash.com/photo-1605629921711-2f6b00c6bbf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
                                    alt="Image Description"
                                />
                            </div>
                            {/* End Col */}
                            <div className="col-span-5">
                                <img
                                    className="rounded-xl"
                                    src="https://images.unsplash.com/photo-1600194992440-50b26e0a0309?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
                                    alt="Image Description"
                                />
                            </div>
                            {/* End Col */}
                        </div>
                        {/* End Grid */}
                    </div>

                </div>
                {/* End Grid */}
            </div>
            {/* End Features */}

        </div>
    )
}

export default AboutHactrix