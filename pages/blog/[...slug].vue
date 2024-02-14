<template>
  <div class="prose mx-auto max-w-none">
    <ContentRenderer :value="post"></ContentRenderer>
  </div>
  <TableOfContent
    :id="post.body.toc.id"
    :depth="post.body.toc.depth"
    :text="post.body.toc.text"
    :children="post.body.toc.links"
  />
  {{ post.body.toc }}
</template>

<script setup>
definePageMeta({
  layout: "post-list",
});
const { path } = useRoute();
const { data: post } = await useAsyncData(path, () =>
  queryContent().where({ _path: path }).findOne(),
);
</script>

<style></style>
