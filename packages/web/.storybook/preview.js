import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
setCompodocJson(docJson);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    expand: true
  },
  viewMode: 'docs',
  options: { showPanel: true },
  previewTabs: {
    'storybook/docs/panel': {
      hidden: false,
    },
  },
  docs: { inlineStories: true },
}
