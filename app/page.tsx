import React from "react";
import FeaturedBlogs from "./components/FeaturedBlogs";
import request, { gql } from "graphql-request";
import BlogCard from "./components/BlogCard";

const document = gql`
  query GetAllPostsQuery {
    allPost {
      title
      slug {
        current
      }
      mainImage {
        asset {
          url
        }
      }
      categories {
        title
      }
      publishedAt
      bodyRaw
      author {
        name
        slug {
          current
        }
        image {
          asset {
            url
          }
        }
      }
    }
  }
`;

type Props = {};

export default async function Home(props: Props) {
  const data = (await request(
    "https://ujnqr2tp.api.sanity.io/v1/graphql/production/default",
    document
  )) as any;
  console.log(data.allPost[0].bodyRaw[0]);
  return (
    <div className="max-w-7xl mx-auto w-full px-5 md:px-0">
      <h1 className="font-roboto font-bold text-gray-800 my-5 text-2xl md:text-4xl md:my-8">
        Latest Blog
      </h1>
      <FeaturedBlogs data={data?.allPost[0]} />
      <h2 className="font-roboto font-bold text-gray-800 mt-10 text-2xl md:text-4xl md:my-8">
        Blogs
      </h2>
      <div className="my-5 md:my-10 flex flex-col md:flex-row gap-10 sm:flex-row">
        {data?.allPost?.map((post: any, index: number) => {
          return (
            <BlogCard
              title={post.title}
              slug={post.slug.current}
              categories={post.categories}
              mainImage={post.mainImage}
              publishedAt={post.publishedAt}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}
