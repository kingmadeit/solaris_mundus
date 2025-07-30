import dynamic from "next/dynamic";
import { fadeInUpAnimation } from "@/lib/constants";
import { portfolioItems } from "@/lib/data";
import * as motion from 'motion/react-client';

// Dynamically import the showcase to avoid large image-heavy bundles on initial navigation.
const PortfolioShowcase = dynamic(() => import("@/components/PortfolioShowcase"), {
  loading: () => null,
  ssr: false,
});

export default function PortfolioPage() {
    return (
        <motion.div className={`min-h-screen md:absolute md:top-47`} {...fadeInUpAnimation}>
            <PortfolioShowcase items={portfolioItems} className="flex-col"/>
        </motion.div>
    )
}