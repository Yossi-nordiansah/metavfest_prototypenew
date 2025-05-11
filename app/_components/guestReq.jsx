"use client";
import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Marquee from "react-fast-marquee";

const Guests = () => {

    const [guests, setGuests] = useState([
        {
            name: "Vitalik Buterin",
            image: "/images/vitalik.png",
            description: "Co-founder Ethereum, seorang programmer dan penulis Rusia-Kanada yang menjadi wajah dari revolusi smart contract blockchain."
        },
        {
            name: "Changpeng Zhao (CZ)",
            image: "/images/changpeng-zhao.png",
            description: "Founder dan mantan CEO Binance, salah satu exchange crypto terbesar di dunia."
        },
        {
            name: "Charles Hoskinson",
            image: "/images/charles.png",
            description: "Pendiri Cardano dan salah satu pendiri Ethereum, dikenal atas pendekatannya yang ilmiah dan sistematis terhadap pengembangan blockchain."
        },
        {
            name: "Andreas M. Antonopoulos",
            image: "/images/andreas.png",
            description: "Penulis buku 'Mastering Bitcoin' dan pembicara edukatif yang sangat berpengaruh dalam pengenalan teknologi blockchain ke masyarakat luas."
        },
        {
            name: "Gavin Wood",
            image: "/images/gavin.png",
            description: "Co-founder Ethereum dan pendiri Polkadot, dia juga pencipta bahasa pemrograman Solidity."
        }
    ]);


    // Konfigurasi Carousel
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 3 }
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 2 }
            },
            {
                breakpoint: 480,
                settings: { slidesToShow: 1 }
            }
        ]
    };

    return (
        <section className="">
            <div className="w-full mx-auto px-2 sm:px-6 lg:px-8">
                <h2 className="sm:text-4xl text-lg font-bold text-slate-800 lg:mb-7 mb-12 text-center">Our Guests</h2>
                <Marquee speed={60}>
                    {guests.map((guest, index) => (
                        <div key={index} className="px-3 w-full h-full">
                            <div className="relative bg-gradient-to-br sm:w-72 w-60 from-blue-300 via-white to-red-300 backdrop-blur-lg rounded-lg shadow-lg text-center group flex flex-col min-h-80 h-full lg:justify-between justify-between lg:min-h-96">
                                <img src={guest.logo} alt="Company Logo" className={`pt-1 h-9 mx-auto ${guest.logo ? 'visible' : 'invisible'}`} />
                                <div className='flex flex-col justify-end'>
                                    <img src={guest.image} alt={guest.name} className="pt-2 transition-transform duration-300 group-hover:group-hover:scale-125 lg:h-72 h-60 w-full rounded-md lg:mb-2 mb-3 object-contain" />
                                    <div className="pb-2">
                                        <h3 className="text-xl font-semibold text-slate-800">{guest.name}</h3>
                                        <p
                                            className="text-sm px-2 text-slate-800 font-semibold line-clamp-2 transition-all duration-300 group-hover:line-clamp-none group-hover:overflow-visible"
                                        >
                                            {guest.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Marquee>
            </div>
        </section>
    );
};

export default Guests;