import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type Props = {
  data: BlogData;
};

export default function FeaturedBlogs({ data }: Props) {
  return (
    <Link href={`blog/${data?.slug?.current}`}>
      <div className="mt-10 rounded-2xl h-[450px] bg-white flex">
        <div className="h-full relative w-9/12">
          <Image
            src={data?.mainImage.asset.url}
            layout="fill"
            objectFit="cover"
            className="rounded-s-2xl"
            alt="image"
          />
        </div>
        <div className="p-10 w-2/6 flex flex-col justify-between">
          <div className="">
            <p className="font-roboto font-medium text-gray-600 text-lg">
              {data?.categories?.[0]?.title}
            </p>
            <h1 className="font-poppins font-bold text-4xl mt-2 text-gray-800">
              {data?.title}
            </h1>
          </div>
          <p className="font-roboto font-medium text-gray-600 text-lg">
            {data?.publishedAt.split("T")[0]}
          </p>
        </div>
      </div>
    </Link>
  );
}
