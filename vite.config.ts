import { defineConfig, loadEnv } from 'vite'
import path from 'path'
import eslintPlugin from 'vite-plugin-eslint'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [react(),
      eslintPlugin({
        include: ['src/**/*.ts', 'src/**/*.tsx', 'src/*.ts', 'src/*.tsx']
      })],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    },

    server: {
      proxy: {
        '/gateway': {
          target: env.SERVER_URL_GATEWAY,
          changeOrigin: true,
          host: '0.0.0.0',
          ws: true,
          rewrite: (path) => {
            if (path.includes('/gateway/servicebus-fssapi')) {
              return path.replace(/^\/gateway\/servicebus-fssapi/, env.SERVER_PATH_FSSAPI)
            } else if (path.includes('/gateway/servicebus-oamapi')) {
              return path.replace(/^\/gateway\/servicebus-oamapi/, env.SERVER_PATH_OAMAPI)
            } else if (path.includes('/gateway/servicebus-lmsapi')) {
              return path.replace(/^\/gateway\/servicebus-lmsapi/, env.SERVER_PATH_LMSAPI)
            } else if (path.includes('/gateway/pandaria-filtration')) {
              return path.replace(/^\/gateway\/pandaria-filtration/, env.PANDARIA_PATH_FILTRATION)
            }
          }
        }
      }
    }
  }
})
