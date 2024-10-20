'use client';
import React, { useEffect, useState, useRef, useCallback } from 'react';
import { cn } from '@/utils/cn';
import CardComponent from './CardComponent';
import { StaticImageData } from 'next/image';
import { getId } from '@/utils/helper';

interface InfiniteMovingCardsProps {
  items: {
    img: string | StaticImageData;
    name?: string;
    title?: string;
  }[];
  direction?: 'left' | 'right';
  speed?: 'fast' | 'normal' | 'slow';
  pauseOnHover?: boolean;
  className?: string;
}

const InfiniteMovingCards: React.FC<InfiniteMovingCardsProps> = ({ items, direction = 'left', speed = 'fast', pauseOnHover = true, className }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  const getDirection = useCallback(() => {
    if (containerRef.current) {
      containerRef.current.style.setProperty('--animation-direction', direction === 'left' ? 'forwards' : 'reverse');
    }
  }, [direction]);

  const getSpeed = useCallback(() => {
    if (containerRef.current) {
      containerRef.current.style.setProperty('--animation-duration', speed === 'fast' ? '20s' : speed === 'normal' ? '40s' : '80s');
    }
  }, [speed]);

  const addAnimation = useCallback(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current?.appendChild(duplicatedItem);
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }, [getDirection, getSpeed]);

  useEffect(() => {
    addAnimation();
  }, [addAnimation]);

  return (
    <div ref={containerRef} className={cn('scroller relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]', className)}>
      <ul ref={scrollerRef} className={cn('flex min-w-full shrink-0 gap-6 py-4 w-max flex-nowrap', start && 'animate-scroll', pauseOnHover && 'hover:[animation-play-state:paused]')}>
        {items.map((item) => (
          <li key={getId()}>
            <blockquote>
              <div aria-hidden='true' className='user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 md:h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]'></div>
              <CardComponent img={item.img} />
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InfiniteMovingCards;
