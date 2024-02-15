// @ts-expect-error
import markdownParser from "@nuxt/content/transformers/markdown";

const loadMarkdown = async () => {
  const markdown_data: string = await $fetch(
    "https://raw.githubusercontent.com/extinctCoder/markdown-cv/master/README.md",
  );

  markdownParser.parse("README.md", markdown_file);
  return await parseMarkdown(markdown_data);
};

// export default loadMarkdown;

// @ts-expect-error

import markdownParser from "@nuxt/content/transformers/markdown";

export const parseMarkdown = (markdown_file: string) =>
  markdownParser.parse("README.md", markdown_file);
