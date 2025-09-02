import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
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
                    "A Progressive Web App for checking colour (color) contrast ratios and WCAG compliance, with offline support, saved palettes, and suggested combinations.",
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
