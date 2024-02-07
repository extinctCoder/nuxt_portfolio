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
  <!-- <div className="drawer lg:drawer-open">
    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
    <div className="drawer-content flex flex-col items-center over">
      <Header />

      <div class="w-full overflow-y-auto scroll-smooth bg-gray-400">
        <div class="container mx-auto"><slot /></div>
      </div>
    </div>
    <div className="drawer-side">
      <label
        htmlFor="my-drawer-2"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <SideNav />
    </div>
  </div> -->
  <div class="drawer lg:drawer-open">
    <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content flex flex-col">
      <Header />
    </div>
    <div class="drawer-side">
      <label
        for="my-drawer-2"
        aria-label="close sidebar"
        class="drawer-overlay"
      ></label>
      <ul class="menu min-h-full w-80 bg-base-200 p-4 text-base-content">
        <!-- Sidebar content here -->
        <li><a>Sidebar Item 1</a></li>
        <li><a>Sidebar Item 2</a></li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
