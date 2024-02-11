<template>
  <div
    class="flex cursor-pointer flex-col-reverse gap-2 overflow-hidden rounded border lg:flex-row lg:justify-between"
  >
    <div class="flex flex-1 flex-col justify-between gap-6 p-4">
      <div class="flex flex-col gap-6">
        <h2 class="card-title">{{ props.heading }}</h2>
        {{ props.body_text }}
      </div>
      <div class="flex justify-between">
        <div class="flex flex-wrap gap-4">
          <div class="inline-flex items-center gap-2">
            <Icon name="heroicons:calendar-solid" />
            <span>{{ publish_date }}</span>
          </div>
          <div class="inline-flex items-center gap-2">
            <Icon name="heroicons:folder-open-solid" />
            <span>Blogging, Demo</span>
          </div>
        </div>
        <div class="inline-flex items-center gap-2">
          <Icon name="heroicons:hand-thumb-up-solid" />
        </div>
      </div>
    </div>
    <NuxtImg
      src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
      class="aspect-16/9 object-cover object-center lg:aspect-4/3"
    />
    <!-- <NuxtImg
      src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
    /> -->
  </div>
</template>

<script lang="ts" setup>
interface CardInterface {
  heading: string;
  body_text: string;
  publish_date: string;
}

const props = withDefaults(defineProps<CardInterface>(), {
  heading: "Lorem ipsum",
  publish_date: new Date().toDateString(),
  body_text:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio enim optio sunt. Ipsa et blanditiis rerum adipisci. Optio eligendi porro autem voluptates, ducimus dolores minus voluptatem omnis culpa mollitia eius!",
});
</script>

<style></style>
