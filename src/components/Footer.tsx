'use client'
import React from 'react'
import { SocialLinks } from '@/components/index'
import * as motion from 'motion/react-client'
import { fadeInRightAnimation } from '@/lib/constants'
import { usePageAlias } from '@/hooks'

const Footer = () => {
  const pageAlias = usePageAlias();
  return (
    <motion.footer key={pageAlias} {...fadeInRightAnimation} className='w-full flex flex-col h-full'>
      <SocialLinks />
      
      <section className='w-full flex py-4 text-gray-700 text-xs'>
        <span><small>&copy;</small> {new Date().getUTCFullYear()}</span>
        <span className='ml-2'>Solaris Mundus LLC.</span>
      </section>
    </motion.footer>
  )
}

export default Footer