// vite.config.ts
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "file:///Users/webde/Desktop/vue-shop/node_modules/.pnpm/vite@5.3.5_@types+node@20.14.14/node_modules/vite/dist/node/index.js";
import vue from "file:///Users/webde/Desktop/vue-shop/node_modules/.pnpm/@vitejs+plugin-vue@5.1.2_vite@5.3.5_@types+node@20.14.14__vue@3.4.35_typescript@5.4.5_/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueDevTools from "file:///Users/webde/Desktop/vue-shop/node_modules/.pnpm/vite-plugin-vue-devtools@7.3.7_rollup@4.20.0_vite@5.3.5_@types+node@20.14.14__vue@3.4.35_typescript@5.4.5_/node_modules/vite-plugin-vue-devtools/dist/vite.mjs";
var __vite_injected_original_import_meta_url = "file:///Users/webde/Desktop/vue-shop/vite.config.ts";
var vite_config_default = defineConfig({
  plugins: [vue(), vueDevTools()],
  // server: {
  //   // 跨域配置
  //   host: '0.0.0.0', // 允许外部访问
  //   port: 5175, // 修改为你使用的端口
  //   proxy: {
  //     //当 axios请求 url中包含 /api, 代理激活会 拦截 axios请求，然后进行修改它的url，用修改后的url去实际请求 API服务器。
  //     '/frontend': {
  //       // target: 'http://localhost:3306',
  //       // target: 'http://shop.yljt.info',
  //       changeOrigin: true,
  //       rewrite: (path) => {
  //         // console.log('Original path:', path)
  //         const newPath = path.replace(/^\/frontend/, '')
  //         // console.log('Rewritten path:', newPath)
  //         return newPath
  //       }
  //     }
  //   }
  // },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  }
  // optimizeDeps: {
  //   exclude: ['class-transformer/storage']
  // },
  // build: {
  //   rollupOptions: {
  //     external: ['class-transformer/storage']
  //   }
  // }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvd2ViZGUvRGVza3RvcC92dWUtc2hvcFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL3dlYmRlL0Rlc2t0b3AvdnVlLXNob3Avdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL3dlYmRlL0Rlc2t0b3AvdnVlLXNob3Avdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBmaWxlVVJMVG9QYXRoLCBVUkwgfSBmcm9tICdub2RlOnVybCdcblxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xuaW1wb3J0IHZ1ZURldlRvb2xzIGZyb20gJ3ZpdGUtcGx1Z2luLXZ1ZS1kZXZ0b29scydcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFt2dWUoKSwgdnVlRGV2VG9vbHMoKV0sXG4gIC8vIHNlcnZlcjoge1xuICAvLyAgIC8vIFx1OERFOFx1NTdERlx1OTE0RFx1N0Y2RVxuICAvLyAgIGhvc3Q6ICcwLjAuMC4wJywgLy8gXHU1MTQxXHU4QkI4XHU1OTE2XHU5MEU4XHU4QkJGXHU5NUVFXG4gIC8vICAgcG9ydDogNTE3NSwgLy8gXHU0RkVFXHU2NTM5XHU0RTNBXHU0RjYwXHU0RjdGXHU3NTI4XHU3Njg0XHU3QUVGXHU1M0UzXG4gIC8vICAgcHJveHk6IHtcbiAgLy8gICAgIC8vXHU1RjUzIGF4aW9zXHU4QkY3XHU2QzQyIHVybFx1NEUyRFx1NTMwNVx1NTQyQiAvYXBpLCBcdTRFRTNcdTc0MDZcdTZGQzBcdTZEM0JcdTRGMUEgXHU2MkU2XHU2MjJBIGF4aW9zXHU4QkY3XHU2QzQyXHVGRjBDXHU3MTM2XHU1NDBFXHU4RkRCXHU4ODRDXHU0RkVFXHU2NTM5XHU1QjgzXHU3Njg0dXJsXHVGRjBDXHU3NTI4XHU0RkVFXHU2NTM5XHU1NDBFXHU3Njg0dXJsXHU1M0JCXHU1QjlFXHU5NjQ1XHU4QkY3XHU2QzQyIEFQSVx1NjcwRFx1NTJBMVx1NTY2OFx1MzAwMlxuICAvLyAgICAgJy9mcm9udGVuZCc6IHtcbiAgLy8gICAgICAgLy8gdGFyZ2V0OiAnaHR0cDovL2xvY2FsaG9zdDozMzA2JyxcbiAgLy8gICAgICAgLy8gdGFyZ2V0OiAnaHR0cDovL3Nob3AueWxqdC5pbmZvJyxcbiAgLy8gICAgICAgY2hhbmdlT3JpZ2luOiB0cnVlLFxuICAvLyAgICAgICByZXdyaXRlOiAocGF0aCkgPT4ge1xuICAvLyAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdPcmlnaW5hbCBwYXRoOicsIHBhdGgpXG4gIC8vICAgICAgICAgY29uc3QgbmV3UGF0aCA9IHBhdGgucmVwbGFjZSgvXlxcL2Zyb250ZW5kLywgJycpXG4gIC8vICAgICAgICAgLy8gY29uc29sZS5sb2coJ1Jld3JpdHRlbiBwYXRoOicsIG5ld1BhdGgpXG4gIC8vICAgICAgICAgcmV0dXJuIG5ld1BhdGhcbiAgLy8gICAgICAgfVxuICAvLyAgICAgfVxuICAvLyAgIH1cbiAgLy8gfSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICAnQCc6IGZpbGVVUkxUb1BhdGgobmV3IFVSTCgnLi9zcmMnLCBpbXBvcnQubWV0YS51cmwpKVxuICAgIH1cbiAgfVxuICAvLyBvcHRpbWl6ZURlcHM6IHtcbiAgLy8gICBleGNsdWRlOiBbJ2NsYXNzLXRyYW5zZm9ybWVyL3N0b3JhZ2UnXVxuICAvLyB9LFxuICAvLyBidWlsZDoge1xuICAvLyAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgLy8gICAgIGV4dGVybmFsOiBbJ2NsYXNzLXRyYW5zZm9ybWVyL3N0b3JhZ2UnXVxuICAvLyAgIH1cbiAgLy8gfVxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBeVEsU0FBUyxlQUFlLFdBQVc7QUFFNVMsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxTQUFTO0FBQ2hCLE9BQU8saUJBQWlCO0FBSjBJLElBQU0sMkNBQTJDO0FBT25OLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVMsQ0FBQyxJQUFJLEdBQUcsWUFBWSxDQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQW9COUIsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxjQUFjLElBQUksSUFBSSxTQUFTLHdDQUFlLENBQUM7QUFBQSxJQUN0RDtBQUFBLEVBQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBU0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
