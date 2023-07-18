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
    <div className="lg:w-[600px] mx-auto lg:h-[580px] h-[400px] bg-white md:rounded-2xl rounded-xl">
      <Link href={`blog/${slug}`} className="h-full block ">
        <div className="md:h-3/5 h-1/2 relative">
          <Image
            src={mainImage?.asset?.url}
            layout="fill"
            objectFit="cover"
            className="md:rounded-t-2xl rounded-t-xl"
            alt="image"
          />
        </div>
        <div className="lg:p-8 md:p-6 p-5 md:h-2/5 h-1/2 flex justify-between flex-col box-border ">
          <div>
            <p className="font-roboto font-medium text-gray-600 lg:text-xl text-base">
              {categories?.[0]?.title}
            </p>
            <h2 className="font-roboto font-bold text-2xl lg:text-4xl mt-2 text-gray-800">
              {title}
            </h2>
          </div>
          <p className="font-roboto font-medium text-gray-600 text-md mt-2 text-base">
            {publishedAt.split("T")[0]}
          </p>
        </div>
      </Link>
    </div>
  );
}
