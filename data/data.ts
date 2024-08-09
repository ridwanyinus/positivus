import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import assets from "@/public/assets";

export type NavItem = {
  name: string;
  link: string;
  img?: any;
};

export const navItems: NavItem[] = [
  { name: "About us", link: "/#about" },
  { name: "Services", link: "/#pricing" },
  { name: "Use Cases", link: "/#features" },
  { name: "Pricing", link: "/#footer" },
  { name: "Blog", link: "/#footer" },
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
