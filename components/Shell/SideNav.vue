<template>
  <div class="flex flex-1 flex-col gap-2 overflow-hidden p-4">
    <div class="flex flex-col items-center gap-2 pt-12">
      <div class="avatar">
        <div
          class="m-2 w-32 rounded-xl ring ring-primary ring-offset-2 ring-offset-base-100"
        >
          <NuxtImg :src="bio.user?.avatarUrl" />
        </div>
      </div>
      <NuxtLink
        href="/"
        class="text-wrap text-center text-2xl font-bold text-secondary"
        >{{ bio.user?.name }}
      </NuxtLink>
      <span class="text-center italic text-accent">{{ bio.user?.bio }}</span>
    </div>

    <div class="flex flex-1 flex-col justify-center gap-2 overflow-y-auto p-4">
      <NuxtLink
        :to="nav_item.to"
        v-for="nav_item in side_nav"
        :key="nav_item.to"
        class="btn-block btn-xl btn btn-ghost inline-flex justify-end"
      >
        <div class="inline-flex flex-row items-center gap-4 px-8">
          {{ nav_item.title }}
          <Icon :name="nav_item.icon" class="h-6 w-6" />
        </div>
      </NuxtLink>
    </div>
    <div class="flex items-center justify-center gap-1">
      <NuxtLink
        v-for="nav_item in footer_nav"
        :key="nav_item.id"
        :to="nav_item.to"
        :class="`hover:text-brand-${nav_item.id} active:bg-brand-${nav_item.id}`"
        class="btn btn-square btn-ghost"
      >
        <Icon :name="`jam:${nav_item.id}`" class="h-4 w-4" />
      </NuxtLink>
    </div>

    <div class="stats flex shadow">
      <div class="stat flex flex-col">
        <div class="stat-title">Commit history</div>
        <div class="flex flex-row justify-evenly gap-2">
          <div class="flex flex-row gap-2">
            <Icon name="jam:github" class="stat-figure h-8 w-8 text-primary" />
            <span class="stat-value text-primary"
              >{{
                bio.user?.contributionsCollection.totalCommitContributions
              }}
              +</span
            >
          </div>
          <div class="flex flex-row gap-2">
            <Icon name="jam:gitlab" class="stat-figure h-8 w-8 text-primary" />
            <span class="stat-value text-primary">0</span>
          </div>
        </div>
        <div class="stat-desc">Only shown in current year.</div>
      </div>
    </div>
  </div>
</template>

<script lang="js" setup>
// TODO: js -> ts
const { data: bio } = await useAsyncGql({
  operation: "GHBio",
  variables: { login: "extinctCoder" },
});
const side_nav = [
  { title: "Home", to: "/", icon: "heroicons:home-solid" },
  { title: "Blog", to: "/blog", icon: "heroicons:list-bullet-solid" },
  { title: "Projects", to: "/project", icon: "heroicons:tag-solid" },
  {
    title: "Test PAGE",
    to: "/test",
    icon: "heroicons:information-circle-solid",
  },
  // { title: "Archives", to: "/uses", icon: "heroicons:archive-box-solid" },
  // { title: "About", to: "/uses", icon: "heroicons:information-circle-solid" },
];
const footer_nav = [
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
