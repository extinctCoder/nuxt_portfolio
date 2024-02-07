<template>
  <div class="navbar bg-base-100">
    <div class="flex-none">
      <label htmlFor="my-drawer-2" className="btn btn-square ">
        <Icon name="heroicons:bars-3-solid" class="inline-block h-5 w-5" />
      </label>
      <button className="btn btn-square">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <!-- <button class="btn"></button> -->
    </div>
    <div class="flex-1">
      <a class="btn btn-ghost text-xl">daisyUI</a>
    </div>
    <div class="flex-none">
      <button class="btn btn-square btn-ghost">
        <Icon name="heroicons:bars-3-solid" class="inline-block h-5 w-5" />
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
