import React, { useState, useEffect } from 'react';

const Navtop = () => {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const targetDate = new Date("May 11, 2025 00:00:00").getTime();

        const updateCountdown = () => {
            const now = new Date().getTime();
            const difference = targetDate - now;

            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((difference % (1000 * 60)) / 1000);
                setTimeLeft({ days, hours, minutes, seconds });
            } else {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        };

        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        const interval = setInterval(updateCountdown, 1000);

        return () => {
            clearInterval(interval);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className='fixed px-3 py-1 flex justify-between w-full z-[100]'>
            <div className={`flex items-center gap-2 transition-all duration-300 ease-in-out ${scrolled ? "translate-x-5" : "translate-x-0"}`}>
                <img src="/images/logometavfest.png" alt="Logo" className="md:w-10 w-6" />
                <h1 className={`text-black font-bold md:text-4xl text-[19px] transition-all duration-300 ${scrolled ? "hidden" : "block"}`}>
                    MetaVFest
                </h1>
            </div>
            <div className='sm:px-6 px-1 py-1 bg-slate-100 backdrop-blur-md rounded-2xl'>
                <p className='text-black'>Starting In</p>
                <h1 className='text-black md:text-xl text-[10px] font-semibold'>
                {timeLeft.days} Days : {timeLeft.hours} Hours : {timeLeft.minutes} Minutes
                </h1>
            </div>
        </div>
    );
};

export default Navtop;
