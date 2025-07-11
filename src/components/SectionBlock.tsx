'use client';
import React from 'react';
import { SectionTitle, SectionBody } from '@/components/index';
import useSectionData from '@/hooks/useSectionData';

type SectionProps = {
  title: string;
  children: React.ReactNode;
};

const SectionBlock = () => {
    const data = useSectionData();
   
    if (!data) return null;

    return (
        <section className="w-full flex flex-col justify-start">
            <SectionTitle title={data.title} />
            <SectionBody>{data.body}</SectionBody>
        </section>
    )
};

export default SectionBlock;