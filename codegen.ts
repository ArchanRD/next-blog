import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://ujnqr2tp.api.sanity.io/v1/graphql/production/default",
  documents: "sanity/**/*.graphql",
  generates: {
    "sanity/gql/": {
      preset: "client",
      plugins: ["typescript", "typescript-operations"],
    },
    
  },
};

export default config;
