import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type Props = {
  data: BlogData;
};

export default function FeaturedBlogs({ data }: Props) {
  return (
    <Link href={`blog/${data?.slug?.current}`}>
      <div className="md:rounded-2xl rounded-xl md:h-[450px] h-96 bg-white flex flex-col md:flex-row">
        <div className="md:h-full relative md:w-9/12 w-full h-1/2">
          <Image
            src={data?.mainImage.asset.url}
            layout="fill"
            objectFit="cover"
            className="md:rounded-s-2xl rounded-t-xl"
            alt="image"
          />
        </div>
        <div className="md:p-10 p-5 md:w-2/6 w-full flex flex-col justify-between">
          <div className="underline md:no-underline">
            <p className="font-roboto font-medium text-gray-600 md:text-lg text-base">
              {data?.categories?.[0]?.title}
            </p>
            <h1 className="font-poppins font-bold md:text-4xl text-xl mt-1 text-gray-800">
              {data?.title}
            </h1>
          </div>
          <p className="font-roboto font-medium text-gray-600 md:text-lg text-base mt-5">
            {data?.publishedAt.split("T")[0]}
          </p>
        </div>
      </div>
    </Link>
  );
}
