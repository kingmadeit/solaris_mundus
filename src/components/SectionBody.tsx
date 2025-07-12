import React from 'react'
type SectionBodyProps = {
  children?: React.ReactNode;
  className?: string;
};  

const SectionBody = ({children, className}:SectionBodyProps) =>  <p className={className}>{children}</p>

export default SectionBody