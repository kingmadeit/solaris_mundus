import React from 'react'
import { ImageCard } from "@/components";
import { PortfolioItem } from '@/types/types';
import { portfolioItems } from '@/lib/data';

type PortfolioShowcaseProps = {
  className?: string;
  items: PortfolioItem[];
};

const PortfolioShowcase = ({className, items = portfolioItems}: PortfolioShowcaseProps) => {
  return (
    <section className={`w-full flex space-y-8 ${className}`}>
        {!items.length && <p className='text-2xl font-bold text-gray-700'>No portfolio items available.</p> }
        {items && items.map(({id, image, title, link}) => (
          <ImageCard
            key={id}
            src={image}
            alt={title}
            text={title}
            link={link}
            className="w-full max-w-xl"
          />
          ))
        }
    </section>
  )
}

export default PortfolioShowcase