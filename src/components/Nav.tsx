import React from 'react'
import { navLinks } from '@/lib/data'
import Link from 'next/link'
import { NavLink } from '@/types/types';


const NavBar = () => {
  // Check if navLinks is defined and has items
  if (!navLinks || navLinks.length === 0) return null;

  // Render the navigation links
  return (
    <nav aria-label="Main Navigation" className='w-full bg-green-300'>
      <ul className='flex items-start justify-between'>
        {navLinks.map((link: NavLink) => (
          <li key={link.id}>
            <Link href={link.href} className='nav-link text-3xl'>
              {link.name}
            </Link> 
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavBar