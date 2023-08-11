"use client";
import { images } from "@constants";
import Image from "next/image";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper/modules";

function GallerySection() {
  const swiperRef = useRef(null);

  //   useEffect(() => {}, []);

  return (
    <section
      id="gallery"
      className="bg-gallery-image min-h-screen bg-cover bg-center py-14 md:py-16 xl:py-[104px]"
    >
      <div className="container">
        <h2 className="title uppercase mb-6 md:mb-[72px] xl:mb-6">
          Our <span className="font-medium">gallery</span>
        </h2>
        <Swiper
          className="hidden md:block gallerySwiper swiperMd"
          slidesPerView={"auto"}
          loop={true}
          ref={swiperRef}
          modules={[Navigation, EffectCoverflow]}
          centeredSlides={true}
          effect={"coverflow"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 1800,
            modifier: 1,
            slideShadows: true,
            scale: 1,
          }}
        >
          {images.map(({ id, srcset, alt }) => (
            <SwiperSlide key={id} className="mb-6 md:mb-0">
              <Image
                src={srcset[2]}
                alt={alt}
                className="md:mb-0 w-[280px] h-[187px] md:w-[415px] md:h-[294px] xl:w-[606px] xl:h-[429px]"
                sizes="(min-width: 1280px) 607px, (min-width: 768px) 463px, 280px"
              />
            </SwiperSlide>
          ))}
          <button
            className="block absolute z-10 bottom-[17px] left-[calc(50%+228px)] xl:left-[calc(50%+324px)] xl:bottom-0 uppercase text-[33px]/[1] font-thin py-0"
            onClick={() => {
              swiperRef.current?.swiper.slideNext();
            }}
          >
            next
          </button>
          <div
            className="block absolute z-10 bottom-[17px] right-[calc(50%+228px)] xl:right-[calc(50%+324px)] xl:bottom-0 uppercase text-[33px]/[1] font-thin py-0"
            onClick={(e) => {
              swiperRef.current?.swiper.slidePrev();
            }}
          >
            prev
          </div>
        </Swiper>
        <Swiper
          className="max-h-[888px] swiperSm gallerySwiper"
          direction="vertical"
          slidesPerView={3}
          loop={true}
        >
          {images.map(({ id, srcset, alt }) => (
            <SwiperSlide key={id} className="mb-6 md:mb-0">
              <Image
                src={srcset[2]}
                alt={alt}
                className="md:mb-0 w-[280px]"
                sizes="(min-width: 1280px) 607px, (min-width: 768px) 463px, 280px"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default GallerySection;
