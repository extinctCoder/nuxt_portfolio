<!-- <template>
  <div data-theme="light" class="flex h-screen overflow-hidden">
    <SideNav />
    <div class="flex w-full flex-col">
      <Header />
      <div class="w-full overflow-y-auto scroll-smooth bg-gray-400">
        <div class="container mx-auto"><slot /></div>
      </div>
    </div>
  </div>
</template> -->
<template>
  <div className="drawer lg:drawer-open">
    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
    <div className="drawer-content flex flex-col items-center justify-center">
      {/* Page content here */}
      <label
        htmlFor="my-drawer-2"
        className="btn btn-primary drawer-button lg:hidden"
        >Open drawer</label
      >
    </div>
    <div className="drawer-side">
      <label
        htmlFor="my-drawer-2"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <SideNav />
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
