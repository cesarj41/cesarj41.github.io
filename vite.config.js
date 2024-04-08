import preact from "@preact/preset-vite";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact()],
  base: "/<REPO>/",
  test: {
    environment: "happy-dom",
    setupFiles: ["./.vitest/test-setup.js"],
    globals: true
  }
});
