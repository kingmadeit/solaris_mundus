import Image from "next/image";

export default function ContactPage() {
    return (
        <section className="bg-pink-300 w-full flex flex-col items-center justify-start min-h-screen">
         <Image
            // src="https://images.unsplash.com/photo-1722888898265-130c6d013ceb?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            src="https://images.unsplash.com/photo-1742538371295-872cf201ad2e?q=80&w=654&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Contact Us"
            width={800}
            height={600}
            className="rounded-lg shadow-md mb-8"
         />
        </section>
    );
}