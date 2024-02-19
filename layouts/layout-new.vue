<template>
  <div
    class="flex h-screen max-w-none flex-row font-lato prose-p:text-justify"
    :data-theme="$colorMode.value"
  >
    <div class="w-10/12 min-w-64 max-w-96 flex-col bg-base-200 p-4 lg:w-96">
      <!-- sidenav bar position -->
      <ShellSideNav />
    </div>

    <div class="flex w-full flex-col gap-1">
      <!-- header position -->
      <ShellHeader />
      <div class="container mx-auto flex-1 overflow-y-auto bg-green-400 px-2">
        <slot />
      </div>
      <!-- footer position -->

      <footer>this is</footer>
    </div>
    <!-- <div class="flex flex-1 flex-col">
      <Header />
      <div class="flex-1 overflow-y-auto p-6">
        <slot />
      </div>
      <div class="bg-green-600 px-6 py-4 text-white">Footer Content</div> 
    </div> -->
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
