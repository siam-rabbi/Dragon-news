'use client'
import Link from 'next/link';

import { usePathname } from 'next/navigation';
import React from 'react';

const Navlink = ({href , children}) => {
    const pathname = usePathname()
    console.log(pathname, 'pathname')
    const isActive = href === pathname
    return (
    <Link href={href} className={`${isActive ? 'border-b-2 border-gray-500 ':''}`}> {children}
    </Link>
    );
};

export default Navlink;