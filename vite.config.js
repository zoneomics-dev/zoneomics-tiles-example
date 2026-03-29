import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const fileEnv = loadEnv(mode, process.cwd(), 'REACT_APP_');
  const apiKey =
    process.env.REACT_APP_API_KEY ?? fileEnv.REACT_APP_API_KEY ?? '';

  return {
    plugins: [react()],
    define: {
      'process.env.REACT_APP_API_KEY': JSON.stringify(apiKey),
    },
    server: {
      port: 3000,
      host: true,
    },
  };
});
