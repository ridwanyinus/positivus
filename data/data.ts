import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import assets from "@/public/assets";
import { StaticImageData } from "next/image";
import { IconType } from "react-icons";

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

export const caseStudies = [
  {
    text: "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",

    learn: "Learn more",
  },
  {
    line: "bg-white",
    text: "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",

    learn: "Learn more",
  },
  {
    line: "bg-white",
    text: "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",

    learn: "Learn more",
  },
];

export const process = [
  {
    num: "01",
    heading: "Consultation",
    line: "bg-black",
    text: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },

  {
    num: "02",
    heading: "Research & Strategy Development",
    line: "bg-black",
    text: "We will conduct thorough research on your industry, competitors, and target market. Based on this analysis, we'll develop a strategic plan tailored to achieving your business goals and maximizing your marketing efforts.",
  },

  {
    num: "03",
    heading: "Implementation",
    line: "bg-black",
    text: " We will execute the developed strategy by deploying customized marketing campaigns, optimizing your online presence, and tracking performance. Our team will ensure that all efforts align with your business objectives for optimal results.",
  },

  {
    num: "04",
    heading: "Monitoring & Optimization",
    line: "bg-black",
    text: "We will continuously monitor the performance of your campaigns, making data-driven adjustments to enhance effectiveness. Our ongoing optimization ensures that your marketing efforts remain aligned with your goals and yield the best possible outcomes",
  },

  {
    num: "05",
    heading: "Reporting & Communication",
    line: "bg-black",
    text: "Our Reporting and Communication process ensures that you are consistently informed about project progress and outcomes.",
  },

  {
    num: "06",
    heading: "Continual Improvement",
    line: "bg-black",
    text: "Our Continual Improvement process is designed to ensure that we are always enhancing our services, processes, and outcomes.",
  },
];

export const team = [
  {
    name: "John Smith",
    title: "CEO and Founder",
    experience: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
    img: assets.team1,
    icon: assets.teamLinkedIn,
  },

  {
    name: "Jane Doe",
    title: "Director of Operations",
    experience: "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
    img: assets.team2,
    icon: assets.teamLinkedIn,
  },

  {
    name: "Michael Brown",
    title: "Senior SEO Specialist",
    experience: "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
    img: assets.team3,
    icon: assets.teamLinkedIn,
  },

  {
    name: "Emily Johnson",
    title: "PPC Manager",
    experience: "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
    img: assets.team4,
    icon: assets.teamLinkedIn,
  },

  {
    name: "Brian Williams",
    title: "Social Media Specialist",
    experience: "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
    img: assets.team5,
    icon: assets.teamLinkedIn,
  },

  {
    name: "Sarah Kim",
    title: "Content Creator",
    experience: "2+ years of experience in writing and editing Skilled in creating compelling, SEO-optimized content for various industries",
    img: assets.team6,
    icon: assets.teamLinkedIn,
  },
];

export const testimonials = [
  {
    name: "John Smith",
    role: "Marketing Director at XYZ Corp",
    testimonial:
      " 'We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.' ",
  },
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

export const social = [{ image: FaTwitter }, { image: FaFacebook }, { image: FaLinkedin }];
