import React from 'react'

type SectionTitleProps = {
  title: string;
};

const SectionTitle = ({title}: SectionTitleProps ) => <h1 className='font-antonio text-6xl font-bold'>{title}</h1>

export default SectionTitle