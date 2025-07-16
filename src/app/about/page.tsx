import React from 'react';
import Image from 'next/image';
import * as motion from 'motion/react-client';
import { fadeInUpAnimation, SPACING, LAYOUT_PT_MD } from '@/lib/constants';

const offsetY = -(SPACING * LAYOUT_PT_MD);

export default function AboutPage() {
    return (
        <motion.div 
            {...fadeInUpAnimation}
            animate={{ opacity: 1, y: `${offsetY}rem` }}
            className="w-full h-screen flex flex-col items-center justify-start">
            <Image
                src="/images/profile-pic-large.png"
                alt="About Us"
                width={800}
                height={600}
                className="w-full opacity-[.80] h-full object-cover"
            />
        </motion.div>
    );
}