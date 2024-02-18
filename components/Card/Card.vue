<template>
  <NuxtLink
    :to="to"
    class="flex h-full cursor-pointer flex-col-reverse gap-2 rounded border lg:flex-row lg:justify-between"
  >
    <div class="flex flex-1 flex-col justify-between gap-6 p-4">
      <div class="flex flex-col gap-6">
        <div class="prose max-w-none prose-p:text-justify">
          <h3>{{ heading }}</h3>
          <p>{{ body_text }}</p>
        </div>
      </div>
      <div class="flex justify-between">
        <div class="prose flex flex-wrap gap-8">
          <div v-if="publish_date" class="inline-flex items-center gap-2">
            <Icon name="heroicons:calendar-solid" />
            <span>{{ new Date(publish_date).toDateString() }}</span>
          </div>
          <div v-if="tags" class="inline-flex items-center gap-2">
            <Icon name="heroicons:folder-open-solid" />
            <span> {{ formattedTags }}</span>
          </div>
        </div>
        <div class="inline-flex items-center gap-2">
          <Icon name="heroicons:hand-thumb-up-solid" />
        </div>
      </div>
    </div>
    <NuxtImg
      v-if="image"
      :src="`/images/blog/${image}`"
      class="aspect-21/9 object-cover object-center lg:aspect-4/3 lg:max-w-64"
    />
  </NuxtLink>
</template>

<script lang="ts" setup>
interface CardInterface {
  heading?: string;
  to?: string;
  publish_date?: string;
  tags?: string[];
  image?: string;
  body_text?: string;
}

const props = withDefaults(defineProps<CardInterface>(), {
  heading: "Lorem ipsum",
  to: "/",
  publish_date: "12/02/2022",
  tags: () => ["Lorem", "ipsum", "dolor", "sit"],
  image: "img_1.jpeg",
  body_text:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio enim optio sunt. Ipsa et blanditiis rerum adipisci. Optio eligendi porro autem voluptates, ducimus dolores minus voluptatem omnis culpa mollitia eius!",
});

const formattedTags = computed(() => {
  if (props.tags) {
    return props.tags
      .map((tag) => tag.charAt(0).toUpperCase() + tag.slice(1))
      .join(", ");
  }
  return "";
});
</script>

<style></style>
