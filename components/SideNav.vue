<template>
  <div
    class="flex min-h-full w-96 min-w-64 flex-col justify-between gap-2 bg-white p-4"
  >
    <div class="flex flex-col items-center justify-center gap-8 bg-red-400 p-4">
      <SidebarIcon />
    </div>
    <SidebarMenu />
    <div className="card bg-base-100 shadow-xl image-full">
      <figure>
        <img
          src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>

    <SidebarFooter />
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
