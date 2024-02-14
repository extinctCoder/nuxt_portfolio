<template>
  <!-- <template> -->
  <!-- <div class="prose mx-auto max-w-none"> -->
  <!-- <div class="prose max-w-none">
    <ContentRenderer :value="post"></ContentRenderer>
  </div>
  <TableOfContent :children="post.body.toc.links" />
  {{ post.body.toc }} -->
  <!-- </template> -->
  <!-- <template #toc>toc</template> -->
</template>

<script setup>
// definePageMeta({
//   layout: "post-single",
// });
const { path } = useRoute();
const { data: post } = await useAsyncData(path, () =>
  queryContent().where({ _path: path }).findOne(),
);
</script>

<style></style>
