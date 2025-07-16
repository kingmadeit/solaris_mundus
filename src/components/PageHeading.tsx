'use client';
import React from 'react';
import { motion } from 'framer-motion';
import {usePageAlias} from '@/hooks';


const PageHeading = () => {
  const pageAlias = usePageAlias();
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