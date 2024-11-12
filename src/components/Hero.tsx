import Link from "next/link"
import { HiPhone } from "react-icons/hi";

const Hero = () => {
    return (
        <div
            className="hero min-h-screen"
            style={{
                backgroundImage: "url(https://images.pexels.com/photos/7484798/pexels-photo-7484798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
            }}>
            <div className="hero-overlay bg-opacity-70"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-lg text-white">
                    <h1 className="mb-5 text-5xl font-bold">Professional Handyman Services in Singapore</h1>
                    <p className="mb-5">
                        Looking for professional handyman services in Singapore? We offer fast, affordable solutions for your home repairs and maintenance needs!
                    </p>
                    <Link href={"tel:+6584991099"} className="btn btn-accent">
                        <HiPhone className="size-6" />
                        Request Quote
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Hero