// vite.config.js
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "file:///C:/Users/USER/OneDrive/%E6%A1%8C%E9%9D%A2/%E5%BD%B1%E5%B1%95%E6%8E%92%E7%A8%8B%E7%B6%B2%E7%AB%99/FFScheduler/node_modules/vite/dist/node/index.js";
import vue from "file:///C:/Users/USER/OneDrive/%E6%A1%8C%E9%9D%A2/%E5%BD%B1%E5%B1%95%E6%8E%92%E7%A8%8B%E7%B6%B2%E7%AB%99/FFScheduler/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import VueDevTools from "file:///C:/Users/USER/OneDrive/%E6%A1%8C%E9%9D%A2/%E5%BD%B1%E5%B1%95%E6%8E%92%E7%A8%8B%E7%B6%B2%E7%AB%99/FFScheduler/node_modules/vite-plugin-vue-devtools/dist/vite.mjs";
import Components from "file:///C:/Users/USER/OneDrive/%E6%A1%8C%E9%9D%A2/%E5%BD%B1%E5%B1%95%E6%8E%92%E7%A8%8B%E7%B6%B2%E7%AB%99/FFScheduler/node_modules/unplugin-vue-components/dist/vite.js";
import { PrimeVueResolver } from "file:///C:/Users/USER/OneDrive/%E6%A1%8C%E9%9D%A2/%E5%BD%B1%E5%B1%95%E6%8E%92%E7%A8%8B%E7%B6%B2%E7%AB%99/FFScheduler/node_modules/unplugin-vue-components/dist/resolvers.js";
var __vite_injected_original_import_meta_url = "file:///C:/Users/USER/OneDrive/%E6%A1%8C%E9%9D%A2/%E5%BD%B1%E5%B1%95%E6%8E%92%E7%A8%8B%E7%B6%B2%E7%AB%99/FFScheduler/vite.config.js";
var vite_config_default = defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.includes("swiper")
        }
      }
    }),
    VueDevTools(),
    Components({
      resolvers: [PrimeVueResolver()]
    })
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxVU0VSXFxcXE9uZURyaXZlXFxcXFx1Njg0Q1x1OTc2MlxcXFxcdTVGNzFcdTVDNTVcdTYzOTJcdTdBMEJcdTdEQjJcdTdBRDlcXFxcRkZTY2hlZHVsZXJcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXFVTRVJcXFxcT25lRHJpdmVcXFxcXHU2ODRDXHU5NzYyXFxcXFx1NUY3MVx1NUM1NVx1NjM5Mlx1N0EwQlx1N0RCMlx1N0FEOVxcXFxGRlNjaGVkdWxlclxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvVVNFUi9PbmVEcml2ZS8lRTYlQTElOEMlRTklOUQlQTIvJUU1JUJEJUIxJUU1JUIxJTk1JUU2JThFJTkyJUU3JUE4JThCJUU3JUI2JUIyJUU3JUFCJTk5L0ZGU2NoZWR1bGVyL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSAnbm9kZTp1cmwnXG5cbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcbmltcG9ydCBWdWVEZXZUb29scyBmcm9tICd2aXRlLXBsdWdpbi12dWUtZGV2dG9vbHMnXG5pbXBvcnQgQ29tcG9uZW50cyBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy92aXRlJ1xuaW1wb3J0IHsgUHJpbWVWdWVSZXNvbHZlciB9IGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3Jlc29sdmVycydcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICB2dWUoe1xuICAgICAgdGVtcGxhdGU6IHtcbiAgICAgICAgY29tcGlsZXJPcHRpb25zOiB7XG4gICAgICAgICAgaXNDdXN0b21FbGVtZW50OiAodGFnKSA9PiB0YWcuaW5jbHVkZXMoJ3N3aXBlcicpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KSxcbiAgICBWdWVEZXZUb29scygpLFxuICAgIENvbXBvbmVudHMoe1xuICAgICAgcmVzb2x2ZXJzOiBbUHJpbWVWdWVSZXNvbHZlcigpXVxuICAgIH0pXG4gIF0sXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgJ0AnOiBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoJy4vc3JjJywgaW1wb3J0Lm1ldGEudXJsKSlcbiAgICB9XG4gIH1cbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQW9ZLFNBQVMsZUFBZSxXQUFXO0FBRXZhLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sU0FBUztBQUNoQixPQUFPLGlCQUFpQjtBQUN4QixPQUFPLGdCQUFnQjtBQUN2QixTQUFTLHdCQUF3QjtBQU40SyxJQUFNLDJDQUEyQztBQVM5UCxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxJQUFJO0FBQUEsTUFDRixVQUFVO0FBQUEsUUFDUixpQkFBaUI7QUFBQSxVQUNmLGlCQUFpQixDQUFDLFFBQVEsSUFBSSxTQUFTLFFBQVE7QUFBQSxRQUNqRDtBQUFBLE1BQ0Y7QUFBQSxJQUNGLENBQUM7QUFBQSxJQUNELFlBQVk7QUFBQSxJQUNaLFdBQVc7QUFBQSxNQUNULFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQztBQUFBLElBQ2hDLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLGNBQWMsSUFBSSxJQUFJLFNBQVMsd0NBQWUsQ0FBQztBQUFBLElBQ3REO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
