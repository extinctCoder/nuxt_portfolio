<template>
  <div class="flex gap-8 bg-red-400">
    <div class="flex w-9/12 flex-col gap-4 bg-green-400">
      <div class="prose mx-auto max-w-none bg-amber-300">
        <slot name="post-body" />
      </div>
    </div>
    <div class="hidden flex-1 bg-zinc-400 lg:block">
      <!-- <div class="sticky top-0"> -->

      <ul class="menu">
        <li>
          <h2 class="menu-title">Recently Updated</h2>
          <ul>
            <li><NuxtLink>Writing a New Post</NuxtLink></li>
            <li><NuxtLink>Getting Started</NuxtLink></li>
            <li><NuxtLink>Text and Typography</NuxtLink></li>
            <li><NuxtLink>Customize the Favicon</NuxtLink></li>
          </ul>
        </li>
      </ul>
      <slot name="toc" />
      <!-- </div> -->
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
