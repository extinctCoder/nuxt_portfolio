<template>
  <div>this is catch all : {{ $route.params.slug }}</div>
  <div class="prose">
    <!-- <ContentDoc /> -->
    <ContentRenderer :value="post"></ContentRenderer>
    <br />
    <br />
    <br />
    {{ data }}
    <br />
    <br />
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
