import type { StorybookConfig } from "@storybook/nextjs";
import path from "path";
const config: StorybookConfig = {
  stories: ["../**/*.stories.@(ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    {
      name: "@storybook/addon-styling",
      options: { postCss: true },
    },
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: async (config) => {
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        "@": path.resolve(__dirname, "../"),
      };
    }
    return config;
  },
};
export default config;
