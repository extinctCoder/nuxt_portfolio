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
    {{ post.body.toc.links }}

    <div v-for="link in post.body.toc.links" class="flex gap-2">
      <p></p>
      <a :hreflang="`#${link.id}`" class="border bg-red-300">{{ link }}</a>
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
