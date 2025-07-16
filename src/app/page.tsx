import { PortfolioShowcase } from "@/components";
import Image from "next/image";
import * as motion from 'motion/react-client';
import { fadeInLeftAnimation } from "@/lib/constants";


export default function Home() {
  return  (
    <motion.div {...fadeInLeftAnimation}>
      <PortfolioShowcase className="flex-col"/>
    </motion.div>

  )
}
