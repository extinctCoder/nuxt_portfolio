<template>
  <ul class="menu">
    <li>

      <h2 class="menu-title">Contents</h2>
      <li v-for="link in children" :key="link.id">
        <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
        <ul v-if="link.children">
          <li v-for="child_link in link.children" :key="child_link.id">
            <NuxtLink :to="`#${child_link.id}`">{{ child_link.text }}</NuxtLink>
          </li>
        </ul>
      </li>
    </li>
  </ul>
</template>

<script lang="ts" setup>
interface ToCInterface {
  id?: string;
  depth?: number;
  text?: string;
  children?: ToCInterface[];
}
const props = withDefaults(defineProps<ToCInterface>(), {});
</script>

<style></style>
