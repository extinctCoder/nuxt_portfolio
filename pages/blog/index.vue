<template>
  <Card />
</template>

<script setup lang="ts">
definePageMeta({
  layout: "post-list",
});
const { data: posts } = await useAsyncData("posts", () =>
  queryContent("/blog").find(),
);
</script>

<style></style>
