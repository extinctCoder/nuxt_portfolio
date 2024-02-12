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
    "@nuxtjs/tailwindcss",
    "nuxt-headlessui",
    "@nuxt/image",
    "nuxt-icon",
    "@nuxt/content",
  ],
  content: {
    highlight: {
      theme: "dracula",
    },
    // baseURL: "/api/_content",
  },
  image: {
    inject: true,
    provider: "ipx",
    format: ["webp"],
    ipx: {
      baseURL: "http://localhost:3000",
    },
  },
  tailwindcss: {
    cssPath: "~/assets/tailwind.css",
  },
});
