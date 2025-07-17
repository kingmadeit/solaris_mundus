import { PortfolioShowcase } from "@/components";
import { fadeInUpAnimation, PAGE_CONTENT_PT } from "@/lib/constants";
import { portfolioItems } from "@/lib/data";
import * as motion from 'motion/react-client';

export default function PortfolioPage() {
    return (
        <motion.div className={`min-h-screen md:absolute md:top-47`} {...fadeInUpAnimation}>
            <PortfolioShowcase items={portfolioItems} className="flex-col"/>
        </motion.div>
    )
}