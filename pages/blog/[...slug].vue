<template>
  <div>this is catch all : {{ $route.params.slug }}</div>
  <ContentDoc />
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "post-list",
});
</script>

<style></style>
