import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/resume/',
  plugins: [
    react(),
    VitePWA({
      scope: '/resume/',
      registerType: 'autoUpdate',
      // devOptions: {
      //   enabled: true,
      // },
      workbox: {
        navigateFallback: '/resume/index.html', // fallback for SPA routing
      },
      manifest: {
        id: '/resume/',
        name: 'Mariusz Najwer - Résumé',
        short_name: 'Résumé',
        description: 'Résumé of Mariusz Najwer, software engineer from Wrocław, Poland. React, Angular and Node.js.',
        lang: 'en',
        start_url: '/resume/',
        scope: '/resume/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#000000',
        icons: [
          {
            src: 'icon/192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: 'icon/512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any',
          },
          // Optional: add a dedicated maskable icon (with safe-zone padding)
          // {
          //   src: 'icon/512-maskable.png',
          //   sizes: '512x512',
          //   type: 'image/png',
          //   purpose: 'maskable',
          // },
        ],
      },
    }),
  ],
  build: {
    outDir: './build',

    // node_modules is mostly the main reason for the large chunk problem,
    // With this you're telling Vite to treat the used modules separately.
    // To understand better what it does, try to compare the logs from the
    // build command with and without this change
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        },
      },
    },
  },
  server: { port: 3000 },
  resolve: {
    alias: {
      '@app': path.resolve(import.meta.dirname, './src/app'),
    },
  },
});
