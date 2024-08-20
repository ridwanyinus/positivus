"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import Image from "next/image";
import { services } from "@/data/data";
import { FaLocationArrow } from "react-icons/fa6";
import Link from "next/link";
const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 400,
      easing: "ease",
    });
  }, []);
  return (
    <main data-aos="fade-up" data-aos-delay="0" data-aos-offset="150" data-aos-easing="ease-in-sine" data-aos-duration="350" id="services" className="padding-x pt-10 lg:pt-20 pb-10">
      <div className="flex flex-col small:flex-row gap-x-5 small:gap-x-8 sm:gap-x-10 items-center">
        <h2 className="heading label">Services</h2>
        <p className="heading-sm w-[80%]">At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:</p>
      </div>

      <section className="grid lg:grid-cols-2  place-items-center mt-12 sm:mt-16 gap-y-8 small:gap-y-10 desktop:gap-10">
        {services.map((items, idx: number) => (
          <div
            key={idx}
            style={{ backgroundColor: items.bg }}
            className={`w-72 xs:w-80 small:w-[23rem] sm:w-[27rem] xl:w-[32rem] desktop:w-[35rem] largesceen:w-[37.5rem]  sm:h-[14rem] xl:h-[18.125rem] flex justify-between items-center border border-dark rounded-[1.5rem] xs:rounded-[2rem] small:rounded-[2.813rem] card-shadow p-5 xs:p-8 sm:p-8 desktop:p-10 `}>
            <div className="flex flex-col justify-between gap-y-10 small:gap-y-16 ">
              <div>
                <h3 className={`${items.headingBg} label font-medium h3 `}>{items.heading}</h3>
                <h3 className={`${items.headingBg} label font-medium h3`}>{items.heading2}</h3>
              </div>
              <Link href="/" className="flex gap-x-2  items-center">
                <p className={`text-sm sm:text-base lg:text-lg 2xl:text-xl font-normal leading-[140%] ${items.textBg}`}>{items.learn}</p>
                <FaLocationArrow className={`${items.textBg}`} />
              </Link>
            </div>
            <div className="w-24 small:w-32 sm:w-40 xl:w-auto xl:h-auto">
              <Image src={items.img} alt={items.heading} />
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Services;
