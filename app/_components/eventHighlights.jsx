"use client"
import React from 'react';
import { FaMicrophoneAlt, FaGamepad, FaChalkboardTeacher, FaBuilding, FaHandshake } from 'react-icons/fa';

const EventHighlights = () => {
    const highlights = [
        { 
            title: "Competition", 
            description: "Hackathon Web3, VR Challenges, Best Startup Pitch.", 
            icon: <FaGamepad className="text-4xl text-green-500" /> 
        },
        { 
            title: "Workshop", 
            description: "NFT creation, Smart Contract coding, Metaverse development.", 
            icon: <FaChalkboardTeacher className="text-4xl text-yellow-500" /> 
        },
        { 
            title: "Exhibition", 
            description: "Booth startup blockchain, produk NFT, & komunitas Web3.", 
            icon: <FaBuilding className="text-4xl text-red-500" /> 
        },
        { 
            title: "Networking", 
            description: "Business meeting session with investors, developers, and the community.", 
            icon: <FaHandshake className="text-4xl text-blue-500" /> 
        }
    ];

    return (
        <section className="py-12 mt-10 text-white bg-gradient-to-b from-transparent to-blue-950/50" id='highlights'>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
                {/* Grid Layout untuk Responsivitas */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    
                    {/* Kolom Kiri - Gambar */}
                    <div className="flex justify-center">
                        <img 
                            src="/images/why_join.png" 
                            alt="Why Join" 
                            className="w-full max-w-md md:max-w-lg rounded-lg shadow-lg"
                        />
                    </div>
    
                    {/* Kolom Kanan - Highlights */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {highlights.map((item, index) => (
                            <div 
                                key={index} 
                                className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-transform duration-300 hover:scale-105"
                            >
                                <div className="flex justify-center mb-4">{item.icon}</div>
                                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                                <p className="text-gray-400">{item.description}</p>
                            </div>
                        ))}
                    </div>
    
                </div>
            </div>
        </section>
    );    
};

export default EventHighlights;
