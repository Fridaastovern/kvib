// Button.stories.ts|tsx

import type { Meta, StoryObj } from "@storybook/react";

import { Checkbox } from "@kvib/react/src/components/Checkbox";

const meta: Meta<typeof Checkbox> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Komponenter/Checkbox",

  component: Checkbox,
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {},
};
