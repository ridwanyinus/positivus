'use client';
import React, { useEffect } from 'react';
import AOS from 'aos';
import { caseStudies } from '@/data/data';
import Link from 'next/link';
import { FaLocationArrow } from 'react-icons/fa6';
import { aosConfig } from '@/styles/animation/anim';
const CaseStudies = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <main {...aosConfig} id='case' className='padding-x pt-8 md:pt-16 lg:pt-28 desktop:pt-36'>
      <div className='flex flex-col small:flex-row gap-x-5 small:gap-x-8 sm:gap-x-10 items-center'>
        <h2 className='heading label'>Case Studies</h2>
        <p className='heading-sm w-[16rem]'>Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies</p>
      </div>

      <section className='mt-8 md:mt-12 lg:mt-20  lg:rounded-[2.813rem] gap-x-4 lg:gap-x-0 lg:bg-dark grid sm:grid-cols-3 place-items-center lg:p-6 lg:py-10 xl:py-12 space-y-6 sm:space-y-0'>
        {caseStudies.map((items, idx: number) => (
          <div key={idx} className='flex flex-col justify-between relative  items-start h-[10.5rem] md:h-[12.5rem] lg:h-full w-fit sm:w-full bg-dark rounded-xl lg:rounded-none p-4  lg:p-0'>
            <div className='flex items-center justify-start h-full w-full '>
              <div className={`${items.line} w-[1px] h-[11.625rem] lg:mr-8 xl:mr-14 desktop:mr-16 fourk:mr-20 hidden lg:block`}></div>
              <p className='p text-white  w-[15rem] 2xl:w-[17.875rem] mb-4 xl:mb-8'>{items.text}</p>
            </div>
            <Link href='/' className='flex gap-x-2  items-center hover:*:opacity-90 lg:absolute bottom-0 xl:-bottom-4 lg:left-8 xl:left-14 desktop:left-16 fourk:left-20'>
              <p className={`text-sm  xl:text-lg 2xl:text-xl font-normal leading-[140%] text-green`}>{items.learn}</p>
              <FaLocationArrow className={`text-green `} />
            </Link>
          </div>
        ))}
      </section>
    </main>
  );
};

export default CaseStudies;
