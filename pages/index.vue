<template>
  {{ github }}
  <h1>Color mode: {{ $colorMode.value }}</h1>
  <select v-model="$colorMode.preference">
    <option value="system">System</option>
    <option value="light">Light</option>
    <option value="dracula">dracula</option>
    <option value="cupcake">cupcake</option>
  </select>
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
