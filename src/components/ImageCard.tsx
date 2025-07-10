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

export const ImageCard: React.FC<ImageCardProps> = ({
    src,
    alt,
    text,
    link,

    className
}) => {
  return (
    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <Image 
            src={src} 
            alt={alt} 
            width={300} 
            height={200} 
            className={clsx('rounded-lg shadow-md', className )}>
        </Image>
        <p className="text-white text-lg font-semibold">{text}</p>
    </div>
  )
}
