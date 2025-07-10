import React from 'react'
import { SocialLink } from './index';
import { socialLinks } from '@/lib/data';

const SocialLinks = () => {
  return (
    <section>
      {
        socialLinks?.map((link, index) => (
          <SocialLink
            key={`${index}-${link.name}`}
            href={link.href}
            icon={link.icon}
            label={link.name}
          />
        ))
      }
    </section>
  )
}

export default SocialLinks