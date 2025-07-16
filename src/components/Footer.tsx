import React from 'react'
import { SocialLinks } from '@/components/index'
const Footer = () => {
  return (
    <footer className='w-full flex flex-col h-full'>
      <SocialLinks />
      <div className='w-full flex py-4 text-gray-700 text-xs'>
        <span><small>&copy;</small> {new Date().getUTCFullYear()}</span>
        <span className='ml-2'>Solaris Mundus LLC.</span>
      </div>
    </footer>
  )
}

export default Footer