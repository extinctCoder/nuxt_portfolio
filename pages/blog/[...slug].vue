<template>
  <Post>
    <template #post-body>
      <ContentRenderer :value="post"></ContentRenderer>
    </template>
    <template #toc><TableOfContent :children="post.body.toc.links" /></template>
  </Post>
  {{ breadcrumbs }}
</template>

<script setup>
const { path } = useRoute();
const { data: post } = await useAsyncData(path, () =>
  queryContent().where({ _path: path }).findOne(),
);
const breadcrumbs = $route.value.matched.map((routeItem) => ({
  text: routeItem.name,
  to: routeItem.path,
}));
</script>

<style></style>
