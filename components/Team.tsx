import { team } from "@/data/data";
import React from "react";
import Image from "next/image";
const Team = () => {
  return (
    <main className="padding-x  pt-16 lg:pt-28 desktop:pt-36">
      <div className="flex flex-col small:flex-row gap-x-5 small:gap-x-8 sm:gap-x-10 items-center">
        <h2 className="heading label">Team</h2>
        <p className="heading-sm w-[16rem]">Meet the skilled and experienced team behind our successful digital marketing strategies</p>
      </div>
      <section className="mt-8 sm:mt-12 xl:mt-16 grid grid-cols-3 place-items-center gap-6 sm:gap-10">
        {team.map((item, idx: number) => (
          <div
            key={idx}
            className="bg-gray flex flex-col justify-center border border-dark card-shadow rounded-2xl sm:rounded-3xl 2xl:rounded-[2rem] px-4 sm:px-8 md:px-8 desktop:px-10 py-2 sm:py-3 2xl:py-6 largesceen:py-0 min-h-[18rem] desktop:min-h-[20.625rem]">
            <div className="flex items-end gap-x-4">
              <Image alt={item.title} src={item.img} className="w-20 desktop:w-[6.688rem] h-auto" />
              <div>
                <p className="p font-medium xl:text-lg desktop:text-xl">{item.name}</p>
                <p className="text-base">{item.title}</p>
              </div>
            </div>
            <div className={`w-full h-[1px] bg-dark my-2 lg:my-3 xl:my-6 2xl:my-8`}></div>
            <p className="p">{item.experience}</p>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Team;
