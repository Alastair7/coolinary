import path from "path";
import { AliasOptions } from "vite";
import { defineConfig } from "vitest/config";

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
  resolve: {
    alias: aliases,
  },
  test: {
    environment: "happy-dom",
  },
});
