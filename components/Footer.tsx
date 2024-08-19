"use client";
import React from "react";

import Link from "next/link";
import Image from "next/image";
import assets from "@/public/assets";
import { navItems, social } from "@/data/data";

const Footer = () => {
  return (
    <footer className="padding-x pt-16 lg:pt-28 desktop:pt-36 ">
      <section className="bg-dark rounded-t-2xl sm:rounded-t-3xl 2xl:rounded-t-[2rem] min-h-80 py-16 px-16">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image src={assets.footerLogo} alt="logo" />
          </Link>

          <div className="flex space-x-8 xl:space-x-12 items-center max-lg:hidden">
            {navItems.map((items, idx: number) => (
              <ul key={`link=${idx}`}>
                <li>
                  <Link href={items.link} className="text-white underline transition-all hover:font-medium hover:border-b border-green p  leading-normal">
                    {items.name}
                  </Link>
                </li>
              </ul>
            ))}
          </div>

          <div className="flex gap-x-3">
            {social.map((items, idx: number) => (
              <div key={idx}>
                <Link href="/">
                  <items.image className="text-white text-2xl hover:text-green" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        <section className="flex mt-16 justify-center gap-x-36">
          <div className="grid gap-y-5">
            <p className="text-xl label bg-green font-medium">Contact us:</p>
            <p className="p text-white">Email: info@positivus.com</p>
            <p className="p text-white">Phone: 555-567-8901</p>
            <p className="text-white p text-left ">
              Address: 1234 Main St <br /> Moonstone City, Stardust State 12345
            </p>
          </div>

          <div className="rounded-xl bg-[#292A32] flex-1 flex justify-center items-center gap-x-8">
            <div>
              <input placeholder="Email" type="email" className="bg-transparent w-full px-4 small:px-6 py-3 small:py-4 border border-white rounded-lg lg:rounded-xl input-p text-white" required />
            </div>

            <div className=" largesceen:min-w-[13.438rem]">
              <Link href="/" className="button subscribe text-black px-4 small:px-6 w-full">
                Subscribe to news
              </Link>
            </div>
          </div>
        </section>

        <div className="w-full h-[1px] bg-white my-14"></div>
        <div className="flex gap-x-12">
          <p className="p text-white">© 2023 Positivus. All Rights Reserved.</p>
          <p className="p text-white underline">Privacy Policy</p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
