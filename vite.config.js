import path from 'path'
import {defineConfig} from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

export default defineConfig({
  optimizeDeps: {
    include: ['react-dom']
  },
  plugins: [reactRefresh()],
  build: {
    rollupOptions: {
      external: ['react', 'react-dom']
    }
  },
  resolve: {
    alias: {
      '@rm/react-image': path.resolve(__dirname, './src')
    }
  }
})
