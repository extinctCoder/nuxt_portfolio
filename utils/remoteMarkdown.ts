import markdownParser from "@nuxt/content/transformers/markdown";

export const markdownConverter = (file_key: string, markdown_file: any) => {
  return markdownParser.parse("Readme.md", markdown_file, {});
};

const loadMarkdown = async (file_url: string) => {
  const data = await $fetch(file_url);
  return await markdownConverter(file_url, await $fetch(file_url));
};

export default loadMarkdown;
