<template>
  <div class="prose mx-auto bg-red-400">
    <!-- <ContentDoc /> -->
    <ContentRenderer :value="post"></ContentRenderer>
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
