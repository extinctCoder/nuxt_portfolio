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
