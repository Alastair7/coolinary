import react from "@vitejs/plugin-react";
import path from "path";
import { AliasOptions, defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/

const aliases: AliasOptions = [
  {
    find: "@",
    replacement: path.resolve(__dirname, "src"),
  },
  {
    find: "@hooks",
    replacement: path.resolve(__dirname, "src/shared/hooks"),
  },
  {
    find: "@components",
    replacement: path.resolve(__dirname, "src/shared/components"),
  },
];

export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: aliases,
  },
});
