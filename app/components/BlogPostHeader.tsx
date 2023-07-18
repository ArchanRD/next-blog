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
      <p className="font-roboto font-medium text-gray-500 text-lg">
        {category}
      </p>
      <p className="font-roboto font-medium text-gray-400 text-lg">
        {date}
      </p>
      <h2 className="font-poppins text-5xl font-bold text-gray-800 w-1/2 mt-5">
        {heading}
      </h2>
        <p className="font-roboto text-lg font-medium text-gray-600 mt-2">by {author}</p>
      <div className="h-full w-full relative mt-10">
        <Image
          src={image}
          width={900}
          height={500}
          objectFit="cover"
          className="rounded-2xl h-[500px] object-cover object-center"
          alt="Blog image"
        />
      </div>
    </div>
  );
}
