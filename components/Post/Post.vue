<template>
  <div class="flex gap-4">
    <div class="mt-6 flex flex-col gap-6">
      <slot name="post-hero" />
      <div class="prose w-full max-w-none prose-p:text-justify">
        <slot name="post-body" />
      </div>
    </div>

    <div class="w-10/12 min-w-64 max-w-96">
      <slot name="toc" />
    </div>
  </div>
  <!-- <div class="hidden flex-1 bg-zinc-400 lg:block">
       <div class="sticky top-0"> 

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
      </div> 
    </div> -->
</template>

<script lang="ts" setup></script>

<style></style>
