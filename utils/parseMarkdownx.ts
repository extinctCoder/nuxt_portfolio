// @ts-expect-error

import markdownParser from "@nuxt/content/transformers/markdown";

export const parseMarkdown = (markdown_file: string) =>
  markdownParser.parse("README.md", markdown_file);
