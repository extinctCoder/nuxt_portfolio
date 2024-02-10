<template>
  <ul class="menu menu-lg">
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

<script lang="ts" setup></script>

<style></style>
