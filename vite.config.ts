// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/peluditos-pet/', 
  plugins: [react()],
});
