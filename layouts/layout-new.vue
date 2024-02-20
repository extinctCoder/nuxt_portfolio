<template>
  <div
    class="flex h-screen flex-row font-lato prose-p:text-justify"
    :data-theme="$colorMode.value"
  >
    <div class="flex w-10/12 min-w-64 max-w-96 flex-col bg-base-200 lg:w-96">
      <!-- sidenav bar position -->
      <ShellSideNav />
    </div>
    <div class="flex w-full flex-col gap-1">
      <!-- header position -->
      <ShellHeader />
      <div class="flex-1 overflow-y-auto">
        <div class="container mx-auto px-2">
          <slot />
        </div>
      </div>
      <!-- footer position -->
      <!-- <footer>this is</footer> -->
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
