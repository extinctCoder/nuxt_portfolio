<template>
  <div class="border-ro flex cursor-pointer gap-2 rounded border">
    <div class="flex flex-col justify-between gap-2 p-4">
      <div class="flex flex-col gap-4">
        <h2 class="card-title">New album is released!</h2>
        <TestBed />
      </div>
      <div class="flex justify-between">
        <div class="flex gap-4">
          <div class="inline-flex items-center gap-2">
            <Icon name="heroicons:calendar-solid" />
            <span>31/12/2006</span>
          </div>
          <div class="inline-flex items-center gap-2">
            <Icon name="heroicons:folder-open-solid" />
            <span>Blogging, Demo</span>
          </div>
        </div>
        <Icon name="heroicons:hand-thumb-up-solid" />
      </div>
    </div>
    <!-- <figure class="w-1/3 min-w-80 max-w-96">
      <NuxtImg
        src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
        alt="Album"
      />
    </figure> -->
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
