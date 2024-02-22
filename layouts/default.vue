<template>
  <div
    class="flex h-screen flex-row font-lato prose-p:text-justify"
    :data-theme="$colorMode.value"
  >
    <!-- <div class="flex w-10/12 min-w-64 max-w-96 flex-col bg-base-200 lg:w-96"> -->
    <div
      class="md:w-12/12 hidden h-full w-10/12 min-w-64 bg-base-200 md:max-w-96 lg:flex lg:w-3/12"
    >
      <!-- sidenav bar position -->
      <ShellSideNav />
    </div>
    <div class="flex w-full flex-col gap-1">
      <!-- header position -->
      <ShellHeader />
      <div class="flex-1 overflow-y-auto">
        <div class="container mx-auto px-2">
          <slot />
        </div>
      </div>
      <!-- footer position -->
      <!-- <footer>Handcrafted with love and passion.</footer> -->
    </div>
  </div>
  <Dialog
    as="div"
    class="relative z-10 font-lato"
    @close="sidebarStore.navOpen = false"
    :open="sidebarStore.navOpen"
  >
    <div class="= fixed inset-0 flex">
      <DialogPanel
        as="div"
        class="md:w-12/12 flex h-full w-10/12 min-w-64 bg-base-200 md:max-w-96 lg:w-3/12"
      >
        <ShellSideNav />
      </DialogPanel>
      <div class="w-full bg-base-100 bg-opacity-80 transition-opacity">
        <button
          @click="sidebarStore.navOpen = false"
          class="btn btn-error ms-4 mt-2"
        >
          <Icon name="heroicons:x-mark-solid" />
        </button>
      </div>
    </div>

    <!-- <div class="fixed inset-0 overflow-hidden">
      <div class="absolute inset-0 overflow-hidden">
        <div class="pointer-events-none fixed inset-y-0 flex max-w-full">
          <DialogPanel class="pointer-events-auto relative w-screen max-w-md">
            <div class="absolute left-72 top-8">
              <button @click="open = false" class="btn btn-error">
                <Icon name="heroicons:x-mark-solid" />
              </button>
            </div>

            <div
              class="md:w-12/12 flex h-full w-10/12 min-w-64 bg-base-200 md:max-w-96 lg:w-3/12"
            >
              <ShellSideNav />
            </div>
          </DialogPanel>
        </div>
      </div>
    </div> -->
  </Dialog>
</template>

<script lang="ts" setup>
import { Dialog, DialogPanel } from "@headlessui/vue";
const sidebarStore = useSidebarStore();
</script>

<style></style>
