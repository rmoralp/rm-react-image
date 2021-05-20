import path from 'path'
import {defineConfig} from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

export default defineConfig({
  optimizeDeps: {
    include: ['react-dom']
  },
  plugins: [reactRefresh()],
  resolve: {
    alias: {
      '@rm/react-image': path.resolve(__dirname, './src')
    }
  }
  // resolve: {
  //   alias: [
  //     {
  //       find: '@rm/react-image',
  //       replacement: () => {
  //         console.log(path.resolve(__dirname, './src'))
  //         return path.resolve(__dirname, './src')
  //       }
  //     }
  //   ]
  // }
})
