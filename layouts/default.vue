<template>
  <div data-theme="light" class="flex h-screen overflow-hidden">
    <SideNav />
    <div class="flex w-full flex-col">
      <Header />
      <div class="w-full overflow-y-auto scroll-smooth bg-gray-400">
        <div class="container mx-auto"><slot /></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
