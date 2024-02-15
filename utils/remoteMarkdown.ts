export default function () {
  return "Hello Util";
}

// const loadMarkdown = async () => {
//   const markdown_data = await $fetch(
//     "https://raw.githubusercontent.com/extinctCoder/markdown-cv/master/README.md",
//   );

// markdownParser.parse("README.md", markdown_file);
// return await parseMarkdown(markdown_data);
// };
// const parseMarkdown = (markdown_string: string) =>
//   return markdownParser.parse("README.md", markdown_string);

// import { ref } from "vue";

// import markdownParser from "@nuxt/content/transformers/markdown";

// const loadMarkdown = async () => {
//   const result = ref(null);
//   const data = await $fetch(
//     "https://raw.githubusercontent.com/extinctCoder/markdown-cv/master/README.md",
//   );
//   result.value = await markdownParser.parse("README.md", data);
//   return result;
// };

// export default loadMarkdown;

// const result = ref(null);
// const loadMarkdown = async () => {
//   const data = await $fetch("/hello.md");
//   result.value = await parseMarkdown(data);
// };
// loadMarkdown();
