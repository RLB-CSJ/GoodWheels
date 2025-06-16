import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server:{
    proxy:{
      "/login":"http://localhost:3000",
      "/market":"http://localhost:3000",
      "/api": "http://localhost:3000",
      "/assets": "http://localhost:3000"
    }
  }
});
