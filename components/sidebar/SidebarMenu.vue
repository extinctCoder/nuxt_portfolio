<template>
  <ul class="menu menu-lg">
    <!-- {{
      sideMenu
    }} -->
    <!-- <a
      v-for="item in navigation"
      :key="item.name"
      :href="item.href"
      :class="[
        item.current
          ? 'bg-gray-900 text-white'
          : 'text-gray-300 hover:bg-gray-700 hover:text-white',
        'rounded-md px-3 py-2 text-sm font-medium',
      ]"
      :aria-current="item.current ? 'page' : undefined"
      >{{ item.name }}</a
    > -->
    <li v-for="nav_item in sideMenu" :key="nav_item.to">
      <NuxtLink :to="nav_item.to">
        <Icon name="heroicons:home-solid" />
        home
      </NuxtLink>
    </li>

    <li>
      <NuxtLink to="/">
        <Icon name="heroicons:home-solid" />
        home
      </NuxtLink>
    </li>
    <li>
      <NuxtLink to="/blog">
        <Icon name="heroicons:list-bullet-solid" />
        blog
      </NuxtLink>
    </li>
    <li>
      <a>
        <Icon name="heroicons:tag-solid" />
        tags
      </a>
    </li>
    <li>
      <a>
        <Icon name="heroicons:archive-box-solid" />
        archives
      </a>
    </li>
    <li>
      <a>
        <Icon name="heroicons:information-circle-solid" />
        about
      </a>
    </li>
  </ul>
</template>

<script lang="ts" setup>
const sideMenu = [
  { title: "Home", to: "/", icon: "heroicons:home-solid" },
  { title: "Blog", to: "/blog" },
  { title: "Projects", to: "/projects" },
  { title: "Uses", to: "/uses" },
];
</script>

<style></style>
