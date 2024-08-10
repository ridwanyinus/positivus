import React from "react";
import Image from "next/image";
import { services } from "@/data/data";
import { FaLocationArrow } from "react-icons/fa6";
import Link from "next/link";
const Services = () => {
  return (
    <main className="padding-x pt-10 lg:pt-20 pb-10">
      <div className="flex flex-col small:flex-row gap-x-5 small:gap-x-8 sm:gap-x-10 items-center">
        <h2 className="heading label">Services</h2>
        <p className="heading-sm ">At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:</p>
      </div>

      <section className="grid grid-cols-2  place-items-center mt-16 gap-y-10 desktop:gap-10">
        {services.map((items, idx: number) => (
          <div
            key={idx}
            style={{ backgroundColor: items.bg }}
            className={`w-[32rem] desktop:w-[35rem] largesceen:w-[37.5rem] h-[18.125rem] flex justify-between items-center border border-dark rounded-[2.813rem] card-shadow p-8 desktop:p-10 `}>
            <div className="flex flex-col justify-between gap-y-16 ">
              <div>
                <h3 className={`${items.headingBg} label font-medium text-3xl `}>{items.heading}</h3>
                <h3 className={`${items.headingBg} label font-medium text-3xl`}>{items.heading2}</h3>
              </div>
              <Link href="/" className="flex gap-x-2  items-center">
                <p className={`text-lg 2xl:text-xl font-normal leading-[140%] ${items.textBg}`}>{items.learn}</p>
                <FaLocationArrow className={`${items.textBg}`} />
              </Link>
            </div>
            <div>
              <Image src={items.img} alt={items.heading} />
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Services;
