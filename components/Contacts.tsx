import React from "react";
import Image from "next/image";
import assets from "@/public/assets";
import Form from "./ui/Form";
const Contacts = () => {
  return (
    <main className="padding-x pt-16 lg:pt-28 desktop:pt-36 overflow-hidden">
      <div className="flex flex-col small:flex-row gap-x-5 small:gap-x-8 sm:gap-x-10 items-center">
        <h2 className="heading label">Contact Us</h2>
        <p className="heading-sm xl:w-80">Connect with Us: Let&apos;s Discuss Your Digital Marketing Needs</p>
      </div>

      <section className="bg-gray rounded-2xl sm:rounded-3xl 2xl:rounded-[2rem] py-12 lg:pl-12 2xl:pl-6 mt-8 sm:mt-12 xl:mt-16 grid lg:grid-cols-2 small:place-items-center relative overflow-hidden">
        <div>
          <Form />
        </div>
        <div className="absolute -right-60 xl:-right-72 desktop:-right-80 hidden lg:block lg:w-[32rem] xl:w-[38rem]  desktop:w-auto">
          <Image src={assets.contactIllustration} alt="contactIllustration" />
        </div>
      </section>
    </main>
  );
};

export default Contacts;
