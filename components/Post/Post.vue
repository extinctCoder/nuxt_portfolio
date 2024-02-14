<template>
  <div class="flex gap-4">
    <div class="flex flex-col gap-4">
      <div class="relative rounded">
        <NuxtImg
          class="aspect-21/9 max-h-64 w-full object-cover object-center opacity-5 blur"
          src="/images/blog/mountains_2.jpg"
        />
        <div class="absolute bottom-0 flex w-full flex-row justify-between p-4">
          <div class="prose">
            <p>Your text here</p>
            <p>Your text here</p>
          </div>
          <div class="prose">
            <p>Your text here</p>
            <p>Your text here</p>
          </div>
        </div>
      </div>
      <div class="prose w-full max-w-none bg-green-400 prose-p:text-justify">
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
