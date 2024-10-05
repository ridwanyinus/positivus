import { ServicesListType } from '../types/sections';
import assets from '@/public/assets';

export const services: ServicesListType[] = [
  { heading: 'Search engine', heading2: 'optimization', learn: 'Learn more', img: assets.searchEngine, bg: '#F3F3F3', headingBg: 'bg-green', textBg: 'text-black' },
  { heading: 'Pay-per-click', heading2: 'advertising', learn: 'Learn more', img: assets.payPClick, bg: '#B9FF66', headingBg: 'bg-white', textBg: 'text-black' },
  { heading: 'Social Media', heading2: 'Marketing', learn: 'Learn more', img: assets.socialMedia, bg: '#191A23', headingBg: 'bg-white', textBg: 'text-white' },
  { heading: 'Email', heading2: 'Marketing', learn: 'Learn more', img: assets.mail, bg: '#F3F3F3', headingBg: 'bg-green', textBg: 'text-black' },
  { heading: 'Content', heading2: 'Creation', learn: 'Learn more', img: assets.content, bg: '#B9FF66', headingBg: 'bg-white', textBg: 'text-black' },
  { heading: 'Analytics and', heading2: 'Tracking', learn: 'Learn more', img: assets.analytic, bg: '#191A23', headingBg: 'bg-green', textBg: 'text-white' },
];
