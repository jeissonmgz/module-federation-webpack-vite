import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: "vue_mfe",
      filename: "remoteEntry.js",
      exposes: {
        './App': './src/main.js'
      }
    })
  ],
})
