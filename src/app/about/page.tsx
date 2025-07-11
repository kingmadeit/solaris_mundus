import React from 'react';
import Image from 'next/image';

export default function AboutPage() {
    return (
        <section className="bg-pink-300 w-full flex flex-col items-center justify-start min-h-screen">
            <Image
                src="https://images.unsplash.com/photo-1721323960622-124edcae5005?q=80&w=874&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="About Us"
                width={800}
                height={600}
                className="rounded-lg shadow-md mb-8"
            />
        </section>
    );
}