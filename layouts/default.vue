<!-- <template>
  <div data-theme="light" class="flex h-screen overflow-hidden">
    <SideNav />
    <div class="flex w-full flex-col">
      <Header />
      <div class="w-full overflow-y-auto scroll-smooth bg-gray-400">
        <div class="container mx-auto"><slot /></div>
      </div>
    </div>
  </div>
</template> -->
<template>
  <div class="drawer lg:drawer-open">
    <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content flex flex-col items-center overflow-hidden">
      <Header />
      <div class="w-full overflow-y-auto scroll-smooth bg-gray-400">
        <div class="container mx-auto"><slot /></div>
      </div>
    </div>
    <div class="drawer-side">
      <label
        htmlFor="my-drawer-2"
        aria-label="close sidebar"
        class="drawer-overlay"
      ></label>
      <SideNav />
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
