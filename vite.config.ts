import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

const formattedName = 'drive-market-react-components'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), dts({ insertTypesEntry: true })],
  build: {
    lib: {
      //Posible prueba->  entry: 'src/index.ts',
      entry: './src/index.ts',
      name: `@drivemarket/${formattedName}`,
      fileName: format => `${formattedName}.${format}.js`,
      formats: ['es', 'cjs']
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime', 'react-dom', 'tailwindcss'],
      output: {
        globals: {
          react: 'React',
          'react/jsx-runtime': 'react/jsx-runtime',
          'react-dom': 'ReactDOM',
          tailwindcss: 'tailwindcss'
        }
      }
    },
    outDir: 'dist',
    emptyOutDir: true
  }
})
