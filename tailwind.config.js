/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          linkedin: "#0077B5",
          whatsapp: "#075E54",
          fiverr: "#00B22D",
          github: "#333333",
          gitlab: "#FC6D26",
          google: "#4285f4",
          facebook: "#3B5998",
          messenger: "#0084FF",
          discord: "#5865F2",
          instagram: "#E1306C",
          reddit: "#FF4500",
          telegram: "#0088CC",
          twitter: "#1DA1F2",
          ubuntu: "#DD4814",
          wikipedia: "#000000",
          youtube: "#FF0000",
          android: "#A4C639",
        },
      },
      fontFamily: {
        lato: "Lato",
        inter: "Inter",
        roboto: "Roboto",
        fira_sans: "Fira Sans",
        dancing_script: "Dancing Script",
      },

      aspectRatio: {
        "4/3": "4 / 3",
        "3/2": "3 / 2",
        "16/9": "16 / 9",
        "12/5": "12 / 5",
        "21/9": "21 / 9",
        "32/9": "32 / 9",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/container-queries"),
    require("daisyui"),
  ],
  daisyui: {
    themes: ["light", "dracula", "cupcake"],
    darkTheme: "dracula",
    styled: true,
    utils: false,
  },
};
