<template>
  <ul class="menu menu-horizontal menu-lg items-center justify-around">
    <li>
      <a>
        <Icon name="jam:fiverr" />
      </a>
    </li>
    <li>
      <a>
        <Icon name="jam:twitter" />
      </a>
    </li>
    <li>
      <a>
        <Icon name="jam:linkedin" />
      </a>
    </li>
  </ul>
</template>

<script lang="ts" setup>
const navigation = [
  { title: "Home", to: "/", icon: "heroicons:home-solid" },
  { title: "Blog", to: "/blog", icon: "heroicons:list-bullet-solid" },
  { title: "Projects", to: "/projects", icon: "heroicons:tag-solid" },
  { title: "Archives", to: "/uses", icon: "heroicons:archive-box-solid" },
  { title: "About", to: "/uses", icon: "heroicons:information-circle-solid" },
];
</script>

<style></style>
