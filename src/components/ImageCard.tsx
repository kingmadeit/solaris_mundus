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
    priority?: boolean;
}

const ImageCard = ({
    src,
    alt,
    text,
    className,
    priority = false
}: ImageCardProps) => {
  return (
    <section className="w-full flex flex-col space-y-8">
        <h3 className="capitalize text-[clamp(1.2rem,2vw,1.5rem)] font-antonio font-bold">{text}</h3>
        <div className={clsx('relative w-full aspect-[3/2]', className)}>
            <Image
              src={src}
              alt={alt}
              fill
              priority={priority}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover rounded"
              loading={priority ? 'eager' : 'lazy'}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            />
        </div>
        
    </section>
  )
}


export default ImageCard;