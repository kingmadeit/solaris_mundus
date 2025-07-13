import React from 'react'
import { portfolioItems } from "@/lib/data";
import { ImageCard } from "@/components";

type PortfolioShowcaseProps = {
  className?: string;
};

const PortfolioShowcase = ({className}: PortfolioShowcaseProps) => {
  return (
    <section className={`w-full flex space-y-8 min-h-screen ${className}`}>
        {!portfolioItems.length && <p className='text-2xl font-bold text-gray-700'>No portfolio items available.</p> }
        {portfolioItems && portfolioItems.map(({id, image, title, link}) => (
        <ImageCard
            key={id}
            src={image}
            alt={title}
            text={title}
            link={link}
            className="mb-8 w-full max-w-md" />
        ))}

    </section>
  )
}

export default PortfolioShowcase