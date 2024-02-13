<template>
  <div class="prose mx-auto max-w-none">
    <ContentRenderer :value="post"></ContentRenderer>
    {{ post.body.toc }}
    <br />
    <br />
    <br />
    title: {{ post.body.toc.title }}
    <br />
    links:
    {{ post.body.toc.links }}
  </div>
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
