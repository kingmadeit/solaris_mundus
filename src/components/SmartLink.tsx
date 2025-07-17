import React from 'react'
import Link from 'next/link';
import { IconArrowRight } from '@tabler/icons-react';
import clsx from 'clsx';

type SmartLinkProps = {
    href: string;
    children: React.ReactNode;
    target?: '_blank' | '_self';
    rel?: string;
    className?: string;
};


const EXTERNAL = ['http', 'https', 'www', '//'];

const SmartLink = ({href, children, target, rel, className}: SmartLinkProps) => {

    const isExternal = EXTERNAL.some(prefix => href.startsWith(prefix));

    if (isExternal) {
        return (
            <a 
                href={href} 
                target={target || '_blank'} 
                rel={rel || 'noopener noreferrer'} 
                className={clsx(className, 'flex justify-between')}>
                {children}
                <IconArrowRight className='w-4 h-4'/>
            </a>
        )
    }

    return (
        <Link href={href} className={clsx(className, 'flex justify-between text-gray-500')}>
            {children}
            <IconArrowRight className='w-4 h-4'/>
        </Link>
    )
}

export default SmartLink