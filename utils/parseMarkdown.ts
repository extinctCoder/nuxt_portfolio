// @ts-expect-error

// import markdownParser from "@nuxt/content/transformers/markdown";

// export const parseMarkdown = (markdown_file: string) =>
//   return {markdownParser.parse("README.md", markdown_file);}

// @ts-expect-error
import markdownParser from "@nuxt/content/transformers/markdown";

export const parseMarkdown = (md: string) =>
  markdownParser.parse("custom.md", md);
