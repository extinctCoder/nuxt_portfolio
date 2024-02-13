<template>
  <ul class="menu menu-horizontal menu-lg items-center justify-around">
    <li v-for="nav_item in navigation" :key="nav_item.title">
      <a :href="nav_item.href">
        <Icon :name="nav_item.icon" />
      </a>
    </li>
  </ul>
</template>

<script lang="ts" setup>
const navigation = [
  { title: "Linkedin", href: "/blog", icon: "jam:linkedin" },
  // { title: "GitHub", href: "/projects", icon: "jam:github" },
  // { title: "Fiverr", href: "/", icon: "jam:fiverr" },
  // { title: "Gitlab", href: "/uses", icon: "jam:gitlab" },
  // {
  //   title: "WA",
  //   href: "/uses",
  //   icon: "jam:whatsapp",
  // },
];
</script>

<style></style>
