import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   base: process.env.NODE_ENV === 'production' ? '/book-store': '/'
// })

export default defineConfig(({command}) => {
  const config = {
    plugins: [react()],
    base: "/",
    define: {
      'process.env.PUBILC_URL': command === 'serve' ? '""' : '"/book-store"',
    }
  }

  if (command !== 'serve') {
    config.base = '/book-store/'
  }

  return config
})