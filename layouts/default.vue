<template>
  <div class="drawer lg:drawer-open">
    <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">
      <Header />
      <div class="container mx-auto mt-4 px-8"><slot /></div>
    </div>
    <div class="drawer-side border-r">
      <label
        for="my-drawer-2"
        aria-label="close sidebar"
        class="drawer-overlay"
      ></label>
      <SideNav />
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
