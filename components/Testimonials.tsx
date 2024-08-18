import React from "react";
import Image from "next/image";
import { testimonials } from "@/data/data";
import MySwiper from "./ui/Swiper";

const Testimonials = () => {
  return (
    <main className="padding-x pt-16 lg:pt-28 desktop:pt-36 flex flex-col justify-center  w-full pb-20 overflow-hidden">
      <div className="flex flex-col small:flex-row gap-x-5 small:gap-x-8 sm:gap-x-10 items-center">
        <h2 className="heading label">Testimonials</h2>
        <p className="heading-sm w-[16rem]">Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services</p>
      </div>

      <section className="bg-dark rounded-2xl sm:rounded-3xl 2xl:rounded-[2rem] min-h-[24rem] small:min-h-[22rem] sm:min-h-[25rem] md:min-h-[28rem] lg:min-h-[30rem] xl:min-h-[35rem] 2xl:min-h-[37rem]  mt-8 sm:mt-12 xl:mt-16 overflow-hidden">
        <MySwiper />
      </section>
    </main>
  );
};

export default Testimonials;
