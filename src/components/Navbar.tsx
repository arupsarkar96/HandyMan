import Image from "next/image"
import Link from "next/link"
import { HiMap, HiPhone } from "react-icons/hi2";

const Navbar = () => {
    return (
        <>
            {/* Top Navbar with Contact Info */}
            <div className="navbar bg-indigo-600 text-white z-50">
                <div className="flex justify-between w-full px-4">

                    <div className="flex items-center">
                        <div className="size-10 bg-white rounded-full flex items-center justify-center">
                            <HiMap className="text-lg size-4 text-gray-900" />
                        </div>
                        <span className="font-semibold ms-2">Singapore</span>
                    </div>

                    <div className="flex items-center">
                        <div className="size-10 bg-white rounded-full flex items-center justify-center">
                            <HiPhone className="text-lg size-4 text-gray-900" />
                        </div>
                        <span className="font-semibold ms-2">+6584991099</span>
                    </div>

                </div>
            </div>

            {/* Main Navbar with Logo and Name - Sticky */}
            <div className="navbar bg-neutral text-neutral-content sticky top-0 z-50">
                <div className="flex-1 px-4">
                    <Link href="/" className="text-xl flex items-center">
                        <Image src="/favicon.ico" width={48} height={48} alt="logo" />
                        <span className="ms-4 font-bold uppercase">Handyman Expert 24</span>
                    </Link>
                </div>
                <div className="flex-none">
                    {/* Add additional navbar items here if needed */}
                </div>
            </div>
        </>
    );
};

export default Navbar