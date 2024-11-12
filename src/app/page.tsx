import Hero from "@/components/Hero";
import Why from "@/components/Why";
import Faq from "@/components/Faq";
import { HiPhone } from "react-icons/hi2";
import Link from "next/link";
import PostCard from "@/components/PostCard";
import About from "@/components/About";
import { getPosts } from "@/lib/operations";





export default async function Home() {
  const posts = await getPosts()

  if (posts === null) {
    return (<>Try again later ! Database is down</>)
  } else {
    return (
      <>
        <Hero />

        <div className="flex justify-center mt-6">
          <h2 className="text-4xl uppercase">our services</h2>
        </div>

        <div className="container mx-auto p-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <PostCard key={post.id} slug={post.slug} title={post.title} image={post.image} />
            ))}
          </div>
        </div>

        <div className="bg-blue-800 text-white flex flex-col md:flex-row items-center justify-between p-8 gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-semibold">
              Our <span className="text-yellow-400 font-bold">100% satisfaction</span> guarantee let&apos;s work together
            </h2>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-20 h-20 bg-blue-900 rounded-full flex items-center justify-center">
              <Link href={"tel:+6584991099"}><HiPhone className="size-8" /></Link>
            </div>
            <div>
              <p className="text-lg">Contact with Manager</p>
              <p className="text-2xl font-bold">+6584991099</p>
            </div>
          </div>
        </div>
        <About />
        <Why />
        <Faq />
      </>
    );
  }
}
