<template>
  <div
    class="flex min-h-full w-10/12 min-w-64 max-w-96 flex-col gap-2 bg-white p-4 text-base-content lg:w-96"
  >
    <div class="flex grow flex-col justify-around bg-slate-400">
      <SidebarIcon />
      <SidebarMenu />
    </div>
    <!-- <SidebarCard /> -->
    <SidebarFooter />
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
