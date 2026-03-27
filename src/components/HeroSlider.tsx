'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface SliderItem {
  id: number;
  title: string;
  description: string;
  bgColor: string;
  icon: string;
  backgroundImage?: string;
}

const sliderItems: SliderItem[] = [
  {
    id: 1,
    title: 'Elektrik Malzemeleri',
    description: 'Yüksek kaliteli ve orijinal elektrik malzemeleri tedariği hizmetleri',
    bgColor: 'bg-gradient-to-r from-blue-600 to-blue-800',
    icon: '⚡',
    backgroundImage: '/images/tedarik-cozumleri.jpg',
  },
  {
    id: 2,
    title: 'Lastik & Jant Servisi',
    description: 'Profesyonel bakım, tamir, satım ve değişim hizmetleri',
    bgColor: 'bg-gradient-to-r from-gray-700 to-gray-900',
    icon: '🛞',
  },
 
];

export function HeroSlider() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      loop
      className="w-full"
    >
      {sliderItems.map((item) => (
        <SwiperSlide key={item.id}>
          <div 
            className={`${item.bgColor} text-white h-96 md:h-[500px] px-4 flex items-center justify-center relative overflow-hidden`}
            style={item.backgroundImage ? {
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${item.backgroundImage}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            } : {}}
          >
            <div className="max-w-7xl mx-auto text-center relative z-10">
              <div className="text-6xl md:text-8xl mb-6">{item.icon}</div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">{item.title}</h1>
              <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto drop-shadow-md">
                {item.description}
              </p>
              <a
                href="#hizmetler"
                className="inline-block bg-orange-500 text-black px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
              >
                Daha Fazla Bilgi
              </a>
            </div>
          </div>
        </SwiperSlide>
      ))}

      <style>{`
        .swiper-pagination-bullet {
          background-color: rgba(255, 255, 255, 0.5);
        }
        .swiper-pagination-bullet-active {
          background-color: #f97316;
        }
        .swiper-button-next,
        .swiper-button-prev {
          color: white;
          background-color: rgba(0, 0, 0, 0.3);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .swiper-button-next:after,
        .swiper-button-prev:after {
          font-size: 20px;
        }
        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          background-color: rgba(0, 0, 0, 0.5);
        }
      `}</style>
    </Swiper>
  );
}
