<template>
  <div class="flex gap-8">
    <div class="flex flex-col gap-4 bg-gray-400">
      <slot />
    </div>
    <div class="w-10/12 bg-stone-600">
      <ul class="menu w-56 rounded-box bg-base-200">
        <li>
          <h2 class="menu-title">Title</h2>
          <ul>
            <li><a>Item 1</a></li>
            <li><a>Item 2</a></li>
            <li><a>Item 3</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
  <div></div>
</template>

<script lang="ts" setup></script>

<style></style>
