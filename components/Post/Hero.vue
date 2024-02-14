<template>
  <div class="relative rounded">
    <NuxtImg
      class="aspect-21/9 max-h-64 w-full object-cover object-center opacity-15 blur"
      src="/images/blog/mountains_2.jpg"
    />
    <!-- <div class="absolute bottom-0 h-full w-full bg-white opacity-80 blur"></div> -->
    <div
      class="absolute bottom-0 flex w-full flex-row justify-between gap-4 bg-red-400 p-4"
    >
      <div class="flex content-center justify-center gap-4">
        <div class="avatar bg-green-400">
          <div class="w-16 rounded">
            <NuxtImg :src="avatar" />
          </div>
        </div>
        <div class="prose w-full max-w-none prose-p:text-justify">
          <h1>{{ title }}</h1>
          Posted {{ new Date(publish_date).toDateString() }} Updated
          {{ new Date(update_date).toDateString() }} By Cotes Chung 3 min read
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface CardInterface {
  title?: string;
  avatar?: string;
  update_date?: Date;
  publish_date?: Date;
}

const props = withDefaults(defineProps<CardInterface>(), {
  avatar: "/avatar.jpeg",
  title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  update_date: () => new Date(),
  publish_date: () => new Date(),
});
</script>

<style></style>
