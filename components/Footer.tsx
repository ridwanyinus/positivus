'use client';
import React, { useEffect } from 'react';
import AOS from 'aos';
import Link from 'next/link';
import Image from 'next/image';
import assets from '@/public/assets';
import { navItems } from '@/lib/content/navbar';
import { social } from '@/lib/content/social';
import { aosConfig } from '@/styles/animation/anim';
import { getId } from '@/utils/helper';

const Footer = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <footer {...aosConfig} className='padding-x pt-16 lg:pt-28 desktop:pt-36 '>
      <section className='bg-dark rounded-t-2xl sm:rounded-t-3xl 2xl:rounded-t-[2rem] min-h-80 py-8 md:py-10 lg:py-16 px-6 md:px-10 lg:px-16'>
        <div className='flex justify-between items-center'>
          <Link href='/'>
            <Image src={assets.footerLogo} alt='logo' className='w-28  xl:w-44' />
          </Link>

          <div className='flex space-x-8 xl:space-x-12 items-center max-lg:hidden'>
            {navItems.map((items) => (
              <ul key={getId()}>
                <li>
                  <Link href={items.link} className='text-white  transition-all hover:font-medium hover:border-b border-green p  leading-normal'>
                    {items.name}
                  </Link>
                </li>
              </ul>
            ))}
          </div>

          <div className='flex gap-x-3'>
            {social.map((items) => (
              <div key={getId()}>
                <Link href='/'>
                  <items.icon className='text-white text-xl lg:text-2xl hover:text-green' />
                </Link>
              </div>
            ))}
          </div>
        </div>

        <section className='flex flex-col sm:flex-row mt-16 justify-center gap-x-12 md:gap-x-16 lg:gap-x-36'>
          <div className='grid gap-y-5 place-items-center sm:place-items-start'>
            <p className='text-base md:text-lg lg:text-xl label bg-green font-medium'>Contact us:</p>
            <p className='p text-white'>Email: info@positivus.com</p>
            <p className='p text-white'>Phone: 555-567-8901</p>
            <p className='text-white p text-center sm:text-left '>
              Address: 1234 Main St <br /> Moonstone City, Stardust State 12345
            </p>
          </div>

          <div className='rounded-xl bg-[#292A32] flex-1 flex  flex-col xl:flex-row justify-center items-center gap-x-16 lg:gap-x-8 py-8 sm:py-0 mt-8 sm:mt-0'>
            <div>
              <input
                placeholder='Email'
                type='email'
                className='bg-transparent w-52 xs:w-64 sm:w-52 md:w-60 lg:min-w-80 xl:w-full px-3 lg:px-6 py-2 lg:py-3 desktop:py-4 border border-white rounded-lg lg:rounded-xl input-p text-white'
                required
              />
            </div>

            <div className='mt-8 xl:mt-0 largesceen:min-w-[13.438rem]'>
              <Link href='/' className='py-2 lg:py-3 xl:py-4 desktop:py-5 rounded-lg hover:bg-gray lg:rounded-xl bg-green text-black px-4 small:px-6  min-w-[16rem] text-sm lg:text-base'>
                Subscribe to news
              </Link>
            </div>
          </div>
        </section>

        <div className='w-full h-[1px] bg-white my-8 md:my-10 lg:my-14'></div>
        <div className='flex gap-x-12 flex-col sm:flex-row'>
          <p className='p text-white text-center'>
            © 2024 Positivus. All Rights Reserved. <br className='block small:hidden' /> Designed & Built by <Link href='https://ridwanyinus.is-a.dev/'>Ridwan</Link>
          </p>
          <p className='p text-white underline text-center'>Privacy Policy</p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
