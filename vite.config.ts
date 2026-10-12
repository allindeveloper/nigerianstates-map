import react from "@vitejs/plugin-react";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react({ jsxRuntime: "classic" }), cssInjectedByJsPlugin()],
  build: {
    copyPublicDir: false,
    lib: {
      entry: "src/lib/index.ts",
      name: "NigerianStatesMap",
      formats: ["es", "cjs", "umd"],
      fileName: (format) => {
        if (format === "es") return "index.js";
        if (format === "cjs") return "index.cjs";
        return "index.umd.js";
      },
    },
    cssCodeSplit: false,
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
  test: {
    environment: "jsdom",
    include: ["src/**/*.test.ts", "src/**/*.test.tsx"],
  },
});
