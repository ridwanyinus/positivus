'use client';
import React, { useEffect } from 'react';
import AOS from 'aos';
import Link from 'next/link';
import assets from '@/public/assets';
import Image from 'next/image';
import { aosConfig } from '@/styles/animation/anim';
const Cta = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <main {...aosConfig} className='padding-x md:pt-16 lg:pt-28 '>
      <section className='rounded-3xl  md:rounded-[2.813rem] bg-gray grid lg:grid-cols-2 place-items-center relative max-xs:p-6 py-10 xl:py-16'>
        <div>
          <h3 className='h3'>Let’s make things happen</h3>
          <p className='p  xs:w-[18rem] small:w-[22rem] sm:w-[25rem] xl:w-[28rem] desktop:w-[31.25rem] mt-4'>
            Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.
          </p>

          <Link href='/' className='button mt-8 block w-fit '>
            Get your free proposal
          </Link>
        </div>

        <div className='max-lg:mt-12 ml-8 xs:ml-12 small:ml-20 lg:ml-0 lg:absolute right-0 xl:-right-6 desktop:right-0 2xl:right-10 fourk:right-12 small:w-80 md:w-[25rem] lg:w-[23.438rem] xl:w-auto hidden md:block'>
          <Image src={assets.cta} alt='cta' className='' />
        </div>
      </section>
    </main>
  );
};

export default Cta;
