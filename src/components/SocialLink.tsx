import React from 'react'
import {SmartLink} from '@/components/index'
import { TSocialLink } from '@/types/types';

type SocialLinkProps = {
  link: TSocialLink 
};

const SocialLink = ({link}: SocialLinkProps) => {
  const { href, icon: Icon, name } = link;
  return (
    <SmartLink className='w-full flex justify-between' href={href} target='_blank' rel='noopener noreferrer'>
      {Icon && <Icon className='w-6 h-6' />}
      <span className='label'>{name}</span>
    </SmartLink>
  )
}

export default SocialLink