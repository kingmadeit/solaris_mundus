import React from 'react'

type SectionTitleProps = {
  title: string;
  className?: string;
};

const SectionTitle = ({ title, className }: SectionTitleProps) => (
  <h1 className={className ? className : 'text-2xl font-bold'}>
    {title}
  </h1>
)

export default SectionTitle