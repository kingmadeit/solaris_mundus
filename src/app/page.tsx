import { PortfolioShowcase } from "@/components";
import * as motion from 'motion/react-client';
import { fadeInLeftAnimation, PAGE_CONTENT_PT } from "@/lib/constants";


export default function Home() {
  return  (
    <motion.div {...fadeInLeftAnimation} className={PAGE_CONTENT_PT}>
      <PortfolioShowcase className="flex-col"/>
    </motion.div>

  )
}
