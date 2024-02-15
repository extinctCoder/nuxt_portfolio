<template>
  {{ countries }}
</template>

<script lang="ts" setup>
const { data: countries } = await useAsyncGql({
  operation: "countries",
});
</script>

<style></style>
