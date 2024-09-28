import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";
var FRONTEND_HOST = process.env.VITE_APP_HOST;
var FRONTEND_PORT = process.env.VITE_APP_PORT;
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    optimizeDeps: {
        exclude: ["chunk-EWS7HTKY.js"],
    },
    server: {
        port: Number(FRONTEND_PORT) || 3002,
        host: FRONTEND_HOST || "localhost",
    },
    build: {
        outDir: "build",
    },
    preview: {
        port: 3001,
        host: FRONTEND_HOST || "localhost",
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
            "@image": path.resolve(__dirname, "src/assets/image/index"),
            "@svg": path.resolve(__dirname, "src/assets/svg/index"),
            "@color": path.resolve(__dirname, "src/theme/utils/color"),
        },
    },
});
