import React from 'react'

type SectionTitleProps = {
  title: string;
};

const SectionTitle = ({title}: SectionTitleProps ) => <h1 className='text-9xl'>{title}</h1>

export default SectionTitle