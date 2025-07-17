import { FIXED_ASIDE } from "@/lib/constants";
import Image from "next/image";

export default function ContactPage() {
    return (
        <section className={FIXED_ASIDE}>
         <Image
            src="https://images.unsplash.com/photo-1722888898265-130c6d013ceb?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            objectFit='cover'
            layout='fill'
            alt="Contact Us"
            className="w-full"
         />
        </section>
    );
}