import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
    site: "http://localhost:3000",
    integrations: [
        tailwind(),
    ],
    vite: {
        ssr: {
            external: ["svgo"],
        },
    },
});
