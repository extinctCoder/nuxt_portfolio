<template>
  <div class="flex gap-8">
    <div class="flex grow flex-col gap-4 bg-gray-400">
      <slot />
    </div>
    <div class="w-72 flex-none bg-stone-400">
      <div class="sticky top-0">
        <ul class="menu bg-base-200">
          <li>
            <h2 class="menu-title">Recently Updated</h2>
            <ul>
              <li><a>Item 1</a></li>
              <li><a>Item 2</a></li>
              <li><a>Item 3</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
