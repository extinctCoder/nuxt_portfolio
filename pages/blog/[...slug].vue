<template>
  <div class="prose mx-auto max-w-none">
    <ContentRenderer :value="post"></ContentRenderer>
  </div>
  <NuxtLink v-if="prev" :to="prev._path">{{ prev.title }}</NuxtLink>
  <NuxtLink v-if="next" :to="next._path">{{ next.title }}</NuxtLink>
  {{ prev }}
  hi
</template>

<script setup>
definePageMeta({
  layout: "post-list",
});
const { path } = useRoute();
const { data: post } = await useAsyncData(path, () =>
  queryContent().where({ _path: path }).findOne(),
);
const { prev, next } = useContent();
</script>

<style></style>
