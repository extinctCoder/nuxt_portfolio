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
  // runtimeConfig: {
  //   public: {
  //     GQL_HOST: "https://api.github.com/graphql",
  //     GQL_TOKEN_NAME: "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",
  //     GQL_HEADERS: { "User-Agent": "Nuxt Portfolio App" },
  //   },
  // },
  runtimeConfig: {
    public: {
      "graphql-client": {
        clients: {
          default: {
            host: "https://api.github.com/graphql",
            headers: {
              "User-Agent": "Nuxt Portfolio App 2",
            },
            token: {
              type: "Bearer",
              name: "Authorization",
              value: "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",
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
