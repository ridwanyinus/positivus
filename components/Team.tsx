import { team } from "@/data/data";
import React from "react";
import Image from "next/image";
import Link from "next/link";
const Team = () => {
  return (
    <main className="padding-x  pt-16 lg:pt-28 desktop:pt-36 ">
      <div className="flex flex-col small:flex-row gap-x-5 small:gap-x-8 sm:gap-x-10 items-center">
        <h2 className="heading label">Team</h2>
        <p className="heading-sm w-[16rem]">Meet the skilled and experienced team behind our successful digital marketing strategies</p>
      </div>
      <section className="mt-8 sm:mt-12 xl:mt-16 grid small:grid-cols-2 md:grid-cols-3 place-items-center gap-6 small:gap-4 lg:gap-10">
        {team.map((item, idx: number) => (
          <div
            key={idx}
            className="bg-gray flex flex-col justify-center border border-dark card-shadow rounded-2xl sm:rounded-3xl 2xl:rounded-[2rem] px-3 md:px-2 lg:px-4 xl:px-8 desktop:px-10 py-2 xl:py-3 2xl:py-6 largesceen:py-0 w-[80%] small:w-auto min-h-40 small:min-h-44  md:min-h-60 xl:min-h-72 desktop:min-h-[20.625rem]">
            <div className="flex items-end gap-x-2 lg:gap-x-4">
              <Image alt={item.title} src={item.img} className="w-10 sm:w-14 lg:w-20 desktop:w-[6.688rem] h-auto" />

              <div>
                <p className="p font-medium xl:text-lg desktop:text-xl">{item.name}</p>
                <p className="text-xs lg:text-sm xl:text-base">{item.title}</p>
              </div>
            </div>
            <div className={`w-full h-[1px] bg-dark my-2 lg:my-3 xl:my-6 2xl:my-8`}></div>
            <p className="p">{item.experience}</p>
          </div>
        ))}
      </section>
      <div className="flex justify-end items-end w-full mt-6 lg:mt-8 2xl:mt-12">
        <Link href="/" className="button w-fit min-w-36 lg:min-w-52 xl:min-w-60 desktop:min-w-72 fourk:min-w-80">
          See all team
        </Link>
      </div>
    </main>
  );
};

export default Team;
