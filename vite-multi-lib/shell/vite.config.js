import { defineConfig } from 'vite'
import federation from '@originjs/vite-plugin-federation'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'app',
      remotes: {
        AngularMfe: 'http://localhost:5010/assets/remoteEntry.js',
        VueMfe: 'http://localhost:5011/assets/remoteEntry.js',
        ReactMfe: {
          external: 'http://localhost:5012/remoteEntry.js',
          format: 'var'
        }
      },
      shared: ['react','react-dom']
    })
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  }
})
