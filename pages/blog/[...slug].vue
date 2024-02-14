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
      <div
        v-if="link.children"
        class="m-2 border bg-violet-400"
        v-for="child_link in link.children"
      >
        <!-- {{ link.children }} -->

        <a
          :hreflang="`#${child_link.id}`"
          class="flex flex-col border bg-green-300"
          >{{ child_link.text }}</a
        >
      </div>
    </div>
  </div>
  <ul class="menu bg-base-200">
    <li v-for="link in post.body.toc.links" :key="link.id">
      <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
      <ul v-for="child_link in link.children" :key="child_link.id">
        <li>
          <a>{{ child_link.text }}</a>
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
