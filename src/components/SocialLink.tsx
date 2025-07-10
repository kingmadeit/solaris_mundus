import React from 'react'
import SmartLink from './SmartLink'

type SocialLinkProps = {
  href: string;
  icon?: string;
  label?: string;
};


const SocialLink = ({href, icon, label}: SocialLinkProps) => {
  return (
    <SmartLink href={href} target='_blank' rel='noopener noreferrer' className='social-link'>
      <span className='icon'>{icon}</span>
      <span className='label'>{label}</span>
    </SmartLink>

  )
}

export default SocialLink