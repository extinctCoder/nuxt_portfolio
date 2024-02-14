<template>
  <Post>
    <template #post-hero>
      <PostHero />
    </template>
    <template #post-body>
      {{ post.title }}
      <br />
      created_on: {{ post.created_on }}
      <br />
      updated_on: {{ post.updated_on }}
      <br />
      draft: {{ post.draft }}
      <br />
      author: {{ post.author }}
      <br />

      <ContentRenderer :value="post"></ContentRenderer>
    </template>
    <template #toc>
      <PostTableOfContent :children="post.body.toc.links" />
    </template>
  </Post>
  {{ path }}
</template>

<script setup>
const { path } = useRoute();
const { data: post } = await useAsyncData(path, () =>
  queryContent().where({ _path: path }).findOne(),
);
</script>

<style></style>
