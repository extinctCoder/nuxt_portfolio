// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-headlessui",
    "@nuxt/image",
    "nuxt-icon",
  ],
  // image: {
  //   // Options
  // },
  tailwindcss: {
    cssPath: "~/assets/tailwind.css",
  },
});
