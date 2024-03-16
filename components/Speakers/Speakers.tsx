import React from 'react'

const Speakers = () => {
    return (
        <div>

            <div className="bg-white py-6 sm:py-8 lg:py-12">
                <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                    <div className="mb-6 flex items-end justify-between gap-4">
                        <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
                            Collections
                        </h2>
                        <a
                            href="#"
                            className="inline-block rounded-lg border bg-white px-4 py-2 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base"
                        >
                            Show more
                        </a>
                    </div>
                    <div className="grid gap-x-4 gap-y-6 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
                        {/* product - start */}
                        <div>
                            <a
                                href="#"
                                className="group mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&q=75&fit=crop&crop=top&w=600&h=700"
                                    loading="lazy"
                                    alt="Photo by Austin Wade"
                                    className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                                />
                            </a>
                            <div className="flex flex-col">
                                <span className="text-gray-500">Men</span>
                                <a
                                    href="#"
                                    className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
                                >
                                    Business Causual
                                </a>
                            </div>
                        </div>
                        {/* product - end */}
                        {/* product - start */}
                        <div>
                            <a
                                href="#"
                                className="group mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1603344797033-f0f4f587ab60?auto=format&q=75&fit=crop&crop=top&w=600&h=700"
                                    loading="lazy"
                                    alt="Photo by engin akyurt"
                                    className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                                />
                            </a>
                            <div className="flex flex-col">
                                <span className="text-gray-500">Women</span>
                                <a
                                    href="#"
                                    className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
                                >
                                    Summer Season
                                </a>
                            </div>
                        </div>
                        {/* product - end */}
                        {/* product - start */}
                        <div>
                            <a
                                href="#"
                                className="group mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1552668693-d0738e00eca8?auto=format&q=75&fit=crop&crop=top&w=600&h=700"
                                    loading="lazy"
                                    alt="Photo by Austin Wade"
                                    className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                                />
                            </a>
                            <div className="flex flex-col">
                                <span className="text-gray-500">Men</span>
                                <a
                                    href="#"
                                    className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
                                >
                                    Streetwear
                                </a>
                            </div>
                        </div>
                        {/* product - end */}
                        {/* product - start */}
                        <div>
                            <a
                                href="#"
                                className="group mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1560269999-cef6ebd23ad3?auto=format&q=75&fit=crop&w=600&h=700"
                                    loading="lazy"
                                    alt="Photo by Austin Wade"
                                    className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                                />
                            </a>
                            <div className="flex flex-col">
                                <span className="text-gray-500">Women</span>
                                <a
                                    href="#"
                                    className="text-lg font-bold text-gray-800 transition duration-100 hover:text-gray-500 lg:text-xl"
                                >
                                    Sale
                                </a>
                            </div>
                        </div>
                        {/* product - end */}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Speakers