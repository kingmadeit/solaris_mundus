import { PortfolioShowcase } from "@/components";
import { fadeInUpAnimation, PAGE_CONTENT_PT } from "@/lib/constants";
import * as motion from 'motion/react-client';

export default function PortfolioPage() {
    return (
        <motion.div className={PAGE_CONTENT_PT} {...fadeInUpAnimation}>
            <PortfolioShowcase className="flex-col"/>
        </motion.div>
    )
}