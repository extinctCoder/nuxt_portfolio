// @ts-expect-error

import markdownParser from "@nuxt/content/transformers/markdown";

export const parseMarkdown = (md: string) =>
  markdownParser.parse("custom.md", md);
