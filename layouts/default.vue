<template>
  <div data-theme="light" class="flex h-screen overflow-hidden bg-gray-400">
    <SideNav />
    <!-- <div class="flex flex-col"> -->
    <!-- <Header /> -->
    <div class="w-full overflow-y-auto scroll-smooth">
      <div class="container mx-auto"><slot /></div>
    </div>
    <!-- </div> -->
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
