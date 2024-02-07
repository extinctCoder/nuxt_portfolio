<template>
  <div class="navbar bg-gray-300">
    <div class="flex-none">
      <button class="btn btn-square btn-ghost"></button>
    </div>

    <label
      htmlFor="my-drawer-2"
      class="btn btn-primary drawer-button lg:hidden"
    >
      <Icon name="heroicons:home-solid"
    /></label>
    <div class="flex-1">
      <a class="btn btn-ghost text-xl">daisyUI</a>
    </div>
    <div class="flex-none">
      <button class="btn btn-square btn-ghost">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          class="inline-block h-5 w-5 stroke-current"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
          ></path>
        </svg>
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
