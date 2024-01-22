import React from 'react';

const Sponsors = () => {
    return (
        <div>

            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto bg-deepBlack font-sans text-white">
                <div className="sm:w-1/2 xl:w-1/3 mx-auto text-center mb-6">
                    <h2 className="font-bold text-2xl md:text-3xl">
                        Our Proud Sponsors
                    </h2>
                </div>
                <div className="my-8 md:my-16 grid grid-cols-3 sm:flex sm:justify-center gap-6 sm:gap-x-12 lg:gap-x-20">
                    <a href="https://ctsoc.ieee.org">
                        <img className="flex-shrink-0 transition hover:-translate-y-1 h-16 w-42" src="/Sponsors/CTSoc.png" alt="CTSoc Logo" />
                    </a>
                    <a href="https://www.ieee-pels.org">
                        <img className="flex-shrink-0 transition hover:-translate-y-1 h-16 w-42" src="/Sponsors/PELS.png" alt="PELS Logo" />
                    </a>
                    <a href="https://www.ieee-ras.org">
                        <img className="flex-shrink-0 transition hover:-translate-y-1 h-16 w-42" src="/Sponsors/RAS.png" alt="RAS Logo" />
                    </a>
                </div>
            </div>

        </div>
    );
};

export default Sponsors;