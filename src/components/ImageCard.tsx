import React from 'react'
import Image from 'next/image'
import clsx from 'clsx'

type ImageCardProps = {
    src: string;
    alt: string;
    description?: string;
    text: string;
    link?: string;
    className?: string;
}

const ImageCard = ({
    src,
    alt,
    text,
    link,
    className
}: ImageCardProps) => {
  return (
    <section className="w-full flex flex-col space-y-8">
        <h3 className="capitalize text-[clamp(1rem,2vw,2rem)] font-antonio font-semibold">{text}</h3>
        <Image 
            src={src} 
            alt={alt} 
            width={300} 
            height={200} 
            className={clsx('', className )}>
        </Image>
        
    </section>
  )
}


export default ImageCard;