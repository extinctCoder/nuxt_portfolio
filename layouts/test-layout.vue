<template>
  <div class="font-sans antialiased" data-theme="light">
    <div class="flex h-screen">
      <SideNav />
      <div class="flex flex-1 flex-col">
        <Header />
        <div class="flex-1 overflow-y-auto p-6">
          <slot />
        </div>
        <!-- <div class="bg-green-600 px-6 py-4 text-white">Footer Content</div> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
