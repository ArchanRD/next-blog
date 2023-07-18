import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type Props = {
  data: BlogData;
};

export default function FeaturedBlogs({ data }: Props) {
  return (
    <Link href={`blog/${data?.slug?.current}`}>
      <div className="md:rounded-2xl rounded-xl lg:h-[450px] md:h-[300px] h-96 bg-white flex flex-col md:flex-row">
        <div className="md:h-full relative md:w-3/5 lg:w-9/12 w-full h-1/2">
          <Image
            src={data?.mainImage.asset.url}
            layout="fill"
            objectFit="cover"
            className="md:rounded-s-2xl rounded-tr-none"
            alt="image"
          />
        </div>
        <div className="lg:p-10 md:p-8 p-5 md:w-2/5 lg:w-2/6 w-full flex flex-col justify-between">
          <div className="underline md:no-underline">
            <p className="font-roboto font-medium text-gray-600 lg:text-lg text-base">
              {data?.categories?.[0]?.title}
            </p>
            <h2 className="font-roboto font-bold text-xl lg:text-4xl mt-1 lg:mt-3 text-gray-800">
              {data?.title}
            </h2>
          </div>
          <p className="font-roboto font-medium text-gray-600 lg:text-lg text-base mt-5">
            {data?.publishedAt.split("T")[0]}
          </p>
        </div>
      </div>
    </Link>
  );
}
