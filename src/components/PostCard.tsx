import Image from "next/image"
import Link from "next/link"

const PostCard = ({ slug, title, image }: { slug: string, title: string, image: string }) => {
    return (
        <div className="card card-compact dark:bg-slate-700 w-100 shadow-xl">
            <figure>
                <Image
                    width={512}
                    height={512}
                    className="w-full"
                    loading="lazy"
                    src={image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className="card-actions justify-end">
                    <Link href={`post/${slug}`} className="btn btn-primary">Read more</Link>
                </div>
            </div>
        </div>
    )
}

export default PostCard