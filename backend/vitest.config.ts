import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "node",
    // .trigger/ holds the build folders of `trigger.dev dev`, with third-party test files
    exclude: ["dist/**", "**/node_modules/**", ".trigger/**"],
  },
});
