import React from 'react';

const Speakers = () => {
    return (
        <div>
            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto bg-deepBlack text-white font-sans">
                <div className="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
                    <div className="mt-5 sm:mt-10 lg:mt-0">
                        <div className="space-y-6 sm:space-y-8 mb-8">
                            <div className="space-y-2 md:space-y-4">
                                <h2 className="font-bold text-2xl md:text-3xl">
                                    Empowering Perspectives with Lt. Najiya KV
                                </h2>
                                <p className="text-sm font-body text-gray-300">
                                    We are thrilled to welcome Lt. Najiya KV, an inspiring Assistant Professor from MES KEVEEYAM College Valanchery, Malappuram, to the TechTrek stage! With a passion for blockchain technology, Lt. Najiya brings a contagious enthusiasm for innovation and knowledge-sharing. Join us for an uplifting session as she empowers us with insights into the transformative world of blockchain. Get ready to be inspired and discover the positive impact of technology!
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img
                            className="rounded-xl w-full h-full object-cover aspect-w-4 aspect-h-5"
                            src="/img/Speaker.png"
                            alt="Image Description"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Speakers;