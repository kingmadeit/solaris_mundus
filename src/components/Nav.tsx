import React from 'react'
import { navLinks } from '@/lib/data'
import Link from 'next/link'
import { NavLink } from '@/types/types';
import * as motion from 'motion/react-client';
import { fadeInRightAnimation } from '@/lib/constants';

const NavBar = () => {
  // Check if navLinks is defined and has items
  if (!navLinks || navLinks.length === 0) return null;

  // Render the navigation links
  return (
    <nav aria-label="Main Navigation" className='w-full'>
      <motion.ul 
        {...fadeInRightAnimation}
        className='flex items-start justify-between flex-wrap space-x-4'>
        {navLinks.map((link: NavLink) => (
          <li key={link.id}>
            <Link href={link.href} className='text-[clamp(1rem,2vw,1rem)] text-gray-500 nav-link'>
              {link.name}
            </Link> 
          </li>
        ))}
      </motion.ul>
    </nav>
  )
}

export default NavBar