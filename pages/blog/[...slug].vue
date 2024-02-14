<template>
  <Post>
    <template #post-hero>
      <PostHero
        :title="post.title"
        :update_date="post.updated_on"
        :publish_date="post.updated_at"
      />
    </template>
    <template #post-body>
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
