"use client";
import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { FaBarsStaggered } from "react-icons/fa6";
import Link from "next/link";
import { navItems } from "@/data/data";
import Image from "next/image";
import Logo from "@/public/Logo.svg";
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);
  return (
    <nav className={` pt-6 px-5 lg:px-[1.9rem] xl:px-10 desktop:px-12 fourk:px-60  w-full relative z-[999]  `}>
      <section className="flex justify-between items-center">
        <Link href="/" className="relative z-[999]">
          <Image src={Logo} alt="logo" />
        </Link>

        <div className="flex space-x-8 xl:space-x-12 items-center max-lg:hidden">
          {navItems.map((items, idx: number) => (
            <ul key={`link=${idx}`}>
              <li>
                <Link
                  href={items.link}
                  className="text-black opacity-100  hover:opacity-95 transition-all hover:border-b border-green text-sm xl:text-[0.938rem] tracking-[-0.1px] font-bold leading-normal text-right ${
                    ">
                  {items.name}
                </Link>
              </li>
            </ul>
          ))}

          <Link
            href="/"
            className="bg-red stick hover:bg-rose-700 transition-colors py-2 xl:py-3 px-4 xl:px-6 text-sm xl:text-base 2xl:text-[1.063rem]  text-black font-bold tracking-[-0.5px] rounded-lg ">
            Get Started Now
          </Link>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
