import { RadioButton, RadioButtonProps } from "@kvib/react/src/components/RadioButton/RadioButton";
import { StoryFn, Meta } from "@storybook/react";

const meta: Meta<typeof RadioButton> = {
  title: "Komponenter/RadioKnapper",
  component: RadioButton,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "shown" },
    },
  },
  argTypes: {
    children: {
      description: "Text in button",
      table: {
        type: { summary: "string" },
      },
      control: "text",
    },
    colorScheme: {
      description: "Color of button",
      table: {
        type: { summary: "green | blue" },
      },
      options: ["green", "blue"],
      control: { type: "radio" },
    },
    size: {
      description: "Size of button",
      table: {
        type: { summary: "sm | md | lg" },
      },
      options: ["sm", "md", "lg"],
      control: { type: "radio" },
    },
    isDisabled: {
      description: "Toggles if button should be disabled",
      table: {
        type: { summary: "boolean" },
      },
      control: "boolean",
    },
  },
};

export default meta;

const Template: StoryFn<RadioButtonProps> = (args) => {
  const { children } = args;

  return <RadioButton {...args}>{children}</RadioButton>;
};

export const Default = Template.bind({});
Default.args = {
  children: "test",
  colorScheme: "green",
  size: "lg",
  isDisabled: false,
};

Default.storyName = "Radioknapp";
