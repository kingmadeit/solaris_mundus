'use client';
import React from 'react';
import { SectionTitle, SectionBody } from '@/components/index';
import { content } from '@/lib/data';
import { usePathname } from 'next/navigation';

type SectionProps = {
  title: string;
  children: React.ReactNode;
};

const SectionBlock = () => {
    const currentPathname = usePathname() === '/' ? '/home' : usePathname();
    console.log("Current Pathname:", currentPathname);
    const data = content[currentPathname.slice(1)];
   
    if (!data) return null;

    return (
        <section className="w-full flex flex-col items-center justify-start">
            <SectionTitle title={data.title} />
            <SectionBody>{data.body}</SectionBody>
        </section>
    )
};

export default SectionBlock;