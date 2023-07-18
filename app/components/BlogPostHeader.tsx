import Image from "next/image";

type Props = {
  heading: string;
  category: string;
  date: string;
  image: string;
  author: string;
};

export default function BlogPostHeader({
  category,
  date,
  heading,
  image,
  author
}: Props) {
  return (
    <div>
      <p className="font-roboto font-medium text-gray-500 md:text-lg sm:text-md text-base">
        {category}
      </p>
      <p className="font-roboto font-medium text-gray-400 md:text-lg sm:text-md text-base">
        {date}
      </p>
      <h2 className="font-poppins lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold text-gray-800 lg:w-1/2 mt-5">
        {heading}
      </h2>
        <p className="font-roboto md:text-lg text-base sm:text-md font-medium text-gray-600 mt-2">by {author}</p>
      <div className="h-full w-full relative mt-10">
        <Image
          src={image}
          width={900}
          height={500}
          objectFit="cover"
          className="md:rounded-2xl md:h-[500px] w-full h-full rounded-xl object-cover object-center"
          alt="Blog image"
        />
      </div>
    </div>
  );
}
