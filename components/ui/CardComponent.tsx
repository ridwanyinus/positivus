"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";

interface CardComponentProps {
  img: string | StaticImageData;
}

const CardComponent: React.FC<CardComponentProps> = ({ img }) => {
  return <Image src={img} alt="companies" className="object-contain  lg:w-full lg:min-h-12" />;
};

export default CardComponent;
