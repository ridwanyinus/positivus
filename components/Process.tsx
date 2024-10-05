'use client';
import React, { useEffect } from 'react';
import AOS from 'aos';
import { process } from '@/lib/content/process';
import assets from '@/public/assets';
import Image from 'next/image';
import { aosConfig } from '@/styles/animation/anim';
const Process = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <main {...aosConfig} className='padding-x  pt-16 lg:pt-28 desktop:pt-36'>
      <div className='flex flex-col small:flex-row gap-x-5 small:gap-x-8 sm:gap-x-10 items-center'>
        <h2 className='heading label'>Our Working Process </h2>
        <p className='heading-sm w-[16rem]'>Step-by-Step Guide to Achieving Your Business Goals</p>
      </div>

      <section className='mt-8 sm:mt-12 xl:mt-16 grid place-items-center gap-y-6 sm:gap-y-10'>
        {process.map((items, idx: number) => (
          <div
            {...aosConfig}
            key={idx}
            className='bg-gray border border-dark card-shadow w-full small:w-[90%] 2xl:w-[80%] rounded-2xl sm:rounded-3xl 2xl:rounded-[2rem] min-h-20 px-4 sm:px-8 md:px-12 lg:px-20 py-4 sm:py-6 2xl:py-5 largesceen:py-8'>
            <details className='group [&_summary::-webkit-details-marker]:hidden '>
              <summary className='flex justify-between items-center'>
                <div className='flex justify-center items-center gap-x-1 small:gap-x-2 sm:gap-x-4 md:gap-x-4 lg:gap-x-6'>
                  <p className='text-2xl small:text-3xl sm:text-4xl xl:text-5xl 2xl:text-6xl font-medium'>{items.num}</p>
                  <p className='text-sm small:text-base sm:text-lg xl:text-3xl font-medium'>{items.heading}</p>
                </div>

                <span className='cursor-pointer  transition-all ease-in-out w-5 small:w-7 sm:w-9 lg:w-10 xl:w-auto'>
                  <Image src={assets.plus} alt='plus' className='group-open:hidden' />
                  <Image src={assets.minus} alt='minus' className='group-open:block hidden' />
                </span>
              </summary>

              <div className='mt-6'>
                <p className='p rounded-lg bg-green p-4 '>{items.text}</p>
              </div>
            </details>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Process;
