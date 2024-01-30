// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,
    timeline: {
      enabled: true,
    },
  },
  extends: [],
  modules: ["nuxt-primevue", "@nuxtjs/tailwindcss"],
  primevue: {
    /* Options */
  },
  css: ["primevue/resources/themes/aura-light-green/theme.css"],
});
