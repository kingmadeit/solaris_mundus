import { content } from "@/lib/data";
import { usePathname } from "next/navigation";

const useSectionData = (sliced = false) => {
    const currentPathname = usePathname() === '/' ? '/home' : usePathname();
    const data = content[currentPathname.slice(1)];
    return data;
}

export default useSectionData;