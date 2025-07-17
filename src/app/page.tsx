import { PortfolioShowcase, SmartLink } from "@/components";
import * as motion from 'motion/react-client';
import { fadeInLeftAnimation, PAGE_CONTENT_PT } from "@/lib/constants";
import { portfolioItems } from "@/lib/data";


export default function Home() {
  return  (
    <motion.div {...fadeInLeftAnimation} className={`bg-pink-500 ${PAGE_CONTENT_PT}`}>
      <PortfolioShowcase items={[portfolioItems[0]]} className="flex-col"/>
      <SmartLink className="py-6" href="/portfolio">View All</SmartLink>
    </motion.div>

  )
}
