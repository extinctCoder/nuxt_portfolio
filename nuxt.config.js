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
  ],
  content: {
    // My custom configuration
  },
  // image: {
  //   // Options
  // },
  tailwindcss: {
    cssPath: "~/assets/tailwind.css",
  },
});
