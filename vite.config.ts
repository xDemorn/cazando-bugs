import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/cazando-bugs',
  define: {
    __APP_VERSION__: JSON.stringify('v0.1.0')
  },
  appType: 'spa'
})