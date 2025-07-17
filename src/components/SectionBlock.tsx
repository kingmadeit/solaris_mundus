'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import { SectionTitle, SectionBody } from '@/components/index';
import { useSectionData } from '@/hooks';
import * as motion from 'motion/react-client';
import { DEFAULT_LEFT_VAL, fadeInRightAnimation } from '@/lib/constants';


const SectionBlock = () => {
    const data = useSectionData();
    const pathName = usePathname();
    if (!data) return null;

    return (
        <section className="w-full flex flex-col space-y-8 justify-start mb-8 md:mb-0">
            <motion.div
                {...fadeInRightAnimation}
                key={data.title}
                className="w-full"
            >
                <SectionTitle title={data.title} className='font-antonio tracking-tight font-extrabold text-[clamp(3rem,10vw,3.5rem)]'/>
            </motion.div>
             <motion.div
                {...fadeInRightAnimation}
                initial={{ opacity: 0, x: (DEFAULT_LEFT_VAL * 2) }}
                key={pathName}
                className="w-full"
            >
                <SectionBody className={pathName === '/' ? 'md:max-w-[90%] font-bold font-antonio tracking-tight text-[clamp(1.2rem,2vw,1.5rem)]' : 'text-[clamp(1rem,2vw,1rem)] text-gray-500'}>{data.body}</SectionBody>
            </motion.div>
        </section>
    )
};

export default SectionBlock;