import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [react()],

    // Вместо /React_App-Clevertec/ ставим универсальный ./ 
    base: './',

    server: {
        host: true,
        port: 3000,
    },

    resolve: {
        alias: {
            '~': resolve(__dirname, 'src'),
            '@public': resolve(__dirname, 'public'),
        },
    },
});
