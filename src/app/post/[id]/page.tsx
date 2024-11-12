import { getPostData } from "@/lib/operations";
import { Post } from "@/model/Post";
import { Metadata } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { HiPhone } from "react-icons/hi2";




export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
    const { id } = await params; // Await params before using it
    const post = await getPostData(id);

    if (!post) {
        return {
            title: "Post Not Found",
            description: "The requested post could not be found.",
        };
    }

    return {
        title: post.seo_title || post.title,
        description: post.seo_body || "Read this post on our blog.",
        keywords: post.seo_keywords,
        twitter: {
            title: post.seo_title || post.title,
            description: post.seo_body || "Read this post on our blog.",
            card: "summary_large_image",
            images: post.image || [], // Ensure images array exists
        },
        openGraph: {
            title: post.seo_title || post.title,
            description: post.seo_body || "Read this post on our blog.",
            url: `/post/${post.slug}`,
            images: post.image || [], // Ensure images array exists
        },
    };
}

// { params }: { params: Promise<{ id: string }> }

// Define the main Page component
export default async function Page({ params }: { params: Promise<{ id: string }> }) {

    const id = (await params).id
    const post: Post | null = await getPostData(id)

    if (post === null) {
        return (<>Try again later ! Database is down</>)
    } else {
        const schemaData = {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post.seo_title || post.title,
            "image": post.image || "", // Ensure image is a valid string or fallback
            "datePublished": post.date, // Assumes post has a date field for publication
            "author": {
                "@type": "Person",
                "name": "Admin",
            },
            "publisher": {
                "@type": "Organization",
                "name": "Handyman Expert 24",
                "logo": {
                    "@type": "ImageObject",
                    "url": "/favicon.ico" // Replace with actual logo URL if available
                }
            },
            "description": post.seo_body || "Read this post on our blog.",
        };

        return (
            <>
                {/* <Head>
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
                    />
                </Head> */}


                <div className="relative w-full h-[360px]">
                    <Image
                        src={post.image || "/favicon.ico"} // Ensure a fallback image exists
                        alt={post.title}
                        width={720}
                        height={360}
                        className="w-full h-[360px]"
                    />
                </div>


                <div className="container mx-auto p-8">
                    <div className="flex justify-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-4">{post.seo_title}</h2>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <div
                            dangerouslySetInnerHTML={{ __html: post.body }}
                            className="prose prose-slate md:prose-xl lg:prose-2xl text-black dark:text-white"
                        />
                    </div>

                    <div className="flex justify-center mt-6">
                        <Link href={"tel:+65 84991099"} className="btn btn-success">
                            <HiPhone className="size-6" />
                            Call to get a quote
                        </Link>
                    </div>
                </div>
            </>
        );
    }
}
