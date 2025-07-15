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
        <h3 className="capitalize text-[clamp(1.5rem,2vw,2rem)] font-antonio font-bold">{text}</h3>
        <div className={clsx('relative w-full aspect-[3/2]', className)}>
            <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover rounded"
            />
        </div>
        
    </section>
  )
}


export default ImageCard;