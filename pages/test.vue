<template>
  <button class="btn" @click="open = true">btn</button>
  <Dialog as="div" class="relative z-10" @close="open = false" :open="open">
    <div class="= fixed inset-0 flex">
      <DialogPanel
        as="div"
        class="md:w-12/12 flex h-full w-10/12 min-w-64 bg-base-200 md:max-w-96 lg:w-3/12"
      >
        <ShellSideNav />
      </DialogPanel>
      <div class="w-full bg-base-100 bg-opacity-80 transition-opacity"></div>
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
              <SidebarCard />
            </div>
          </DialogPanel>
        </div>
      </div>
    </div> -->
  </Dialog>
</template>

<script setup>
import { Dialog, DialogPanel } from "@headlessui/vue";
const open = ref(true);
</script>
