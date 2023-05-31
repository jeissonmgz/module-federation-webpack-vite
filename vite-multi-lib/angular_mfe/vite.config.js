import { splitVendorChunkPlugin, defineConfig } from "vite";
import { dependencies } from "./package.json";
import federation from '@originjs/vite-plugin-federation';

function renderChunks(deps) {
  let chunks = {};
  Object.keys(deps).forEach((key) => {
    if ([].includes(key)) return;
    chunks[key] = [key];
  });
  return chunks;
}

export default defineConfig({
  plugins: [
    splitVendorChunkPlugin(),
    federation({
      name: "angular_mfe",
      filename: "remoteEntry.js",
      exposes: {
        './App': './src/main.ts'
      }
    })
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: [],
          ...renderChunks(dependencies),
        },
      },
    },
  },
});
