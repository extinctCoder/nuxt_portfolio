<template>
  <div class="flex flex-col gap-4">
    <div class="relative rounded">
      <NuxtImg
        :src="`/images/blog/${cover}`"
        class="aspect-21/9 max-h-80 w-full rounded object-cover object-center opacity-45 blur"
      />

      <div v-if="read_time" class="absolute right-0 top-0 p-4">
        <div class="badge badge-outline gap-2">
          <Icon name="heroicons:clock-solid" />{{ read_time }}
        </div>
      </div>
      <div
        class="absolute bottom-0 flex w-full flex-row items-center gap-4 p-4"
      >
        <div class="flex flex-1 flex-col gap-2">
          <div v-if="publish_date" class="inline-flex items-center gap-2">
            <!-- <Icon name="heroicons:user-solid" /> -->
            <p>by</p>
            <strong>{{ author }}</strong>
          </div>
          <div class="flex flex-1 flex-row items-center gap-4">
            <NuxtImg
              v-if="avatar"
              :src="`/images/blog/${avatar}`"
              class="aspect-1 max-h-16 max-w-16 flex-none rounded-lg object-cover object-center"
            />
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

        <NuxtLink
          v-if="source_control"
          :to="source_control"
          class="btn btn-outline btn-primary"
        >
          <Icon name="ph:git-branch-bold" />view source code</NuxtLink
        >
      </div>
    </div>
    <div class="prose w-full max-w-none text-center">
      <span class="italic">{{ cover_description }} </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface CardInterface {
  title?: string;
  avatar?: string;
  author?: string;
  update_date?: Date;
  publish_date?: Date;
  cover?: string;
  cover_description?: string;
  read_time: string;
  source_control: string;
}

const props = withDefaults(defineProps<CardInterface>(), {
  avatar: "/avatar.jpeg",
  author: "extinctCoder",
  title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  update_date: () => new Date(),
  publish_date: () => new Date(),
  cover: "karl-pawlowicz-QUHuwyNgSA0-unsplash.jpg",
  cover_description:
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem optio, et esse voluptatem ducimus animi.",
  read_time: undefined,
  source_control: "https://github.com/extinctCoder",
});
</script>

<style></style>
