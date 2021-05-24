import path from 'path'
import {defineConfig} from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

export default defineConfig({
  plugins: [reactRefresh()],
  build: {
    rollupOptions: {
      external: ['react', 'react-dom', 'prop-types']
    }
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, './src')
    }
  }
})
