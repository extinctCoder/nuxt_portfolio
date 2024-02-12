<template>
  <NuxtImg
    width="1920"
    height="1280"
    src="/images/blog/clement-helardot-95YRwf6CNw8-unsplash.jpg"
  />
  <NuxtPicture
    width="1920"
    height="1280"
    src="/images/blog/clement-helardot-95YRwf6CNw8-unsplash.jpg"
  />
  <!-- <div v-for="post in posts" :key="post._path">
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
  <Card></Card> -->
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
