"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { Swiper as SwiperType } from "swiper/types";
import assets from "@/public/assets";
import Image from "next/image";
import { ArrowUpFromDot, CircleDot } from "lucide-react";

const MySwiper: React.FC = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };

  const slideNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const slidePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleSwiperSlideChange = (swiper: SwiperType) => {
    const normalizedIndex = swiper.realIndex % 5;
    setActiveIndex(normalizedIndex);
  };

  return (
    <div className="mt-8 small:mt-10 lg:mt-12 xl:mt-16 desktop:mt-20  overflow-hidden">
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={handleSwiperSlideChange}
        spaceBetween={"auto"}
        modules={[Autoplay]}
        slidesPerView={1}
        loop={true}
        breakpoints={{
          // Custom breakpoints for responsive design
          320: {
            centeredSlides: true,
            spaceBetween: 100,
            slidesPerView: 1.1,
          },
          365: {
            centeredSlides: true,
            spaceBetween: 300,
            slidesPerView: 1.2,
          },
          640: {
            slidesPerView: 1,
            centeredSlides: true,
            spaceBetween: 100,
          },
          1024: {
            slidesPerView: 2.2,
            centeredSlides: true,
            spaceBetween: 300,
          },
          1280: {
            slidesPerView: 2.3,
            centeredSlides: true,
            spaceBetween: 350,
          },
          1365: {
            slidesPerView: 2.5,
            centeredSlides: true,
            spaceBetween: 350,
          },
          1440: {
            slidesPerView: 2.5,
            centeredSlides: true,
            spaceBetween: 400,
          },
        }}>
        <SwiperSlide>
          <div className="bg-dark w-max h-max relative grid place-items-center place-content-center">
            <div className="w-[15rem] small:w-[19rem] md:w-[22rem] lg:w-[30rem] xl:w-[33rem] 2xl:w-auto">
              <Image src={assets.bubble} alt="testimonial message" className="h-56 small:h-48 md:h-56 lg:h-full max-md:object-fill " />
            </div>
            <p className="p text-white w-[12rem] small:w-[17rem] md:w-[19rem] lg:w-[25rem] xl:w-[28rem] desktop:max-w-[35.375rem] 2xl:w-[34rem] absolute bottom-11 small:bottom-10 md:bottom-11 lg:bottom-14 2xl:bottom-16 largesceen:bottom-16">
              &quot;We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional,
              responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.&quot;
            </p>
          </div>
          <div className="grid place-items-start  mt-2 lg:mt-4 ml-10 md:ml-12  largesceen:ml-16  w-full">
            <p className="p font-medium xl:text-lg desktop:text-xl text-green w-full">John Smith </p>
            <p className="text-xs lg:text-sm xl:text-base text-white w-full"> Marketing Director at XYZ Corp</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="bg-dark w-max h-max relative grid place-items-center place-content-center">
            <div className="w-[15rem] small:w-[19rem] md:w-[22rem] lg:w-[30rem] xl:w-[33rem] 2xl:w-auto">
              <Image src={assets.bubble} alt="testimonial message" className="h-56 small:h-48 md:h-56 lg:h-full max-md:object-fill " />
            </div>
            <p className="p text-white w-[12rem] small:w-[17rem] md:w-[19rem] lg:w-[25rem] xl:w-[28rem] desktop:max-w-[35.375rem] 2xl:w-[34rem] absolute bottom-11 small:bottom-10 md:bottom-11 lg:bottom-14 2xl:bottom-16 largesceen:bottom-16">
              &quot;We partnered with Positivus Solutions a few months ago, and the transformation has been remarkable. Their expertise in digital marketing has not only boosted our brand visibility
              but also led to sales. The team is dedicated, insightful, and always goes the extra mile to ensure our objectives are met.&quot;
            </p>
          </div>
          <div className="grid place-items-start  mt-2 lg:mt-4 ml-10 md:ml-12  largesceen:ml-16  w-full">
            <p className="p font-medium xl:text-lg desktop:text-xl text-green w-full">Michell Stark </p>
            <p className="text-xs lg:text-sm xl:text-base text-white w-full"> Director at Corp CDQ</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="bg-dark w-max h-max relative grid place-items-center place-content-center">
            <div className="w-[15rem] small:w-[19rem] md:w-[22rem] lg:w-[30rem] xl:w-[33rem] 2xl:w-auto">
              <Image src={assets.bubble} alt="testimonial message" className="h-56 small:h-48 md:h-56 lg:h-full max-md:object-fill " />
            </div>
            <p className="p text-white w-[12rem] small:w-[17rem] md:w-[19rem] lg:w-[25rem] xl:w-[28rem] desktop:max-w-[35.375rem] 2xl:w-[34rem] absolute bottom-11 small:bottom-10 md:bottom-11 lg:bottom-14 2xl:bottom-16 largesceen:bottom-16">
              &quot; We&apos;ve been collaborating with Positivus Strategies for over six months, and the results have been outstanding. Their innovative approach has significantly improved our online
              conversion rates and customer retention. The team is incredibly knowledgeable, responsive, and genuinely invested in our success. &quot;
            </p>
          </div>
          <div className="grid place-items-start  mt-2 lg:mt-4 ml-10 md:ml-12  largesceen:ml-16  w-full">
            <p className="p font-medium xl:text-lg desktop:text-xl text-green w-full">Ali Baba </p>
            <p className="text-xs lg:text-sm xl:text-base text-white w-full"> Senior Manager at Mark Agency</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="bg-dark w-max h-max relative grid place-items-center place-content-center">
            <div className="w-[15rem] small:w-[19rem] md:w-[22rem] lg:w-[30rem] xl:w-[33rem] 2xl:w-auto">
              <Image src={assets.bubble} alt="testimonial message" className="h-56 small:h-48 md:h-56 lg:h-full max-md:object-fill " />
            </div>
            <p className="p text-white w-[12rem] small:w-[17rem] md:w-[19rem] lg:w-[25rem] xl:w-[28rem] desktop:max-w-[35.375rem] 2xl:w-[34rem] absolute bottom-11 small:bottom-10 md:bottom-11 lg:bottom-14 2xl:bottom-16 largesceen:bottom-16">
              &quot;We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional,
              responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.&quot;
            </p>
          </div>
          <div className="grid place-items-start  mt-2 lg:mt-4 ml-10 md:ml-12  largesceen:ml-16  w-full">
            <p className="p font-medium xl:text-lg desktop:text-xl text-green w-full">David Zen </p>
            <p className="text-xs lg:text-sm xl:text-base text-white w-full"> Manager at NTA</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="bg-dark w-max h-max relative grid place-items-center place-content-center">
            <div className="w-[15rem] small:w-[19rem] md:w-[22rem] lg:w-[30rem] xl:w-[33rem] 2xl:w-auto">
              <Image src={assets.bubble} alt="testimonial message" className="h-56 small:h-48 md:h-56 lg:h-full max-md:object-fill " />
            </div>
            <p className="p text-white w-[12rem] small:w-[17rem] md:w-[19rem] lg:w-[25rem] xl:w-[28rem] desktop:max-w-[35.375rem] 2xl:w-[34rem] absolute bottom-11 small:bottom-10 md:bottom-11 lg:bottom-14 2xl:bottom-16 largesceen:bottom-16">
              &quot;We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional,
              responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.&quot;
            </p>
          </div>
          <div className="grid place-items-start  mt-2 lg:mt-4 ml-10 md:ml-12  largesceen:ml-16  w-full">
            <p className="p font-medium xl:text-lg desktop:text-xl text-green w-full">Johnson Ogbonna </p>
            <p className="text-xs lg:text-sm xl:text-base text-white w-full"> Information Manager at NTA</p>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="custom-navigation flex gap-x-12 xs:gap-x-16 small:gap-x-20 sm:gap-x-28 lg:gap-x-36 largesceen:gap-x-44 justify-center items-center mt-8 small:mt-10 sm:mt-16 md:mt-20 xl:mt-24 desktop:mt-28">
        <button onClick={slidePrev} className="navigation-button">
          <ArrowUpFromDot className="text-white -rotate-90 font-bold w-4 sm:w-5 lg:w-full" strokeWidth={3} />
        </button>

        <div className="flex gap-x-3">
          <button onClick={() => handleSlideChange(0)}>
            <CircleDot strokeWidth={3} className={`w-5 ${activeIndex === 0 ? "text-green" : "text-white"} w-3 sm:w-4 lg:w-full`} />
          </button>
          <button onClick={() => handleSlideChange(1)}>
            <CircleDot className={`w-5 ${activeIndex === 1 ? "text-green" : "text-white"} w-3 sm:w-4 lg:w-full`} strokeWidth={3} />
          </button>
          <button onClick={() => handleSlideChange(2)}>
            <CircleDot className={`w-5 ${activeIndex === 2 ? "text-green" : "text-white"} w-3 sm:w-4 lg:w-full`} strokeWidth={3} />
          </button>
          <button onClick={() => handleSlideChange(3)}>
            <CircleDot className={`w-5 ${activeIndex === 3 ? "text-green" : "text-white"} w-3 sm:w-4 lg:w-full`} strokeWidth={3} />
          </button>
          <button onClick={() => handleSlideChange(4)}>
            <CircleDot className={`w-5 ${activeIndex === 4 ? "text-green" : "text-white"} w-3 sm:w-4 lg:w-full`} strokeWidth={3} />
          </button>
        </div>

        <button onClick={slideNext} className="navigation-button">
          <ArrowUpFromDot className="text-white rotate-90 w-4 sm:w-5 lg:w-full" strokeWidth={3} />
        </button>
      </div>
    </div>
  );
};

export default MySwiper;
