<template>
  <!-- <ul class="menu menu-horizontal menu-lg items-center justify-around">
    <li v-for="nav_item in navigation" :key="nav_item.title">
      <a :href="nav_item.href">
        <Icon :name="nav_item.icon" />
      </a>
    </li>
  </ul> -->

  <div class="flex justify-center gap-1">
    <NuxtLink
      v-for="nav_item in navigation"
      :key="nav_item.id"
      :to="nav_item.to"
      :class="`hover:text-brand-${nav_item.id} active:bg-brand-${nav_item.id}`"
      class="btn btn-square btn-ghost active:text-white"
    >
      <Icon :name="`jam:${nav_item.id}`" />
    </NuxtLink>
    <!-- <a
      class="hover:text-brand-whatsapp active:bg-brand-whatsapp btn btn-square btn-ghost active:text-white"
    >
      <Icon name="jam:whatsapp" />
    </a>
    <a
      class="hover:text-brand-gitlab active:bg-brand-gitlab btn btn-square btn-ghost active:text-white"
    >
      <Icon name="jam:gitlab" />
    </a>
    <a
      class="hover:text-brand-linkedin active:bg-brand-linkedin btn btn-square btn-ghost active:text-white"
    >
      <Icon name="jam:linkedin" />
    </a>
    <a
      class="hover:text-brand-github active:bg-brand-github btn btn-square btn-ghost active:text-white"
    >
      <Icon name="jam:github" />
    </a>
    <a
      class="hover:text-brand-fiverr active:bg-brand-fiverr btn btn-square btn-ghost active:text-white"
    >
      <Icon name="jam:fiverr" />
    </a> -->
  </div>
</template>

<script lang="ts" setup>
// const navigation = [
// { title: "Linkedin", href: "/blog", icon: "jam:linkedin" },
// { title: "GitHub", href: "/projects", icon: "jam:github" },
// { title: "Fiverr", href: "/", icon: "jam:fiverr" },
// { title: "Gitlab", href: "/uses", icon: "jam:gitlab" },
// {
//   title: "WA",
//   href: "/uses",
//   icon: "jam:whatsapp",
// },
// ];

const navigation = [
  {
    id: "whatsapp",
    title: "WhatsApp",
    to: "/",
  },
  {
    id: "gitlab",
    title: "GitLab",
    to: "https://gitlab.com/fiery.snowflake",
  },
  {
    id: "linkedin",
    title: "Linkedin",
    to: "https://www.linkedin.com/in/extinctCoder",
  },
  {
    id: "github",
    title: "GitHub",
    to: "https://github.com/extinctCoder",
  },
  {
    id: "fiverr",
    title: "Fiverr",
    to: "https://www.fiverr.com/extinctcoder",
  },
];
</script>

<style></style>
