import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Navigation,
  Pagination,
  A11y,
  Autoplay,
  HashNavigation,
} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/hash-navigation';

import { TeamCard } from '../../modules/ourTeams/components';
import { SpriteSVG } from '../../img/SpriteSVG';
import { useRef, useEffect } from 'react';
import type { Swiper as SwiperClass } from 'swiper/types';

interface DataTypeProps {
  name: string;
  position: string;
  img: string;
  link_telegram: string;
}

export default function Slider({ data }: { data: DataTypeProps[] }) {
  const swiperRef = useRef<SwiperClass | null>(null);

  useEffect(() => {
    const swiperInstance = swiperRef.current;

    const handleMouseEnter = () => {
      swiperInstance?.autoplay.stop();
    };

    const handleMouseLeave = () => {
      swiperInstance?.autoplay.start();
    };

    if (swiperInstance?.el) {
      swiperInstance.el.addEventListener('mouseenter', handleMouseEnter);
      swiperInstance.el.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (swiperInstance?.el) {
        swiperInstance.el.removeEventListener('mouseenter', handleMouseEnter);
        swiperInstance.el.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <>
      <Swiper
        onSwiper={swiper => {
          swiperRef.current = swiper;
        }}
        modules={[Navigation, Pagination, A11y, Autoplay, HashNavigation]}
        navigation={{ nextEl: '.mySwiper-next', prevEl: '.mySwiper-prev' }}
        pagination={{ clickable: true, el: '.swiper-pagination' }}
        autoplay={{ delay: 2000 }}
        loop={true}
        className="mySwiper"
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 32,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 32,
          },
          1440: {
            slidesPerView: 5,
            spaceBetween: 32,
          },
        }}
        grabCursor={true}
      >
        <div className="swiper-wrapper">
          {data.map((team, index) => {
            const { name, position, img, link_telegram } = team;
            return (
              <SwiperSlide key={index} className="swiper-slide">
                <TeamCard
                  name={name}
                  position={position}
                  img={img}
                  link_telegram={link_telegram}
                />
              </SwiperSlide>
            );
          })}
        </div>
      </Swiper>

      <div className="flex justify-between w-full">
        <button className="mySwiper-prev">
          <SpriteSVG name="arrow-left" />
          Сюди
        </button>

        <div className="swiper-pagination"></div>

        <button className="mySwiper-next">
          Туди
          <SpriteSVG name="arrow-right" />
        </button>
      </div>
    </>
  );
}
