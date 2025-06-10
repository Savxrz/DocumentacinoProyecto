# Usage

1. Install the theme package to your project with your preferred package manager:

   ::: code-group

   ```bash [npm]
   npm install @catppuccin/vitepress
   ```

   ```bash [Yarn]
   yarn add @catppuccin/vitepress
   ```

   ```bash [pnpm]
   pnpm add @catppuccin/vitepress
   ```

   ```bash [Bun]
   bun add @catppuccin/vitepress
   ```

   :::

2. Add the theme to your VitePress theme configuration file:

   ::: code-group

   ```ts {2} [.vitepress/theme/index.ts]
   import DefaultTheme from "vitepress/theme";
   import "@catppuccin/vitepress/theme/<flavor>/<accent>.css";

   export default DefaultTheme;
   ```

   :::

   > [!NOTE]
   > Latte is included in all flavors as the light mode variant.

   See ["Extending the Default Theme | VitePress"](https://vitepress.dev/guide/extending-default-theme#extending-the-default-theme) for more information.

3. Configure syntax highlighting in your VitePress configuration file:

   ::: code-group

   ```ts{6} [.vitepress/config.mts]
   export default defineConfig({
     // ...
     markdown: {
       theme: {
         light: 'catppuccin-latte',
         dark: 'catppuccin-<flavor>',
       },
     },
     // ...
   });
   ```

   :::

&nbsp;
