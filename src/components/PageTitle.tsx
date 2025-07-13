'use client';
import React from 'react';
import { navLinks } from '@/lib/data';
import { usePathname } from 'next/navigation';

const PageTitle = () => {
  const pathName = usePathname();
  const pageAlias = navLinks?.find(link => link.href === pathName)?.alias;

  if (!pageAlias) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-screen pointer-events-none select-none overflow-hidden z-0">
      <div className="absolute flex justify-center inset-0">
        <h1 
          className="font-antonio text-[clamp(12rem,25vw,30rem)] tracking-[-0.05em] text-gray-300/20 uppercase leading-[0.5] whitespace-nowrap"
        >
          {pageAlias}
        </h1>
      </div>
    </div>
  );
};

export default PageTitle;