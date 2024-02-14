<template>
  <div class="flex gap-4">
    <div class="flex flex-col gap-4">
      <div class="h-4 bg-red-400">
        <div
          class="aspect-21/9"
          style="
            background-image: url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg);
          "
        >
          <div class="hero-overlay bg-opacity-60"></div>
          <div class="hero-content text-center text-neutral-content">
            <div class="max-w-md">
              <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
              <p class="mb-5">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button class="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </div>
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
