<template>
  <div class="card border bg-base-100 lg:card-side">
    <div class="card-body">
      <h2 class="card-title">New album is released!</h2>
      <p>
        <TestBed />
      </p>
      <div class="card-actions justify-end">
        <!-- <button class="btn btn-primary">Listen</button> -->
      </div>
    </div>
    <figure class="w-1/3">
      <img
        src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
        alt="Album"
      />
    </figure>
  </div>
  <div class="border">
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
</template>

<script lang="ts" setup></script>

<style></style>
