import React from 'react'

type SectionTitleProps = {
  title: string;
};

const SectionTitle = ({ title }: SectionTitleProps) => (
  <h1 className="font-antonio font-bold text-[clamp(2rem,10vw,4rem)]">
    {title}
  </h1>
)

export default SectionTitle