/// <reference types="vitest/config" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
    base: "/color-contrast-checker-pwa/",
    test: {
        environment: "node",
    },
    plugins: [
        react(),
        tailwindcss(),
        VitePWA({
            registerType: "autoUpdate",
            workbox: {
                clientsClaim: true,
                skipWaiting: true,
            },
            includeAssets: ["icons/icon-192.png", "icons/icon-512.png"],
            manifest: {
                name: "Color Contrast Checker",
                short_name: "CC Checker",
                description:
                    "Validate WCAG 2.1 & 2.2 color contrast ratios for AA & AAA compliance. A fast, PWA-ready tool by Karl Horning for accessible web design.",
                theme_color: "#0f172a",
                background_color: "#f8fafc",
                display: "standalone",

                // Relative so iOS anchors to the subfolder
                id: "./",
                start_url: "./",
                scope: "./",

                icons: [
                    {
                        src: "icons/icon-192.png",
                        sizes: "192x192",
                        type: "image/png",
                    },
                    {
                        src: "icons/icon-512.png",
                        sizes: "512x512",
                        type: "image/png",
                    },
                    {
                        src: "icons/maskable-512.png",
                        sizes: "512x512",
                        type: "image/png",
                        purpose: "maskable",
                    },
                ],
            },
        }),
    ],
});
