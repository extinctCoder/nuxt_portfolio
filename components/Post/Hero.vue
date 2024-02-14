<template>
  <div class="relative rounded">
    <NuxtImg
      class="aspect-21/9 max-h-64 w-full bg-white object-cover object-center opacity-5 blur"
      src="/images/blog/mountains_2.jpg"
    />
    <div class="absolute bottom-0 h-full w-full bg-white opacity-80 blur"></div>
    <div class="absolute bottom-0 flex w-full flex-row justify-between p-4">
      <div class="avatar">
        <div class="w-16 rounded">
          <NuxtImg :src="avatar" />
        </div>
      </div>
      <div class="prose">
        <p>Your text here</p>
        <p>Your text here</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface CardInterface {
  title?: string;
  avatar?: string;
}

const props = withDefaults(defineProps<CardInterface>(), {
  avatar: "/avatar.jpeg",
  title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
});
</script>

<style></style>
