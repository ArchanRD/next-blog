import { GraphQLClient } from "graphql-request";

export const graphqlClient = new GraphQLClient(
  process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT as string,
  {
    headers: {
      "x-api-key": process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT as string,
    },
  }
);
