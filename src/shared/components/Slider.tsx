import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import { CardTeam } from '../../modules/ourTeams/components';

type DataTypeProps = {
  name: string;
  position: string;
  img: string;
  link_telegram: string;
};

export default function Slider({ data }: { data: DataTypeProps[] }) {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        navigation={{ nextEl: '.mySwiper-next', prevEl: '.mySwiper-prev' }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        className="mySwiper"
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 24,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 2,
            spaceBetween: 16,
          },
          // when window width is >= 1440px
          1440: {
            slidesPerView: 4,
            spaceBetween: 24,
          },
        }}
      >
        <div className="swiper-wrapper">
          {data.map((team, index) => {
            const { name, position, img, link_telegram } = team;
            return (
              <SwiperSlide key={index} className="swiper-slide">
                <CardTeam
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

      <div>
        {/* <ButtonAllAds pageLink={pageLink}>
        <div className="hidden gap-3 md:flex"> */}
        <button className="mySwiper-prev">
          {/* <SpriteSVG name="slider-prev" /> */}
        </button>
        <button className="mySwiper-next">
          {/* <SpriteSVG name="slider-next" /> */}
        </button>
        {/* </div>
      </ButtonAllAds> */}
      </div>
    </>
  );
}
