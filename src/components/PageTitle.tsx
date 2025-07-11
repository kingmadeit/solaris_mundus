'use client';
import React from 'react'
import { navLinks } from '@/lib/data';
import { usePathname } from 'next/navigation';

const PageTitle = () => {
  const pathName = usePathname();
  const pageAlias = navLinks?.find(link => link.href === pathName)?.alias;

  if (!pageAlias) return null;
 
  return (
    <h1
      className={`font-antonio z-0 absolute top-0 left-0 leading-none uppercase w-full font-antonio`}
      style={{
      fontSize: 'clamp(4rem, 12vw, 12rem)',
      }}
    >
      {pageAlias}
    </h1>
  );
}

export default PageTitle