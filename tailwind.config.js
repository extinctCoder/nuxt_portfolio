/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    "./node_modules/flowbite/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      // primary: "#FF6363",
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "100%",
          },
        },
      },
      aspectRatio: {
        "4/3": "4 / 3",
        "16/9": "16 / 9",
        "21/9": "21 / 9",
      },
    },
  },
  plugins: [
    require("daisyui"),
    require("@tailwindcss/typography"),
    // require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    // require("@tailwindcss/container-queries"),
    // require("flowbite/plugin"),
  ],
  daisyui: {
    themes: ["light", "dark", "dracula"],
  },
};
