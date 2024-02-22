<template>
  <div class="flex flex-col items-center gap-2 py-6 md:py-16 lg:py-24">
    <div class="avatar">
      <div
        class="m-2 w-32 rounded-xl ring ring-primary ring-offset-2 ring-offset-base-100"
      >
        <!-- <NuxtImg :src="bio.user?.avatarUrl" /> -->
      </div>
    </div>
    <NuxtLink href="/" class="text-wrap text-center text-2xl font-bold">
      <!-- {{ bio.user?.name }} -->
    </NuxtLink>
    <span class="text-center font-normal italic">
      <!-- {{ bio.user?.bio }} -->
    </span>
  </div>
</template>

<script lang="ts" setup>
// const { data: bio } = await useAsyncGql({
//   operation: "GHBio",
//   variables: { login: "extinctCoder" },
// });
</script>

<style></style>
