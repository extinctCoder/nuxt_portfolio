<template>
  <div class="prose mx-auto max-w-none">
    <ContentRenderer :value="post"></ContentRenderer>
    {{ post.body.toc }}
    <br />
    <br />
    <br />
    title: {{ post.body.toc.title }}
    <br />
  </div>
  <ul class="menu bg-base-200">
    <li v-for="link in post.body.toc.links" :key="link.id">
      <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
      <ul v-if="link.children">
        <li v-for="child_link in link.children" :key="child_link.id">
          <NuxtLink :to="`#${child_link.id}`">{{ child_link.text }}</NuxtLink>
        </li>
      </ul>
    </li>
  </ul>
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
