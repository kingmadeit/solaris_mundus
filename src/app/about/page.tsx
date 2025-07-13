import React from 'react';
import Image from 'next/image';

export default function AboutPage() {
    return (
        <section className="bg-pink-300 w-full h-screen flex flex-col items-center justify-start min-h-screen">
            <Image
                src="/images/profile-pic-large.png"
                alt="About Us"
                width={800}
                height={600}
                className="w-full h-full object-cover"
            />
        </section>
    );
}