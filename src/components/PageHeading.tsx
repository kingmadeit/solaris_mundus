'use client';
import React from 'react';
import { navLinks } from '@/lib/data';
import { usePathname } from 'next/navigation';

const PageHeading = () => {
  const pathName = usePathname();
  const pageAlias = navLinks?.find(link => link.href === pathName)?.alias;

  if (!pageAlias) return null;

  return (
    <h1 className="font-antonio page-heading">
        <span>{pageAlias}</span>
    </h1>
  );
};

export default PageHeading;