import React from 'react'
import {SmartLink} from '@/components/index'
import { TSocialLink } from '@/types/types';
import {IconArrowRight} from '@tabler/icons-react';

type SocialLinkProps = {
  link: TSocialLink 
};

const SocialLink = ({link}: SocialLinkProps) => {
  const { href, icon: Icon, name } = link;
  return (
    <SmartLink className='w-full flex justify-between' href={href} target='_blank' rel='noopener noreferrer'>
      <div className='w-90 h-5 flex space-x-2'>
        {Icon && <Icon className='w-6 h-6' />}
        <span className='label'>{name}</span>
      </div>
      <IconArrowRight className='w-6 h-6'/>
    </SmartLink>
  )
}

export default SocialLink