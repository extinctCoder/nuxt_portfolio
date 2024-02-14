<template>
  <div class="prose mx-auto max-w-none">
    <ContentRenderer :value="post"></ContentRenderer>
  </div>
  <TableOfContent :children="post.body.toc.links" />
  {{ post.body.toc }}
</template>
<template v-slot:toc>toc</template>

<script setup>
definePageMeta({
  layout: "post-single",
});
const { path } = useRoute();
const { data: post } = await useAsyncData(path, () =>
  queryContent().where({ _path: path }).findOne(),
);
</script>

<style></style>
