<template>
  <div class="flex min-h-full w-96 min-w-64 flex-col gap-2 bg-white p-4">
    <div class="flex flex-col items-center justify-center bg-red-400">
      <div class="avatar">
        <div
          class="m-2 w-36 rounded-xl ring ring-primary ring-offset-2 ring-offset-base-100"
        >
          <NuxtImg src="https://avatars.githubusercontent.com/u/16348041" />
        </div>
      </div>
      <div class="prose flex flex-col items-center justify-center text-center">
        <h1>Chirpy</h1>
        <h3>Sabbir Ahmed Shourov</h3>
      </div>
    </div>
    <div class="grow bg-green-300"></div>
    <SidebarFooter />
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
