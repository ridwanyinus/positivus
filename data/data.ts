import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import assets from "@/public/assets";
import { StaticImageData } from "next/image";
export type NavItem = {
  name: string;
  link: string;
  img?: any;
};

export type ServicesList = {
  img: StaticImageData | string;
  heading: string;
  heading2: string;
  learn: string;
  bg: string;
  headingBg: string;
  textBg?: string;
};

export const navItems: NavItem[] = [
  { name: "About us", link: "/#about" },
  { name: "Services", link: "/#pricing" },
  { name: "Use Cases", link: "/#features" },
  { name: "Pricing", link: "/#footer" },
  { name: "Blog", link: "/#footer" },
];

export const companies = [{ img: assets.amazon }, { img: assets.dribble }, { img: assets.hubspot }, { img: assets.notion }, { img: assets.netflix }, { img: assets.zoom }];

export const services: ServicesList[] = [
  { heading: "Search engine", heading2: "optimization", learn: "Learn more", img: assets.searchEngine, bg: "#F3F3F3", headingBg: "bg-green", textBg: "text-black" },
  { heading: "Pay-per-click", heading2: "advertising", learn: "Learn more", img: assets.payPClick, bg: "#B9FF66", headingBg: "bg-white", textBg: "text-black" },
  { heading: "Social Media", heading2: "Marketing", learn: "Learn more", img: assets.socialMedia, bg: "#191A23", headingBg: "bg-white", textBg: "text-white" },
  { heading: "Email", heading2: "Marketing", learn: "Learn more", img: assets.mail, bg: "#F3F3F3", headingBg: "bg-green", textBg: "text-black" },
  { heading: "Content", heading2: "Creation", learn: "Learn more", img: assets.content, bg: "#B9FF66", headingBg: "bg-white", textBg: "text-black" },
  { heading: "Analytics and", heading2: "Tracking", learn: "Learn more", img: assets.analytic, bg: "#191A23", headingBg: "bg-green", textBg: "text-white" },
];

export const footer = [
  {
    title: "Company",
    links: [
      { name: "About us", link: "/" },
      { name: "Contact us", link: "/" },
      { name: "Careers", link: "/" },
      { name: "Press", link: "/" },
    ],
  },

  {
    title: "Product",
    links: [
      { name: "Features", link: "/" },
      { name: "Pricing", link: "/" },
      { name: "News", link: "/" },
      { name: "Help desk", link: "/" },
      { name: "Support", link: "/" },
    ],
  },

  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", link: "/" },
      { name: "Terms & Conditions", link: "/" },
      { name: "Return Policy", link: "/" },
    ],
  },
];

export const social = [{ image: FaTwitter }, { image: FaFacebook }, { image: FaLinkedin }, { image: FaInstagram }];
