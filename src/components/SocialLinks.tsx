import React from 'react'
import { SocialLink } from './index';
import { socialLinks } from '@/lib/data';

const SocialLinks = () => {
  // Check if socialLinks is defined and has items
  if (!socialLinks || socialLinks.length === 0) return null; 
  
  // Render social links if available
  return (
    <section className='w-full flex flex-col items-center justify-center py-6'>
      {
        socialLinks?.map((link, index) => (
          <SocialLink
            key={link.id || index}
            link={link}
          />
        ))
      }
    </section>
  )
}

export default SocialLinks