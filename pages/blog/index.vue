<template>
  <div v-for="post in posts" :key="post._path">
    <Card
      :to="post._path"
      :heading="post.title"
      :body_text="post.description"
      :publish_date="post.date"
      :image="post.cover"
      :tags="post.tags"
    ></Card>
  </div>
  <Card></Card>
  <Card></Card>
  <Card></Card>
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
