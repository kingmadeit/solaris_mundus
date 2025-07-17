import React from 'react';
import Image from 'next/image';
import * as motion from 'motion/react-client';
import { fadeInUpAnimation } from '@/lib/constants';
import { FIXED_ASIDE } from '@/lib/constants';

export default function AboutPage() {
    return (
        <motion.div 
            {...fadeInUpAnimation}
            className={FIXED_ASIDE}>
            <Image
                src="/images/profile-pic-large.png"
                alt="About Us"
                objectFit='cover'
                layout='fill'
                className="opacity-[.80]"
            />
        </motion.div>
    );
}