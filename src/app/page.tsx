import { PortfolioShowcase, SmartLink } from "@/components";
import * as motion from 'motion/react-client';
import { fadeInLeftAnimation } from "@/lib/constants";
import { portfolioItems } from "@/lib/data";


export default function Home() {
  return  (
    <motion.div {...fadeInLeftAnimation} className={`md:absolute md:bottom-20 w-full`}>
      <PortfolioShowcase items={[portfolioItems[0]]} className="flex-col"/>
      <SmartLink className="pt-6 pb-1 text-gray-500 after-bottom-0" href="/portfolio">View All</SmartLink>
    </motion.div>

  )
}
