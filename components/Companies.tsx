import React from "react";
import Image from "next/image";
import { companies } from "@/data/data";
const Companies = () => {
  return (
    <main className="padding-x pt-5 sm:pt-10 lg:pt-20 pb-10">
      <div className="grid grid-cols-6 place-items-center">
        {companies.map((items, idx: number) => (
          <div key={idx}>
            <Image src={items.img} alt={items.img} className="" />
          </div>
        ))}
      </div>
    </main>
  );
};

export default Companies;
