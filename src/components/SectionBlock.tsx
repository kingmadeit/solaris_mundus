'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import { SectionTitle, SectionBody } from '@/components/index';
import useSectionData from '@/hooks/useSectionData';

type SectionProps = {
  title: string;
  children: React.ReactNode;
};

const SectionBlock = () => {
    const data = useSectionData();
    const pathName = usePathname();
    if (!data) return null;

    return (
        <section className="w-full flex flex-col space-y-8 justify-start">
            <SectionTitle title={data.title} />
            <SectionBody className={pathName === '/' ? 'font-antonio' : ''}>{data.body}</SectionBody>
        </section>
    )
};

export default SectionBlock;