'use client'
import React from 'react'
import { Copyright, SocialLinks } from '@/components/index'
import * as motion from 'motion/react-client'
import { fadeInRightAnimation } from '@/lib/constants'
import { usePageAlias } from '@/hooks'

const Footer = () => {
  const pageAlias = usePageAlias();
  return (
    <motion.footer key={pageAlias} {...fadeInRightAnimation} className='w-full flex flex-col h-full'>
      <SocialLinks />
      <Copyright />
    </motion.footer>
  )
}

export default Footer