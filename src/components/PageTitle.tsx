'use client';
import React from 'react'
import { navLinks } from '@/lib/data';
import { usePathname } from 'next/navigation';
const PageTitle = () => {
  const pathName = usePathname();
  const pageAlias = navLinks?.find(link => link.href === pathName)?.alias;

  if (!pageAlias) return null;
 
  return (
    <h1 className='z-0 absolute uppercase text-[4rem] md:text-[8rem] w-full'>{pageAlias}</h1>
  )
}

export default PageTitle