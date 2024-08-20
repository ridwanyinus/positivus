import Link from "next/link";
import React from "react";
import assets from "@/public/assets";
import Image from "next/image";
const Hero = () => {
  return (
    <main className="padding-x pt-20 pb-12 flex flex-col lg:flex-row items-center justify-center lg:justify-between" id="hero">
      <section className="mb-12 lg:mb-0">
        <h1 className="text-black font-medium text-center small:text-start text-4xl  sm:text-5xl text-[3.2rem] leading-[1.2] xl:leading-[1.4] desktop:leading-normal desktop:text-6xl block max-small:mx-auto w-[21rem]  small:w-[23rem] sm:w-[30rem] desktop:w-[33.2rem]">
          Navigating the digital landscape for success
        </h1>
        <p className="block max-small:mx-auto text-center small:text-start text-sm  small:text-base xl:text-lg desktop:text-xl text-black leading-[140%] w-[90%] small:w-[22.2rem] xl:w-[28.5rem] desktop:w-[34rem] 2xl:w-[31.125rem] my-4 xl:my-6 desktop:my-8">
          Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
        </p>
        <Link
          href="/"
          className="max-small:mx-auto transition-colors py-3 xl:py-5 px-4 xl:px-8 largesceen:px-8 text-sm xl:text-[0.938rem] largesceen:text-xl text-white text-center rounded-md desktop:rounded-xl bg-dark hover:bg-black mt-8 w-fit block ">
          Book a consultation
        </Link>
      </section>

      <section>
        <Image src={assets.hero} alt="illustration" className="w-[20rem] sm:w-[25rem] xl:w-[30rem]  desktop:w-[33rem] 2xl:w-[37.5rem] h-auto xl:h-full desktop:h-auto" />
      </section>
    </main>
  );
};

export default Hero;
