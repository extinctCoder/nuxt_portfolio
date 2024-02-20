<template>
  {{ github }}
  this is home page
</template>

<script lang="ts" setup>
const { data: github } = await useAsyncGql({
  operation: "github",
});
definePageMeta({
  layout: "default",
});
</script>

<style></style>
