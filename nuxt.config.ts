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
    // provider: "ipxStatic",
    // format: ["webp"],
    // ipxStatic: {
    //   baseURL: "",
    // },
  },
  tailwindcss: {
    cssPath: "~/assets/tailwind.css",
  },
});
