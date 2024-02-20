// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  typescript: {
    shim: false,
  },
  modules: [
    "@nuxt/image",
    "@nuxtjs/tailwindcss",
    "nuxt-headlessui",
    "nuxt-icon",
    "@nuxt/content",
    "nuxt-graphql-client",
    "@nuxtjs/google-fonts",
    "@pinia/nuxt",
    "@nuxtjs/color-mode",
  ],
  runtimeConfig: {
    public: {
      "graphql-client": {
        clients: {
          default: {
            host: process.env.GQL_HOST,
            headers: {
              "User-Agent": "Nuxt Portfolio App",
            },
            token: {
              type: "Bearer",
              name: "Authorization",
              value: process.env.GQL_API_KEY,
            },
          },
        },
      },
    },
  },
  content: {
    highlight: {
      theme: "dracula",
      // langs: ["js", "ts", "python", "html", "css", "mermaid", "math"],
    },
    markdown: {
      // Object syntax can be used to override default options
      remarkPlugins: {
        "remark-gfm": true,
        "remark-oembed": {
          // Options
        },
      },
    },
  },
  image: {
    inject: true,
  },
  tailwindcss: {
    cssPath: "~/assets/tailwind.css",
  },
  googleFonts: {
    display: "swap",
    families: {
      "Fira Sans": true,
      Lato: true,
      Inter: true,
      Roboto: true,
      "Dancing Script": true,
    },
  },
  colorMode: { preference: "system" },
});
