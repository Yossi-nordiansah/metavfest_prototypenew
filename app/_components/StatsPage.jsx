import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

const news = [
  {
    "event": "METAVFEST",
    "theme": "Exploring the Future of Crypto, Web3, and Digital Entertainment",
    "categories": [
      {
        "name": "Crypto & Web3",
        "events": [
          {
            "title": "The Future of DeFi",
            "description": "Panel diskusi tentang desentralisasi keuangan dan dampaknya terhadap industri global.",
            "speakers": ["-", "-", "-"],
            "date": "2025-08-12",
            "location": "Main Hall A"
          },
          {
            "title": "Building on the Blockchain",
            "description": "Workshop untuk pengembang dalam membangun aplikasi Web3 menggunakan Ethereum dan Solana.",
            "speakers": ["-", "-"],
            "date": "2025-08-13",
            "location": "Developer Hub"
          },
          {
            "title": "NFTs & the Creator Economy",
            "description": "Diskusi tentang bagaimana NFT merevolusi industri seni dan hiburan.",
            "speakers": ["-", "-", "-"],
            "date": "2025-08-14",
            "location": "Creative Zone"
          }
        ]
      },
      {
        "name": "Tech & Innovation",
        "events": [
          {
            "title": "AI and Blockchain Integration",
            "description": "Bagaimana AI dapat meningkatkan efisiensi dan keamanan dalam blockchain.",
            "speakers": ["Elon Musk", "Ben Goertzel"],
            "date": "2025-08-15",
            "location": "Tech Stage"
          },
          {
            "title": "Metaverse & Virtual Worlds",
            "description": "Eksplorasi masa depan metaverse dan dampaknya terhadap sosial dan bisnis.",
            "speakers": ["Mark Zuckerberg", "Neal Stephenson"],
            "date": "2025-08-16",
            "location": "Virtual Reality Lab"
          }
        ]
      },
      {
        "name": "Concert & Performing Arts",
        "events": [
          {
            "title": "Crypto Rave Night",
            "description": "Konser EDM eksklusif dengan pembayaran tiket menggunakan cryptocurrency.",
            "performers": ["-", "-"],
            "date": "2025-08-17",
            "location": "Open Air Stage"
          },
          {
            "title": "Hologram Artist Showcase",
            "description": "Pertunjukan musisi digital menggunakan teknologi hologram Web3.",
            "performers": ["-", "-"],
            "date": "2025-08-18",
            "location": "Holo Stage"
          }
        ]
      }
    ]
  }    
]

export default function NewsCarousel() {
  const [newsItems, setNewsItems] = useState([]);
  const [activeNewsIndex, setActiveNewsIndex] = useState(0);

  useEffect(() => {
    // Menggabungkan semua event dari berbagai kategori menjadi satu array
    const allNews = news[0].categories.flatMap((category) =>
      category.events.map((event) => ({
        id: event.id,
        title: event.title,
        description: event.description,
        image: event.image || "/images/default-news.jpg" // Fallback jika tidak ada gambar
      }))
    );
    setNewsItems(allNews);
  }, []);

  useEffect(() => {
    // Auto-slide setiap 5 detik
    const interval = setInterval(() => {
      setActiveNewsIndex((prevIndex) =>
        prevIndex === newsItems.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [newsItems]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-100 py-4 px-4 z-11">
      <div className="max-w-6xl mx-auto">
        <div className="relative">
          <div className="relative h-80 overflow-hidden rounded-xl">
            {newsItems.map((item, index) => (
              <div
                key={item.id}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out flex flex-col ${
                  index === activeNewsIndex
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-full"
                }`}
              >
                <div className="relative h-64 w-full overflow-hidden rounded-t-xl">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  </div>
                </div>

                <div className="flex-1 bg-blue-900/80 backdrop-blur-sm p-4 rounded-b-xl border-t border-blue-700">
                  <p className="text-blue-100">{item.description}</p>

                  <div className="flex justify-between items-center mt-4">
                    <div className="flex items-center space-x-1 text-blue-300 text-sm">
                      <span>Learn more</span>
                      <ArrowRight size={16} />
                    </div>

                    <div className="flex space-x-2">
                      {newsItems.map((_, dotIndex) => (
                        <div
                          key={dotIndex}
                          className={`w-2 h-2 rounded-full ${
                            dotIndex === activeNewsIndex ? "bg-blue-300" : "bg-blue-700"
                          }`}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}