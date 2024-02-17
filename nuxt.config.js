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
  ],
  runtimeConfig: {
    public: {
      GQL_HOST: "https://beta.pokeapi.co/graphql/v1beta",
    },
  },
  content: {
    highlight: {
      theme: "dracula",
      langs: ["js", "ts", "python", "html", "css", "mermaid", "math"],
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

    // baseURL: "/api/_content",
  },
  image: {
    inject: true,
    // provider: "ipxStatic",
    // format: ["webp"],
    // ipxStatic: {
    //   baseURL: "",
    // },
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
});
