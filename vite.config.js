import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    publicDir: "./public",
    resolve: {
        alias: {
            "@app": path.resolve(__dirname, "src"),
            "@store": path.resolve(__dirname, "src/store"),
        },
    },
    server: {
        proxy: {
            "^/api/.*": {
                target: "http://localhost:8081",
                changeOrigin: true,
                secure: false,
                ws: true,
            },
        },
    },
    base: "https://github.com/Hieupc1505/reactShopv2",
    // some other configuration
});
