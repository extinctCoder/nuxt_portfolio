<template>
  <ul class="menu menu-lg">
    <li v-for="nav_item in navigation" :key="nav_item.to">
      <NuxtLink :to="nav_item.to">
        <Icon :name="nav_item.icon" />
        {{ nav_item.title }}
      </NuxtLink>
    </li>
  </ul>
</template>

<script lang="ts" setup>
const navigation = [
  { title: "Home", to: "/", icon: "heroicons:home-solid" },
  { title: "Blog", to: "/blog", icon: "heroicons:list-bullet-solid" },
  { title: "Projects", to: "/project", icon: "heroicons:tag-solid" },
  // { title: "Archives", to: "/uses", icon: "heroicons:archive-box-solid" },
  // { title: "About", to: "/uses", icon: "heroicons:information-circle-solid" },
];
</script>

<style></style>
