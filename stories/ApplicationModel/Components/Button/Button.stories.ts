import type { Meta, StoryObj } from '@storybook/react';

import Button, { ButtonProps } from '@components/button';

const meta: Meta<ButtonProps> = {
  title: 'ApplicationModel/Components/Button',
  component: Button,
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
    color: {
      control: 'color',
    },
    children: {
      control: 'text',
    },
    title: {
      control: 'text',
    },
    size: {
      options: ['xs', 's', undefined],
      control: { type: 'radio' },
    },
    disabled: {
      control: 'boolean',
    },
    type: {
      options: ["button", "submit", "reset", undefined],
      control: { type: 'radio' },
    }

  },
};

export default meta;

type Story = StoryObj<ButtonProps>;

export const Primary: Story = {
  args: {
    children: 'Button',
    backgroundColor: "#aaaaff",
    color: "#fff"
  },
};