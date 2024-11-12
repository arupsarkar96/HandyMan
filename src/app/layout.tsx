import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";



export const metadata: Metadata = {
  title: {
    default: "Handyman Services Singapore | Reliable & Affordable Home Repair",
    template: "%s | SG Handyman"
  },
  description: "Professional handyman services in Singapore, offering plumbing, electrical repair, AC services, painting, cabinet repair, and more. Trusted, affordable, and skilled handyman near you.",
  twitter: {
    title: "Handyman Services Singapore | Reliable & Affordable Home Repair",
    description: "Professional handyman services in Singapore, offering plumbing, electrical repair, AC services, painting, cabinet repair, and more. Trusted, affordable, and skilled handyman near you.",
    card: "summary_large_image",
    images: ""
  },
  openGraph: {
    title: "Handyman Services Singapore | Reliable & Affordable Home Repair",
    description: "Professional handyman services in Singapore, offering plumbing, electrical repair, AC services, painting, cabinet repair, and more. Trusted, affordable, and skilled handyman near you.",
    url: "",
    images: "",
  },
  keywords: ["handyman", "handyman near me", "handyman in singapore", "door repair", "plumbing"]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
