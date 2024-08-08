"use client";
import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { FaBarsStaggered } from "react-icons/fa6";
import Link from "next/link";
import { navItems } from "@/data/data";
import Image from "next/image";
import Logo from "@/public/logo.svg";
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
    <nav className={` pt-6 px-5 md:px-8 lg:px-10 xl:px-20 desktop:px-28 2xl:px-48 largesceen:px-60 fourk:px-[30rem] w-full relative z-[999]  `}>
      <section className="flex justify-between items-center">
        <Link href="/" className="relative z-[999]">
          <Image src={Logo} alt="logo" className="w-44  largesceen:w-auto" />
        </Link>

        <div className="flex space-x-8 xl:space-x-12 items-center max-lg:hidden">
          {navItems.map((items, idx: number) => (
            <ul key={`link=${idx}`}>
              <li>
                <Link
                  href={items.link}
                  className="text-black  transition-all hover:border-b border-green text-sm xl:text-[0.938rem] largesceen:text-xl  leading-normal text-right font-normal
                    ">
                  {items.name}
                </Link>
              </li>
            </ul>
          ))}

          <Link href="/" className="border border-dark transition-colors py-2 xl:py-3 px-4 xl:px-6 largesceen:px-8 text-sm xl:text-[0.938rem] largesceen:text-xl text-black rounded-xl hover:bg-green ">
            Request a quote
          </Link>
        </div>

        {/* Mobile navbar */}

        <div className="lg:hidden z-[995]">
          {toggleMenu ? (
            <IoClose size={30} onClick={() => setToggleMenu(false)} className="relative z-10 cursor-pointer text-dark" />
          ) : (
            <FaBarsStaggered size={30} onClick={() => setToggleMenu(true)} className="svg text-dark relative z-10 cursor-pointer" />
          )}

          {toggleMenu && (
            <div className="fixed top-0 right-0 w-[60%] sm:w-1/2 h-screen  overflow-hidden ">
              <div className="flex flex-col justify-start bg-green items-start w-full h-full pt-28 pl-4 sm:pl-0 sm:px-12 md:px-20 transition-transform transform scale-up-hor-right">
                {navItems.map((item, idx) => (
                  <ul key={idx} className="mb-4">
                    <li className="py-1">
                      <Link href={item.link} className="text-2xl sm:text-3xl transition-all text-center text-white font-semibold">
                        {item.name}
                      </Link>
                    </li>
                  </ul>
                ))}
                <div className="mt-5">
                  <Link href="/" className="border border-dark transition-colors py-2 px-4 text-xs sm:text-sm  text-black  ">
                    Request a quote
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
