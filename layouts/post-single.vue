<template>
  <!-- <div> -->
  <NuxtLayout name="default">
    <div class="flex gap-8">
      <div class="flex w-10/12 flex-auto flex-col gap-4">
        <slot />
      </div>
      <div class="hidden w-72 flex-auto lg:block">
        <!-- <div class="sticky top-0"> -->
        post single
        <slot name="toc" />
        <!-- <ul class="menu">
              <li>
                <h2 class="menu-title">Recently Updated</h2>
                <ul>
                  <li><NuxtLink>Writing a New Post</NuxtLink></li>
                  <li><NuxtLink>Getting Started</NuxtLink></li>
                  <li><NuxtLink>Text and Typography</NuxtLink></li>
                  <li><NuxtLink>Customize the Favicon</NuxtLink></li>
                </ul>
              </li>
            </ul> -->
        <!-- </div> -->
      </div>
    </div>
  </NuxtLayout>
  <!-- </div> -->
</template>

<script lang="ts" setup></script>

<style></style>
