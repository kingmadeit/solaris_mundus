import React from 'react'
import * as motion from 'motion/react-client';
import { fadeInLeftAnimation } from '@/lib/constants';

type PageContentProps = {
  children: React.ReactNode;
  clasName?: string;
};

const PageContent = ({children, clasName}: PageContentProps) => {

    return (
        <section className={clasName}>
            {children}
        </section>
    )
}

export default PageContent