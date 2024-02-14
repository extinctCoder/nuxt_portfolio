<template>
  <div class="relative rounded">
    <NuxtImg
      class="aspect-21/9 max-h-96 w-full object-cover object-center opacity-15 blur"
      src="/images/blog/mountains_2.jpg"
    />
    <!-- <div class="absolute bottom-0 h-full w-full bg-white opacity-80 blur"></div> -->
    <div class="absolute bottom-0 flex w-full flex-row items-center gap-4 p-4">
      <NuxtImg
        class="aspect-1 max-w-16 flex-none rounded-lg object-cover object-center shadow"
        :src="avatar"
      />

      <!-- <div class="flex content-center justify-center gap-4">
        <div class="avatar bg-green-400">
          <div class="w-16 rounded">
          </div>
        </div>
      </div> -->
      <div
        class="prose flex w-full max-w-none flex-col gap-2 prose-h1:m-0 prose-p:m-0"
      >
        <h1>{{ title }}</h1>
        <div class="flex content-center gap-4">
          <div v-if="publish_date" class="inline-flex items-center gap-2">
            <Icon name="heroicons:calendar-solid" />
            <p>Posted</p>
            <strong>{{ new Date(publish_date).toDateString() }}</strong>
          </div>
          <div v-if="publish_date" class="inline-flex items-center gap-2">
            <Icon name="heroicons:calendar-solid" />
            <p>Updated</p>
            <strong>{{ new Date(update_date).toDateString() }} </strong>
          </div>
        </div>
      </div>
    </div>
  </div>

  <p>
    Posted
    <strong>{{ new Date(publish_date).toDateString() }}</strong> Updated
    {{ new Date(update_date).toDateString() }}
  </p>
  By Cotes Chung 3 min read
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
