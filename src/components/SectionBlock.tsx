import React from 'react';
import { SectionTitle, SectionBody } from '@/components/index';
type SectionProps = {
  title: string;
  children: React.ReactNode;
};

const SectionBlock = ({ title, children }: SectionProps) => (
  <section className="my-section w-full flex flex-col items-center justify-start">
    <SectionTitle title={title} />
    <SectionBody>{children}</SectionBody>
  </section>
);

export default SectionBlock;