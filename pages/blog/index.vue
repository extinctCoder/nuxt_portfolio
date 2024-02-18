<template>
  <CardSkeleton v-if="pending" />
  <Card
    :to="post._path"
    :heading="post.title"
    :body_text="post.description"
    :publish_date="post.published_at"
    :image="post.cover"
    :tags="post.tags"
    :key="post._path"
    v-for="post in posts"
    v-if="!pending"
  ></Card>
</template>

<script setup lang="js">
definePageMeta({
  layout: "post-list",
});
const { path } = useRoute();
const { data: posts, pending } = await useAsyncData(path, () =>
  queryContent(path).find(),
);
</script>

<style></style>
