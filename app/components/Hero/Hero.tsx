import React from "react";

const steps = [
    { day: "Day 1", title: "Book", description: "Pay upfront and secure your spot." },
    { day: "Day 2", title: "Brief", description: "Share your goals and brand details." },
    { day: "Day 3", title: "Design Delivery", description: "We create your custom, high-converting design." },
    { day: "Day 4", title: "Delivery", description: "Receive your fresh, professional landing page design." },
];

const Hero: React.FC = () => {
    return (
        <div className="max-w-screen-lg mx-auto px-4 py-6 md:px-8 md:py-10 mb-8">
            <div className="flex flex-col gap-12">
                {/* Logo Placeholder */}
                <div className="text-2xl font-bold">Logo</div>

                <div className="flex flex-col lg:flex-row border p-8 border-dashed border-zinc-300 dark:border-zinc-700">
                    <div>
                        <div className="flex items-center gap-2 text-black dark:text-white">
                            <div className="w-8 h-8 rounded-lg bg-green-500 animate-pulse"></div>
                            <p className="text-sm text-black dark:text-white">
                                Available — No subscription required
                            </p>
                        </div>
                        <h1 className="text-2xl lg:text-5xl font-serif italic tracking-wide text-black dark:text-white mt-4">
                            Transform your landing page for a fixed price
                        </h1>
                        <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-4">
                            Professional designs that convert, at a price that won't surprise.
                        </p>
                    </div>
                </div>

                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-8 border-x border-dashed border-zinc-300 dark:border-zinc-700">
                    {steps.map((step, index) => (
                        <li key={index}>
                            <h3 className="text-base font-semibold text-black dark:text-white">
                                {step.day}. {step.title}
                            </h3>
                            <p className="text-base text-zinc-500 dark:text-zinc-400 mt-2">
                                {step.description}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Hero;
