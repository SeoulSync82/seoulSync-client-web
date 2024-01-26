import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: "esnext",
    chunkSizeWarningLimit: 1200,
    sourcemap: "hidden",
  },
  plugins: [react()],
  resolve: {
    alias: [{ find: "@", replacement: "/src" }],
  },
});
