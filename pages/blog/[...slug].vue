<template>
  <!-- <Post>
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
  </Post> -->
  <!-- <ContentRendererMarkdown :value="result" v-if="result" /> -->
  {{ result }}
</template>

<script lang="ts" setup>
const { path } = useRoute();
const { data: post } = await useAsyncData(path, () =>
  queryContent().where({ _path: path }).findOne(),
);

// const result = ref(null);
// const loadMarkdown = async () => {
//   const data = await $fetch(
//     "https://raw.githubusercontent.com/extinctCoder/markdown-cv/master/README.md",
//   );
//   result.value = await parseMarkdown(data);
// };

const result = remoteMarkdown();
console.log(result);
</script>

<style></style>
