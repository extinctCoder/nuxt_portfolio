<template>
  <Post>
    <template #post-hero>
      <PostHero :title="post?.title" :description="post?.description" />
    </template>
    <template #post-body>
      <ContentRenderer v-if="post" :value="post"></ContentRenderer>
    </template>
    <template #toc>
      <PostTableOfContent :children="post?.body?.toc?.links" />
    </template>
  </Post>
  {{ post }}
</template>

<script lang="ts" setup>
const { path } = useRoute();
const { data: post_local } = await useAsyncData(path, () =>
  queryContent().where({ _path: path }).findOne(),
);

const { data: post } = useAsyncData(post_local.value?.github, () => {
  return remoteMarkdown(
    "https://raw.githubusercontent.com/" +
      post_local.value?.github +
      "/master/README.md",
  );
});
</script>

<style></style>
