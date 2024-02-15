<template>
  {{ data }}
</template>

<script lang="ts" setup>
const data = await GqlCountries();
</script>

<style></style>
