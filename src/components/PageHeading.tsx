'use client';
import React from 'react';
import { navLinks } from '@/lib/data';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';


const PageHeading = () => {
  const pathName = usePathname();
  const pageAlias = navLinks?.find(link => link.href === pathName)?.alias;

  if (!pageAlias) return null;

  return (
    <motion.h1
      key={pageAlias} // Use key to re-render when alias changes
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="font-antonio page-heading"
    >
      <span>{pageAlias}</span>
    </motion.h1>
  );
};

export default PageHeading;