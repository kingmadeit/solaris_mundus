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
        <h3 className="capitalized text-lg font-semibold">{text}</h3>
        <Image 
            src={src} 
            alt={alt} 
            width={300} 
            height={200} 
            className={clsx('rounded-lg shadow-md', className )}>
        </Image>
        
    </section>
  )
}


export default ImageCard;