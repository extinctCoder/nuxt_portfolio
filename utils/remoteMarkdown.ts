import markdownParser from "@nuxt/content/transformers/markdown";

export const markdownConverter = (file_key: string, markdown_file: any) => {
  return markdownParser.parse(file_key, markdown_file, {});
};

const loadMarkdown = async (file_url: string) => {
  return await markdownConverter(file_url, await $fetch(file_url));
};

export default loadMarkdown;
