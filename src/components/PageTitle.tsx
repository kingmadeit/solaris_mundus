'use client';
import React from 'react'
import { navLinks } from '@/lib/data';
import { usePathname } from 'next/navigation';
const PageTitle = () => {
  const pathName = usePathname();
  const pageAlias = navLinks?.find(link => link.href === pathName)?.alias;

  if (!pageAlias) return null;

  return (
    <div className=''>{pageAlias}</div>
  )
}

export default PageTitle