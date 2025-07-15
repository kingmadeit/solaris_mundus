import React from 'react'

type SectionTitleProps = {
  title: string;
};

const SectionTitle = ({ title }: SectionTitleProps) => (
  <h1 className="font-antonio tracking-tight font-extrabold text-[clamp(3rem,10vw,3.5rem)]">
    {title}
  </h1>
)

export default SectionTitle