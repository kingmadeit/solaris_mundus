'use client';
import { content } from "@/lib/data";
import { usePathname } from "next/navigation";

const useSectionData = () => {
    const pathname = usePathname();
    const currentPathname = pathname === '/' ? '/home' : pathname;
    const data = content[currentPathname.slice(1)];
    return data;
};

export default useSectionData;