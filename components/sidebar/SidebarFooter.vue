<template>
  <ul class="menu menu-horizontal menu-lg items-center justify-around">
    <li v-for="nav_item in navigation" :key="nav_item.href">
      <a :href="nav_item.href">
        <Icon :name="nav_item.icon" />
      </a>
    </li>
  </ul>
</template>

<script lang="ts" setup>
const navigation = [
  { title: "Fiverr", href: "/", icon: "jam:fiverr" },
  { title: "Linkedin", href: "/blog", icon: "jam:linkedin" },
  { title: "GitHub", href: "/projects", icon: "jam:github" },
  { title: "Gitlab", href: "/uses", icon: "heroicons:gitlab" },
  {
    title: "Whatsapp",
    to: "/uses",
    icon: "heroicons:information-circle-solid",
  },
];
</script>

<style></style>
