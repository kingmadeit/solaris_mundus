import React from 'react'
import * as motion from 'motion/react-client';
import { fadeInLeftAnimation } from '@/lib/constants';
import { usePageAlias } from '@/hooks';

type PageContentProps = {
  children: ;
};

const PageContent = ({children}: PageContentProps) => {

return (
    <motion.div {...fadeInLeftAnimation} className="aside md:z-1 pt-20 md:pt-46 order-3 md:order-none md:row-span-3 md:col-start-2 md:h-screen md:overflow-y-auto">
        <section className="aside__content min-h-screen">
            {children}
        </section>
    </motion.div>
    )
}

export default PageContent