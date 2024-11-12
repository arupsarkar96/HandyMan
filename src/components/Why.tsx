import Image from "next/image"


const Why = () => {
    return (
        <>
            <div className="flex flex-col lg:flex-row items-center lg:items-start max-w-7xl mx-auto px-4 py-12 gap-8">
                <div className="flex-1 space-y-6">

                    <h4 className="text-primary font-bold text-xl uppercase">Why Choose Us</h4>
                    <h2 className="text-4xl font-bold leading-tight">The perfect solution for all handyman services</h2>
                    <p className="text-gray-600">Capitalize on low-hanging fruit to identify a ballpark value-added activity beta test override the digital divide with additional clickthroughs from DevOps.</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="flex space-x-3">
                            <div className="text-3xl font-bold text-primary">10+</div>
                            <div>
                                <p className="text-xl font-bold">Years Experience</p>
                                <p className="text-gray-500">10+ Years of Proven Expertise: Your Trusted Partner for Skilled Handyman Services.</p>
                            </div>
                        </div>
                        <div className="flex space-x-3">
                            <div className="text-3xl font-bold text-primary">100+</div>
                            <div>
                                <p className="text-xl font-bold">Expert Members</p>
                                <p className="text-gray-500">100+ Skilled Experts, Ready to Elevate Your Space with Precision and Professionalism.</p>
                            </div>
                        </div>
                        <div className="flex space-x-3">
                            <div className="text-3xl font-bold text-primary">50+</div>
                            <div>
                                <p className="text-xl font-bold">Projects Done</p>
                                <p className="text-gray-500">Over 50 Successfully Completed Projects, Demonstrating Our Commitment to Excellence and Customer Satisfaction.</p>
                            </div>
                        </div>
                        <div className="flex space-x-3">
                            <div className="text-3xl font-bold text-primary">24/7</div>
                            <div>
                                <p className="text-xl font-bold">Hours Support</p>
                                <p className="text-gray-500">Round-the-Clock Support: We are Here for You, Anytime, Anywhere.</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="flex flex-col gap-4 order-first md:order-none">
                    <Image width={400} height={500} className="w-full h-auto rounded-lg shadow-lg" src="https://images.pexels.com/photos/8447842/pexels-photo-8447842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Handyman Service Image 1" />
                </div>
            </div>
        </>
    )
}

export default Why