<template>
  <div>this is catch all : {{ $route.params.slug }}</div>
  <div class="prose">
    <ContentDoc />
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "post-list",
});
</script>

<style></style>
