<template>
  <div v-for="post in posts" :key="post._path">
    {{ post.title }}
  </div>
  <Card />
  {{ posts }}
</template>

<script setup lang="ts">
definePageMeta({
  layout: "post-list",
});
const { path } = useRoute();
const { data: posts } = await useAsyncData(path, () =>
  queryContent("/blog").find(),
);
</script>

<style></style>
