<template>
  {{ pokemon }}
</template>

<script lang="ts" setup>
const { data: pokemon } = await useAsyncGql({
  operation: "pokemon",
});
</script>

<style></style>
