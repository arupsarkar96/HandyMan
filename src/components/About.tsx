import Image from "next/image";
import { GrUserWorker } from "react-icons/gr";

const About = () => {
    return (
        <div className="container mx-auto p-6">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6">

                <div className="w-full lg:w-1/3">
                    <Image width={400} height={500} className="w-full h-auto rounded-lg shadow-lg" src="https://images.pexels.com/photos/5767926/pexels-photo-5767926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Handyman Service Image 1" />
                </div>

                <div className="w-full lg:w-2/3 space-y-6">
                    <div className="space-y-6">
                        <h4 className="text-primary font-bold text-xl uppercase">About our company</h4>
                        <h2 className="text-4xl font-bold leading-tight">We provide your all required handyman services into your location</h2>

                        <p className="text-gray-600">World best handyman on low hanging fruit to identify a ballpark value added activity DevOps, immersion along the information highway will close the loop on focusing.</p>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-start gap-3">
                            <GrUserWorker className="size-12" />
                            <div>
                                <h3 className="text-xl font-bold">High Quality Work</h3>
                                <p className="text-gray-600">World best handyman on low hanging fruit to identify a ballpark value.</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <GrUserWorker className="size-12" />
                            <div>
                                <h3 className="text-lg font-bold">Smart Repair System</h3>
                                <p className="text-gray-600">World best handyman on low hanging fruit to identify a ballpark value.</p>
                            </div>
                        </div>


                        <div className="flex items-start gap-3">
                            <GrUserWorker className="size-12" />
                            <div>
                                <h3 className="text-lg font-bold">Timely Service Guarantee</h3>
                                <p className="text-gray-600">World best handyman on low hanging fruit to identify a ballpark value.</p>
                            </div>
                        </div>
                    </div>


                    <div>
                        <a href="tel:+6584991099" className="btn btn-warning">
                            Call now +6584991099
                        </a>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default About