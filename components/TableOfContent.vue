<template>
  <ul class="menu">
    <li v-for="link in children" :key="link.id">
      <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
      <ul v-if="link.children">
        <li v-for="child_link in link.children" :key="child_link.id">
          <NuxtLink :to="`#${child_link.id}`">{{ child_link.text }}</NuxtLink>
        </li>
      </ul>
    </li>
  </ul>
  {{ props }}
</template>

<script lang="ts" setup>
// interface ToCInterface {
//   links?: object;
// }
interface ToCInterface {
  id?: string;
  depth?: number;
  text?: string;
  children?: ToCInterface[];
}
const props = withDefaults(defineProps<ToCInterface>(), {});
</script>

<style></style>
