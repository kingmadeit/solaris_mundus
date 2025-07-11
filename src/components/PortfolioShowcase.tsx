import React from 'react'
import { portfolioItems } from "@/lib/data";
import { ImageCard } from "@/components";

const PortfolioShowcase = () => {
  return (
    <section className='w-full flex flex-col space-y-8 min-h-screen bg-cyan-100'>
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