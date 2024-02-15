<template>
  <Post>
    <template #post-hero>
      <PostHero
        :title="post?.title"
        :update_date="post?.updated_on"
        :publish_date="post?.published_at"
        :avatar="post?.avatar"
        :cover="post?.cover"
        :cover_description="post?.cover_description"
        :author="post?.author"
        :source="post?.source"
        :read_time="post?.read_time"
      />
    </template>
    <template #post-body>
      <!-- <ContentRenderer v-if="post" :value="post"></ContentRenderer> -->
      <ContentRendererMarkdown :value="body" v-if="body" />
    </template>
    <template #toc>
      <PostTableOfContent :children="post?.body?.toc?.links" />
    </template>
  </Post>
  {{ body }}
</template>

<script lang="ts" setup>
const { path } = useRoute();
const { data: post } = await useAsyncData(path, () =>
  queryContent().where({ _path: path }).findOne(),
);

const { data: body } = useAsyncData(async () => {
  return await remoteMarkdown(
    "https://raw.githubusercontent.com/extinctCoder/markdown-cv/master/README.md",
  );
});
</script>

<style></style>
