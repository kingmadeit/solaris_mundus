'use client'; 

import { navLinks } from "@/lib/data";
import { usePathname } from "next/navigation";

export default function usePageAlias() {
    const pathName = usePathname();
    const pageAlias = navLinks?.find(link => link.href === pathName)?.alias;

    if (!pageAlias) return null;
    return pageAlias;
}