import { defineConfig } from 'vite';
import kaboom from 'kaboom';

export default defineConfig({
    base: "./",
    build: {
        minify: "terser",
    },
    plugins: [kaboom()],
});
