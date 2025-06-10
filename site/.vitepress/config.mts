import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Sportter",
  description: "A VitePress theme",
  srcDir: "./src",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "https://raw.githubusercontent.com/catppuccin/catppuccin/refs/heads/main/assets/logos/exports/1544x1544_circle.png",
      },
    ],
  ],
  // https://vitepress.dev/guide/markdown#syntax-highlighting-in-code-blocks
  markdown: {
    theme: {
      light: "catppuccin-latte",
      dark: "catppuccin-mocha",
    },
  },
  themeConfig: {
    logo: {
      src: "https://i.imgur.com/bUwYQP3.png",
      alt: "Sportter logo",
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Docu", link: "/install" },
    ],
    sidebar: [
      {
        items: [
          { text: "Proyecto", link: "/install" },
          { text: "Components", link: "/components" },
        ],
      },
    ],
    socialLinks: [{ icon: "github", link: "https://github.com/DanielEstebanM/Sportter" }],
  },
});
