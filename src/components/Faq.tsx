import Image from "next/image"
import Link from "next/link"
import { HiPhone } from "react-icons/hi2"


const Faq = () => {
    return (
        <>
            <div className="flex flex-col lg:flex-row items-center lg:items-start max-w-7xl mx-auto px-4 py-12 gap-8">

                <div className="flex flex-col gap-4">
                    <Image width={400} height={500} className="w-full h-auto rounded-lg shadow-lg" src="https://images.pexels.com/photos/8486923/pexels-photo-8486923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Handyman Service Image 1" />
                </div>

                <div className="flex-1 space-y-6">

                    <h4 className="text-primary font-bold text-xl uppercase">Asked questions</h4>
                    <h2 className="text-4xl font-bold leading-tight">Top Handyman Services in Singapore: Quality You Can Trust</h2>

                    <div className="join join-vertical w-full">
                        <div className="collapse collapse-arrow join-item border-base-300 border">
                            <input type="radio" name="my-accordion-4" defaultChecked />
                            <div className="collapse-title text-xl font-medium">Can you tell me more about your business?</div>
                            <div className="collapse-content">
                                <p>We are a HIGH-QUALITY Handyman Services provider in Singapore. Our services are-
                                    Plumbing Service, Water Heater Repair & Replacement, Shower set Repair & Replacement,
                                    Electrical, Sliding Door Repair & Installation & Frame, AC Service & Repair, lights, and Wiring Service, Sink Tap Repair & Replacement, Wardrobe, and Cabinet Repair, Painting Service, Polishing Service, Office Moving & Cleaning Services, Landscaping Services.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow join-item border-base-300 border">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-xl font-medium">What about Service charge ?</div>
                            <div className="collapse-content">
                                <p>This will depend on the area affected. Our professional handyman has a lot of knowledge and skills. They will give you a free estimate considering everything. Contact us at +6584991099.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow join-item border-base-300 border">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-xl font-medium">How long does it take to complete?</div>
                            <div className="collapse-content">
                                <p>Thanks, Our office hours are always open for you. Just contact us at +6584991099.
                                    Our inspection team will be in touch shortly. Visiting the site will give you an estimate. After starting the work, the work will be completed at the highest speed keeping in mind the quality of the work.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <Link href={"tel:+6584991099"} className="btn btn-success">
                            <HiPhone className="size-6" />
                            Call us any time
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Faq