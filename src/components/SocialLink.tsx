import React from 'react'
import {SmartLink} from '@/components/index'
import { TSocialLink } from '@/types/types';

type SocialLinkProps = {
  link: TSocialLink 
};

const SocialLink = ({link}: SocialLinkProps) => {
  const { href, icon: Icon, name } = link;
  return (
    <SmartLink className='w-full flex text-gray-500 py-4 font-normal text-[clamp(1rem, 2vw, 1rem)] justify-between' href={href} target='_blank' rel='noopener noreferrer'>
      <div className='w-90 h-5 items-center flex space-x-2'>
        {Icon && <Icon className='w-5 h-5' />}
        <span className='label'>{name}</span>
      </div>
    </SmartLink>
  )
}

export default SocialLink