<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script lang="ts" setup>
useHead({
  title: "Portfolio App",

  meta: [{ name: "description", content: "This is my Portfolio." }],
  htmlAttrs: {
    lang: "en-US",
  },
  // bodyAttrs: {
  //   class: "test",
  // },
  // script: [{ innerHTML: "console.log('Hello world')" }],
});
</script>

<style></style>
