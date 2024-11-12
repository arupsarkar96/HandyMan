import Link from "next/link"
import { FaFacebook, FaHashtag, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa6"
import { HiEnvelope, HiPhone } from "react-icons/hi2"

const Footer = () => {
    return (
        <>
            <footer className="footer bg-base-200 text-base-content p-10">
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Address</h6>
                    <span>03-02 JALAN BESAR PLAZA<br /> 101 KITCHENER ROAD<br /> SINGAPORE - 208511</span>
                </nav>
                <nav>
                    <h6 className="footer-title">Contact</h6>
                    <Link href="mailto:handymanexpert24@gmail.com" className="flex items-center">
                        <div className="size-10 bg-white rounded-full flex items-center justify-center">
                            <HiEnvelope className="text-lg size-4 text-gray-900" />
                        </div>
                        <span className="font-semibold ms-2">handymanexpert24@gmail.com</span>
                    </Link>
                    <Link href="tel:+6584991099" className="flex items-center">
                        <div className="size-10 bg-white rounded-full flex items-center justify-center">
                            <HiPhone className="text-lg size-4 text-gray-900" />
                        </div>
                        <span className="font-semibold ms-2">+6584991099</span>
                    </Link>
                </nav>
            </footer>
            <footer className="footer bg-base-200 text-base-content border-base-300 border-t px-10 py-4">
                <aside className="grid-flow-col items-center">
                    <FaHashtag className="size-6" />
                    <p>TEAM LEAD CONSTRUCTION PVT. LTD.</p>
                </aside>
                <nav className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-4">
                        <a>
                            <FaTwitter className="size-6" />
                        </a>
                        <a>
                            <FaYoutube className="size-6" />
                        </a>
                        <a>
                            <FaFacebook className="size-6" />
                        </a>
                    </div>
                </nav>
            </footer>

            <Link
                href="https://wa.me/6584991099" // Replace with your WhatsApp number
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-full shadow-lg flex items-center justify-center hover:bg-green-600 transition duration-300"
            >
                <FaWhatsapp size={24} />
            </Link>
        </>
    )
}

export default Footer