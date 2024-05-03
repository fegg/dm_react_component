import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path';
import pkg from './package.json';

const entry = resolve(__dirname, 'src/components/index.ts');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry,
      name: 'ReactComponent',
      formats: [
        'umd',
        'es',
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        'system',
      ],
      fileName: (format) => `${pkg.name}.${format}.js`

    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React'
        }
      }
    }
  }
})
