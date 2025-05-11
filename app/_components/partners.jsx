"use client"
import React from 'react';
import Marquee from "react-fast-marquee";

const Partners = () => {
    const getRandomOffset = () => {
        return Math.random() * 20 - 10; // Offset antara -10px sampai +10px
    };
    const partners = [
        { name: 'Polkadot', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQfy_UnBnPrqfM3qtVAT12pMMRpZ6P05M6vg&s' },
        { name: 'APTOS', logo: 'https://aptosfoundation.org/brandbook/logomark/PNG/Aptos_mark_BLK.png' },
        { name: 'Binance', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Binance_Logo.svg/768px-Binance_Logo.svg.png' },
        { name: 'Circle', logo: 'https://cdn.brandfetch.io/circle.com/fallback/lettermark/theme/dark/h/256/w/256/icon?c=1bfwsmEH20zzEfSNTed' },
        { name: 'Wallet', logo: 'https://seeklogo.com/images/W/walletconnect-logo-EE83B50C97-seeklogo.com.png' },
        { name: 'Solana', logo: 'https://images.seeklogo.com/logo-png/39/1/solana-sol-logo-png_seeklogo-398274.png' },
        { name: 'Tezos', logo: 'https://logowik.com/content/uploads/images/tezos-xtz-icon2984.logowik.com.webp' },
        { name: 'Algorand', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS77t2tiFdOBOn41ZRBRpB-AifRTUmPhcraDQ&s' },
        { name: 'Solana', logo: 'https://images.seeklogo.com/logo-png/39/1/solana-sol-logo-png_seeklogo-398274.png' },
        { name: 'Tezos', logo: 'https://logowik.com/content/uploads/images/tezos-xtz-icon2984.logowik.com.webp' },
        { name: 'Algorand', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS77t2tiFdOBOn41ZRBRpB-AifRTUmPhcraDQ&s' },
        { name: 'Solana', logo: 'https://images.seeklogo.com/logo-png/39/1/solana-sol-logo-png_seeklogo-398274.png' },
        { name: 'Tezos', logo: 'https://logowik.com/content/uploads/images/tezos-xtz-icon2984.logowik.com.webp' },
        { name: 'Algorand', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS77t2tiFdOBOn41ZRBRpB-AifRTUmPhcraDQ&s' },
    ];

    return (
        <div className="">
          <h2 className="sm:text-4xl text-xl font-bold text-slate-800 lg:mb-16 mb-7 text-center">Partners</h2>
          <Marquee  speed={50}>
            <div className="flex sm:space-x-14 space-x-2">
              {partners.map((partner, index) => (
                <div 
                  key={index} 
                  className={`flex flex-col items-center p-4 space-y-1 ml-16 ${
                    index % 2 === 0 ? "sm:mt-44 mt-40" : "mb-44"
                  }`} // Efek tidak sejajar
                >
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="max-w-24 h-24 object-contain" 
                  />
                  <span className="text-gray-700 font-semibold">{partner.name}</span>
                </div>
              ))}
            </div>
          </Marquee>
        </div>
      );
};

export default Partners;


