<template>
  <div class="prose mx-auto max-w-none">
    <ContentRenderer :value="post"></ContentRenderer>
    {{ post.body.toc }}
    <br />
    <br />
    <br />
    title: {{ post.body.toc.title }}
    <br />
    links:
    <!-- {{ post.body.toc.links }} -->

    <div v-for="link in post.body.toc.links" class="flex flex-col gap-2">
      <!-- <p>{{ link }}</p> -->
      <a :hreflang="`#${link.id}`" class="border bg-red-300">{{ link.text }}</a>
      <div v-if="link.children" class="m-2 border bg-violet-400">
        {{ link.children }}
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "post-list",
});
const { path } = useRoute();
const { data: post } = await useAsyncData(path, () =>
  queryContent().where({ _path: path }).findOne(),
);
</script>

<style></style>
