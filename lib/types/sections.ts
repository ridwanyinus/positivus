import { IconType } from 'react-icons';
import { StaticImageData } from 'next/image';

export type NavItem = {
  name: string;
  link: string;
  img?: any;
};

export type socialType = {
  icon: IconType;
};

export type companiesType = {
  img: string;
};

export type ServicesListType = {
  img: StaticImageData | string;
  heading: string;
  heading2: string;
  learn: string;
  bg: string;
  headingBg: string;
  textBg?: string;
  aos?: string;
};

export interface caseStudiesType {
  text: string;
  learn: string;
  line?: string;
}

export interface processType {
  num: string;
  heading: string;
  line: string;
  text: string;
}

export interface teamType {
  name: string;
  title: string;
  experience: string;
  img: StaticImageData;
  icon: string;
}
