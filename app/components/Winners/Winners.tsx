import React from 'react';
import { FiAward } from 'react-icons/fi';

const Winners = () => {
    const winners = [
        { position: '1st', team: 'Cart Coders', gradient: 'bg-gradient-to-r from-blue-700 via-blue-900 to-indigo' },
        { position: '2nd', team: 'Ul Unicorns', gradient: 'bg-gradient-to-r from-blue-700 via-blue-900 to-indigo' },
        { position: '3rd', team: 'Mavericks', gradient: 'bg-gradient-to-r from-blue-700 via-blue-900 to-indigo' },
    ];

    return (

        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto bg-deepBlack font-sans text-white">
            <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
                <h2 className="font-bold text-2xl md:text-3xl">
                    TechTrek 2024 Hackathon Winners
                </h2>
                <p className="mt-1 font-body text-gray-300">Meet the Outstanding Teams That Secured the Top Spots</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {winners.map((winner) => (
                    <div
                        key={winner.position}
                        className={`rounded-lg shadow-lg text-white p-6 ${winner.gradient} text-center`}
                    >
                        <div className="flex items-center mb-2 justify-center">
                            <FiAward className="text-2xl mr-2" />
                            <h3 className="text-xl font-bold font-sans">{`${winner.position} Place:`}</h3>
                        </div>
                        <p className="text-lg font-sans">{winner.team}</p>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default Winners;