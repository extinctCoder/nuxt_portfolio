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
      <ContentRenderer v-if="post" :value="post"></ContentRenderer>
    </template>
    <template #toc>
      <PostTableOfContent :children="post?.body?.toc?.links" />
    </template>
  </Post>
  {{ path }}
</template>

<script lang="ts" setup>
const { path } = useRoute();
const { data: post } = await useAsyncData(path, () =>
  queryContent().where({ _path: path }).findOne(),
);
</script>

<style></style>
