<template>
  <Card
    :to="post._path"
    :heading="post.title"
    :body_text="post.description"
    :publish_date="post.published_at"
    :image="post.cover"
    :tags="post.tags"
    :key="post._path"
    v-for="post in posts"
  ></Card>
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
