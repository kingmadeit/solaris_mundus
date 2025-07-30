import { PortfolioShowcase, SmartLink } from "@/components";
import { portfolioItems } from "@/lib/data";

export default function Home() {
  return  (
    <div className="md:absolute md:bottom-20 w-full animate-fade-in">
      <PortfolioShowcase items={[portfolioItems[0]]} className="flex-col"/>
      <SmartLink className="pt-6 pb-1 text-gray-500 after-bottom-0" href="/portfolio">View All</SmartLink>
    </div>
  )
}
