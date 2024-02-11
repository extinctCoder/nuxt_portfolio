<template>
  <div>this is catch all : {{ $route.params.slug }}</div>
  <div class="prose">
    <!-- <ContentDoc /> -->
    <ContentRenderer :value="data.body"></ContentRenderer>
    <br />
    <br />
    <br />
    {{ data.body }}
    <br />
    <br />
  </div>
</template>

<script setup>
definePageMeta({
  layout: "post-list",
});
const { path } = useRoute();
const { data } = await useAsyncData(path, () =>
  queryContent().where({ _path: path }).findOne(),
);
</script>

<style></style>
