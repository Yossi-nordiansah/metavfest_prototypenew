"use client"
import React from 'react';
import { useState } from "react";
import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";


const EventHighlights = () => {
    const events = [
        { 
            title: "Performance",
            popUpTitle: "Performance Song Showcase", 
            description: "Metavfest menghadirkan pertunjukan musik spektakuler yang menampilkan artis papan atas, band indie, serta musisi komunitas dari berbagai genre. Dengan tata panggung megah dan teknologi suara canggih, acara ini akan menjadi pusat hiburan yang menggetarkan jiwa.",
            image: "/images/performance.svg",
            descImage: "/images/performance2.svg"
        },
        { 
            title: "Turnamen Valorant",
            popUpTitle: "Valorant Grand Tournament", 
            description: "Saksikan pertarungan sengit antar tim terbaik dalam skena kompetitif Valorant di Metavfest! Dengan prize pool besar, caster profesional, dan atmosfer e-sports yang mendebarkan, turnamen ini akan menjadi ajang pertarungan para legenda.", 
            image: "/images/valorant.svg",
            descImage: "/images/valorant2.svg"
        },
        { 
            title: "Anime & Cosplay",
            popUpTitle: "Anime & Cosplay Festival", 
            description: "Bagi para pecinta anime dan cosplay, Metavfest menyajikan festival cosplay terbesar dengan para cosplayer profesional, kompetisi kostum, meet and greet dengan kreator anime, serta berbagai booth merchandise eksklusif.", 
            image: "/images/cosplay.svg",
            descImage: "/images/cosplay2.svg"
        },
        { 
            title: "Crypto Gathering Community", 
            popUpTitle: "Web3 & Blockchain Gathering", 
            description: "Acara eksklusif bagi komunitas Web3, NFT, dan Blockchain untuk berdiskusi, berjejaring, dan berbagi wawasan dengan para ahli industri. Hadirkan inovasi terbaru dalam dunia crypto dan potensi masa depan yang lebih terbuka!", 
            image: "/images/crypto.svg",
            descImage: "/images/crypto2.svg"
        }
    ];
      
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [rotation, setRotation] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - left) / width - 0.5) * 20;
        const y = ((e.clientY - top) / height - 0.5) * 20;
        setRotation({ x: y, y: -x });
    };

    const handleMouseLeave = () => {
        setRotation({ x: 0, y: 0 });
    };

    return (    
        <section className="py-4 mt-0 text-black bg-highlight-gradient" id="highlights">
            <div className="text-center mb-8">
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
                <FaLocationDot className="inline text-red-700 mb-4" /> | 11 Mei 2025
                </p>
            </div>

            <div className="container max-w-none px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
                {/* Grid Responsif */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center" data-aos="fade-up" data-aos-duration="900">
                
                {/* Kolom Gambar Tetap di Atas di Semua Ukuran */}
                <div className="flex justify-center order-1 lg:order-none">
                    <div
                        className="w-full max-w-md md:max-w-lg rounded-lg transition-transform duration-300"
                        style={{
                        transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                        }}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                    >
                        <img
                        src="/images/why_join.png"
                        alt="Why Join"
                        className="w-full rounded-lg shadow-lg"
                        />
                    </div>
                </div>

                {/* Kolom Highlights - Berubah jadi 1 Kolom di Mobile */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 order-2">
                    {events.map((event, index) => (
                    <div 
                        key={index} 
                        className="relative cursor-pointer rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-transform duration-300 hover:scale-105"
                        onClick={() => setSelectedEvent(event)}
                    >
                        <Image 
                        src={event.image} 
                        alt={event.title} 
                        width={500} 
                        height={300} 
                        className="w-full h-64 object-cover"
                        />
                        <div className="absolute bottom-0 left-0 w-full text-white text-center p-4 
                                        bg-gradient-to-r from-red-500 to-blue-500 
                                        animate-gradient-move hover:animate-gradient-shift">
                        <h3 className="text-xl font-semibold">{event.title}</h3>
                        </div>
                    </div>
                    ))}

                    {/* Popup Modal */}
                    {selectedEvent && ( 
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 backdrop-blur-md">
                        <div className="bg-white p-8 rounded-lg shadow-2xl max-w-2xl text-center relative">
                        <button 
                            className="absolute top-3 right-4 text-gray-600 hover:text-gray-900 text-3xl font-bold" 
                            onClick={() => setSelectedEvent(null)}
                        >
                            &times;
                        </button>
                        <Image 
                            src={selectedEvent.descImage} 
                            alt={selectedEvent.popUpTitle} 
                            width={600} 
                            height={350} 
                            className="w-full h-56 object-cover rounded-lg"
                        />
                        <h3 className="text-3xl font-extrabold text-gray-800">{selectedEvent.popUpTitle}</h3>
                        <p className="text-gray-700  text-lg leading-relaxed">{selectedEvent.description}</p>
                        </div>
                    </div>
                    )}
                </div>
                </div>
            </div>
        </section>
        
            );    
        };

export default EventHighlights;
