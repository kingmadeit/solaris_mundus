import React from 'react'
import { TSocialLink } from '@/types/types';

type SocialLinkProps = {
    link: TSocialLink;
    className?: string;
}

const SocialLink = ({link, className}: SocialLinkProps) => {
  const IconComponent = link.icon as React.ComponentType<{ size?: number }>;
  
  return (
    <a 
      href={link.href} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`${className} hover:opacity-70 transition-opacity duration-200`}
      aria-label={`Visit ${link.name}`}
    >
      <IconComponent size={24} />
    </a>
  )
}

export default SocialLink