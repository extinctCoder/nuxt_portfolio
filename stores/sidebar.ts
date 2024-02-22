import { defineStore } from "pinia";

export const useSidebarStore = defineStore("sidebarStore", () => {
  const { data: ghBio } = useAsyncGql({
    operation: "GHBio",
    variables: { login: "extinctCoder" },
  });

  const sideNav = [
    { title: "Home", to: "/", icon: "heroicons:home-solid" },
    { title: "Blog", to: "/blog", icon: "heroicons:list-bullet-solid" },
    { title: "Projects", to: "/project", icon: "heroicons:tag-solid" },
    {
      title: "Test PAGE",
      to: "/test",
      icon: "heroicons:information-circle-solid",
    },
  ];

  const footerNav = [
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
  const navOpen = ref(false);

  return {
    sideNav,
    footerNav,
    ghBio,
    navOpen,
  };
});
