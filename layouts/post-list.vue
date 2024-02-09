<template>
  <div class="flex gap-8">
    <div class="flex grow flex-col gap-4 bg-gray-400">
      <slot />
    </div>
    <div class="w-72 flex-none">
      <div class="sticky top-0">
        <ul class="menu">
          <li>
            <h2 class="menu-title">Recently Updated</h2>
            <ul>
              <li><NuxtLink>Writing a New Post</NuxtLink></li>
              <li><NuxtLink>Item 2</NuxtLink></li>
              <li><NuxtLink>Item 3</NuxtLink></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
