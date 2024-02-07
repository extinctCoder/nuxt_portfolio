<template>
  <div class="flex min-h-full w-96 min-w-64 flex-col gap-2 bg-white p-4">
    <div class="flex flex-col items-center justify-center gap-2 p-4">
      <div class="avatar">
        <div
          class="m-2 w-32 rounded-xl ring ring-primary ring-offset-2 ring-offset-base-100"
        >
          <NuxtImg src="https://avatars.githubusercontent.com/u/16348041" />
        </div>
      </div>
      <NuxtLink href="/" class="text-2xl font-bold"
        >Sabbir Ahmed Shourov</NuxtLink
      >
      <span class="font-normal italic">Senior Software Engineer, YGBL</span>
    </div>
    <div class="grow bg-green-300">
      <SidebarMenu />
    </div>
    <SidebarFooter />
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
