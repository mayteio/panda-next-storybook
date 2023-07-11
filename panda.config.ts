import { defineConfig } from "@pandacss/dev";
import { recipes, semanticTokens, tokens, textStyles } from "./theme";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    tokens: {
      colors: { heavy: { value: "blue" } },
    },
    extend: {
      recipes,
      textStyles,
      tokens,
      semanticTokens,
    },
  },
  jsxFramework: "react",
  outExtension: "js",
  // The output directory for your css system
  outdir: "styled-system",
});
