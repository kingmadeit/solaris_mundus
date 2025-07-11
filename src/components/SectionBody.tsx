import React from 'react'

type SectionBodyProps = {
  children?: React.ReactNode;
};  

const SectionBody = ({children}:SectionBodyProps) =>  <p>{children}</p>

export default SectionBody