<template>
  <div class="flex h-16 flex-row gap-4 bg-base-100 p-2">
    <div class="inline-flex w-12 items-center justify-center lg:hidden">
      <button
        @click="sidebarStore.navOpen = true"
        class="btn btn-square btn-ghost"
      >
        <Icon name="heroicons:bars-3-solid" class="inline-block h-6 w-6" />
      </button>
    </div>
    <div class="inline-flex flex-1">
      <button class="btn-block btn btn-ghost w-full">block</button>
    </div>
    <div class="flex flex-row gap-1">
      <div class="inline-flex w-12 items-center justify-center">
        <button class="btn btn-square btn-ghost">
          <Icon name="heroicons:bars-3-solid" class="inline-block h-6 w-6" />
        </button>
      </div>
      <div class="inline-flex w-12 items-center justify-center">
        <button class="btn btn-square btn-ghost">
          <Icon name="heroicons:bars-3-solid" class="inline-block h-6 w-6" />
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const sidebarStore = useSidebarStore();
</script>

<style></style>
