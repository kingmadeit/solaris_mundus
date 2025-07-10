import React from 'react'
import { navLinks } from '@/lib/data'
import Link from 'next/link'
import { NavLink } from '@/types/types';


const Nav = () => {
  // Check if navLinks is defined and has items
  if (!navLinks || navLinks.length === 0) return null;

  // Render the navigation links
  return (
    <nav aria-label="Main Navigation" className=''>
      <ul>
        {navLinks.map((link: NavLink) => (
          <li key={link.id}>
            <Link href={link.href} className='nav-link'>
              {link.name}
            </Link> 
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav