import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const AnimatedEventCountdown = () => {
    const eventStartDate = new Date('2024-04-12T20:00:00');

    const calculateTimeLeft = () => {
        const difference = +eventStartDate - +new Date();
        let timeLeft = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        };

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / (1000 * 60)) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    const formatTime = (time: number) => {
        return time < 10 ? `0${time}` : time;
    };

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
            transition={{ duration: 0.5 }}
            className="max-w-screen-xl mx-auto px-4 py-6 md:px-8 md:py-10"
        >
            <div className="mx-auto mb-10 items-center justify-center text-center">
                <h2 className="mb-4 md:mb-6 font-sans font-bold text-black text-2xl sm:text-4xl">
                    Event Countdown
                </h2>
                <p className="font-sans font-bold text-center text-blue-800 text-4xl xl:text-6xl">
                    {timeLeft.days} Days {' '}
                    {formatTime(timeLeft.hours)} Hrs {' '}
                    {formatTime(timeLeft.minutes)} Mins {' '}
                    {formatTime(timeLeft.seconds)} Sec
                </p>
            </div>
        </motion.div>
    );
};

export default AnimatedEventCountdown;