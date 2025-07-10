import React from 'react'
import clsx from 'clsx';
import Link from 'next/link';

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
                className={clsx('', className)}>
                {children}
            </a>
        )
    }

    return (
        <Link href={href} className={className}>
            {children}
        </Link>
    )
}

export default SmartLink