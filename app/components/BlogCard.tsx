import Image from "next/image";
import Link from "next/link";

export default function BlogCard({
  title,
  slug,
  categories,
  mainImage,
  publishedAt,
}: BlogData) {
  return (
    <div className="lg:w-[600px] mx-auto lg:h-[580px] bg-white rounded-2xl">
      <Link href={`blog/${slug}`} className="h-full block">
        <div className="h-3/5 relative">
          <Image
            src={mainImage?.asset?.url}
            layout="fill"
            objectFit="cover"
            className="rounded-t-2xl"
            alt="image"
          />
        </div>
        <div className="p-8 h-2/5 flex justify-between flex-col box-border ">
          <div>
            <p className="font-roboto font-medium text-gray-600 text-xl">
              {categories?.[0]?.title}
            </p>
            <h2 className="font-roboto font-bold text-4xl mt-2 text-gray-800">
              {title}
            </h2>
          </div>
          <p className="font-roboto font-medium text-gray-600 text-md mt-2">
            {publishedAt.split("T")[0]}
          </p>
        </div>
      </Link>
    </div>
  );
}
