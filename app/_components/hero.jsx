import React from "react";
import { FaLocationDot } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="relative flex flex-col items-center justify-center text-white lg:h-screen py-10 overflow-visible pt-10 pb-20 lg:pb-32">
      {/* Background Image */}
      <img
        src="/images/hero-1.png"
        alt="hero background"
        className="mt-16 absolute top-0 left-1/2 -translate-x-1/2 w-[95vw] lg:w-[85vw] md:w-[75vw] sm:w-[65vw] h-auto max-w-none object-cover"
      />

      <div className="relative z-10 w-full flex flex-col items-center text-center px-4">
        {/* Floating Logo (Hero-2) */}
        <img
          src="/images/hero-2.png"
          alt="floating title"
          className="w-[95vw] lg:w-[85vw] md:w-[75vw] sm:w-[65vw] max-w-none h-auto animate-float mt-auto lg:mt-32"
        />

        {/* Title & Description */}
        <p className="px-4 text-2xl sm:text-4xl font-bold bg-black bg-clip-text text-transparent">
          MetaVFest - The Future of Web3 &
        </p>
        <p className="px-4 text-2xl sm:text-4xl font-bold bg-black bg-clip-text text-transparent">
          Blockchain in Surabaya
        </p>
        <p className="px-4 sm:text-xl mt-2 font-bold bg-black bg-clip-text text-transparent">
          "Explore. Learn. Network. Experience the World of Crypto, Metaverse, and Innovation."
        </p>
        <p className="px-4 sm:text-xl mt-6 font-bold bg-black bg-clip-text text-transparent">
          <a
            href="https://www.google.com/maps/place/Balai+Pemuda+Surabaya/@-7.2639727,112.7427289,17z/data=!3m1!4b1!4m6!3m5!1s0x2dd7f9617fe40b67:0x987ff0249bb2e08a!8m2!3d-7.263978!4d112.7453038!16s%2Fg%2F1pzr1w7sd?entry=ttu&g_ep=EgoyMDI1MDMxMi4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black"
          >
            Balai Pemuda Surabaya
          </a> 
          <FaLocationDot className="inline text-red-700" /> | 11 Mei 2025
        </p>
      </div>
    </div>
  );
};

export default Hero;
