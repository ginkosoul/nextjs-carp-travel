"use client";
import { images } from "@constants";
import Image from "next/image";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";

function GallerySection() {
  const swiperRef = useRef(null);
  console.log("rendered gallery");

  //   useEffect(() => {}, []);

  return (
    <section
      id="gallery"
      className="bg-gallery-image min-h-screen bg-cover bg-center py-14 md:py-16 xl:py-[104px]"
    >
      <div className="container">
        <h2 className="title md:text-center xl:text-left uppercase mb-6 md:mb-[72px] xl:mb-6">
          Our <span className="font-medium">gallery</span>
        </h2>
        <Swiper
          className="hidden md:block gallerySwiper swiperMd"
          slidesPerView={"auto"}
          watchSlidesProgress={true}
          loopedSlides={3}
          loop={true}
          ref={swiperRef}
          modules={[EffectCoverflow]}
          centeredSlides={true}
          effect={"coverflow"}
          coverflowEffect={{
            rotate: 0,
            stretch: -300,
            depth: 1100,
            modifier: 1,
            slideShadows: false,
          }}
        >
          {images.map(({ id, srcset, alt }) => (
            <SwiperSlide key={id} className="mb-6 md:mb-0 bg-black">
              <Image
                src={srcset[2]}
                alt={alt}
                className="md:mb-0 w-[280px] h-[187px] md:w-[415px] md:h-[294px] xl:w-[606px] xl:h-[429px]"
                sizes="(min-width: 1280px) 607px, (min-width: 768px) 463px, 280px"
              />
              <div className="image-dark" />
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
          <button
            className="block absolute z-10 bottom-[17px] right-[calc(50%+228px)] xl:right-[calc(50%+324px)] xl:bottom-0 uppercase text-[33px]/[1] font-thin py-0"
            onClick={() => {
              swiperRef.current?.swiper.slidePrev();
            }}
          >
            back
          </button>
        </Swiper>
        <Swiper
          className="h-[609px] swiperSm gallerySwiper"
          direction="vertical"
          slidesPerView={3}
          // loopedSlides={3}
          spaceBetween={24}
          loop={true}
        >
          {images.map(({ id, srcset, alt }) => (
            <SwiperSlide key={id} className="">
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
