<template>
  <div
    class="flex cursor-pointer flex-col-reverse gap-2 overflow-hidden rounded border lg:flex-row lg:justify-between"
  >
    <div class="flex flex-1 flex-col justify-between gap-6 p-4">
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-3">
          <div class="skeleton h-8 w-1/2 rounded-none"></div>
          <div class="flex flex-col gap-1">
            <div class="skeleton h-4 w-full rounded-none"></div>
            <div class="skeleton h-4 w-full rounded-none"></div>
            <div class="skeleton h-4 w-3/4 rounded-none"></div>
          </div>
        </div>
      </div>
      <div class="flex justify-between">
        <div class="prose flex flex-wrap gap-8">
          <div class="inline-flex items-center gap-2">
            <div class="skeleton h-4 w-4 rounded-none"></div>
            <div class="skeleton h-4 w-28 rounded-none"></div>
          </div>
          <div class="inline-flex items-center gap-2">
            <div class="skeleton h-4 w-4 rounded-none"></div>
            <div class="skeleton h-4 w-12 rounded-none"></div>
            <div class="skeleton h-4 w-12 rounded-none"></div>
            <div class="skeleton h-4 w-12 rounded-none"></div>
          </div>
        </div>
        <div class="inline-flex items-center gap-2">
          <div class="skeleton h-4 w-4 rounded-none"></div>
        </div>
      </div>
    </div>
    <div
      class="skeleton aspect-21/9 max-h-56 rounded-none lg:aspect-4/3 lg:h-full"
    ></div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
