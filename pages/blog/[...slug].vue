<template>
  <Post>
    <template #post-body>
      {{ post.title }}
      <ContentRenderer :value="post"></ContentRenderer>
    </template>
    <template #toc><TableOfContent :children="post.body.toc.links" /></template>
  </Post>
  {{ path }}
</template>

<script setup>
const { path } = useRoute();
const { data: post } = await useAsyncData(path, () =>
  queryContent().where({ _path: path }).findOne(),
);
</script>

<style></style>
