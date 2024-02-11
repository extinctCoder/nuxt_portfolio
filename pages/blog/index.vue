<template>
  <div v-for="post in posts" :key="post._path">
    <Card :title="post.title" :body_text="post.description"></Card>
  </div>
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
