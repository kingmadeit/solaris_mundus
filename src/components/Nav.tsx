import React from 'react'
import { navLinks } from '@/lib/data'
import Link from 'next/link'
import { NavLink } from '@/types/types';


const NavBar = () => {
  // Check if navLinks is defined and has items
  if (!navLinks || navLinks.length === 0) return null;

  // Render the navigation links
  return (
    <nav aria-label="Main Navigation" className='w-full'>
      <ul className='flex items-start justify-between'>
        {navLinks.map((link: NavLink) => (
          <li key={link.id}>
            <Link href={link.href} className='text-[clamp(0.5rem,2vw,1rem)] text-gray-500 nav-link'>
              {link.name}
            </Link> 
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavBar