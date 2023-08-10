"use client";
import Image from "next/image";
import "swiper/css";
import { EffectFade } from "swiper/modules";
import { slides } from "@constants/slides";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useState } from "react";

// some trick for tailwind:
// className="bg-s01-image bg-s02-image bg-s03-image bg-s04-image bg-s05-image"

// this must be inside of a component... because of static data we can allow this for performance matters
const titles = slides.map((e) => e.title);
const subTitles = slides.map((e) => e.subTitle);
const length = String(slides.length).padStart(2, "0");

export default function ServiceSection() {
  console.log("render Service", new Date().getTime());
  const [swiperInstance, setswiperInstance] = useState(null);

  return (
    <section id="services" className="relative">
      <Swiper
        modules={[EffectFade]}
        onSwiper={setswiperInstance}
        allowTouchMove={false}
        effect="fade"
        speed={1000}
        fadeEffect={{ crossFade: true }}
      >
        {slides.map(({ subTitle, desc, images, className: bg, title }, i) => (
          <SwiperSlide
            key={subTitle}
            className={`${bg} bg-cover bg-center  py-14 md:py-16 xl:py-[104px] min-h-screen`}
          >
            <div className="container">
              <div className="md:flex mb-4 md:mb-10 xl:mb-5 gap-1 md:gap-5 items-center">
                <h2 className="title uppercase mb-5 md:mb-0 md:w-[463px] xl:w-[607px]">
                  We <span className="font-medium">offer</span>
                </h2>
                <p className="title text-end">
                  {String(i + 1).padStart(2, "0")}/
                  <span className="opacity-20">{length}</span>
                </p>
              </div>
              <div className="md:flex md:gap-5">
                <Image
                  src={images[2]}
                  alt={title}
                  className="mb-3 md:mb-0 w-[280px] md:w-[463px] md:h-[370px] xl:w-[607px] xl:h-[429px]"
                  sizes="(min-width: 1280px) 607px, (min-width: 768px) 463px, 280px"
                />
                <div className="flex flex-col max-md:h-[380px] md:max-xl:h-[178px] max-xl:self-end justify-end xl:w-[332px] xl:ml-auto">
                  <p className="text-xs/6 font-extralight tracking-widest text-end md:text-start mb-auto xl:hidden">
                    {subTitle}
                  </p>
                  <div className="hidden xl:flex mb-auto h-60 flex-col justify-between">
                    {subTitles.map((e) => (
                      <p
                        key={e}
                        className={
                          e === subTitle
                            ? "text-xs/6 font-extralight tracking-[0.2em]"
                            : "text-xs/6 font-extralight tracking-[0.2em] mb-auto opacity-0"
                        }
                      >
                        {e}
                      </p>
                    ))}
                  </div>
                  <p className="text-[13px]/[20px] xl:text-lg/6 font-extralight flex items-end">
                    {desc}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <SlideList list={titles} swiper={swiperInstance} />
    </section>
  );
}

function SlideList({ list, swiper }) {
  const [currentId, setcurrentId] = useState(swiper?.activeIndex || 0);
  const handleClick = (id) => {
    swiper.slideTo(id);
    setcurrentId(id);
  };
  return (
    <div className="my-swiper flex flex-col items-start gap-4 xl:gap-6">
      {list.map((e, idx) => (
        <button
          key={e}
          className={`uppercase text-start font-extralight text-[20px]/[17px] md:text-[22px]/[18px] xl:text-[28px]/6 transition-[margin,color] ${
            idx === currentId
              ? "flex gap-2 items-center text-list font-medium before:w-1.5 before:h-1.5 before:rotate-45 before:bg-white cursor-pointer"
              : "opacity-50 hover:opacity-100 hover:ml-2 cursor-pointer"
          }`}
          onClick={() => {
            handleClick(idx);
          }}
        >
          {e}
        </button>
      ))}
    </div>
  );
}
