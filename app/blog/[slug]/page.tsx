import BlogPostHeader from "@/app/components/BlogPostHeader";
import request, { gql } from "graphql-request";
import React from "react";
import { PortableText, PortableTextComponents } from "@portabletext/react";

export default async function BlogPost({ params }: any) {
  const components: PortableTextComponents = {
    block: {
      h2: ({ children }) => (
        <h2 className="text-gray-800 font-medium font-roboto text-2xl mt-5">
          {children}
        </h2>
      ),
      p: ({ children }) => (
        <p className="text-gray-600 font-roboto text-lg my-2">{children}</p>
      ),
    },
  };
  const document = gql`
  query GetPostData {
    allPost(
      where: {
        slug: {
          current: {
            eq: "${params.slug}"
          }
        }
      }
    ) {
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
        bioRaw
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
  const data = (await request(
    process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT as string,
    document
  )) as any;
  console.log(data?.allPost?.[0].author);
  return (
    <div className="max-w-7xl mx-auto w-full mt-10 px-5">
      <BlogPostHeader
        category={data?.allPost?.[0]?.categories?.[0]?.title}
        date={data?.allPost?.[0]?.publishedAt.split("T")[0]}
        heading={data?.allPost?.[0]?.title}
        image={data?.allPost?.[0]?.mainImage?.asset?.url}
        author={data?.allPost?.[0]?.author}
      />
      <div>
        <div className="mt-5">
          <PortableText
            value={data?.allPost?.[0]?.bodyRaw}
            components={components}
          />
        </div>
      </div>
    </div>
  );
}
