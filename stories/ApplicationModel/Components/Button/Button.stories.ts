import type { Meta, StoryObj } from '@storybook/react';

import Button, { ButtonProps } from '@components/button';

const meta: Meta<typeof Button> = {
  title: 'ApplicationModel/Components/Button',
  component: Button,
  argTypes: {
    backgroundColor: {
      control: 'color',
    },

  },
};

export default meta;

type Story = StoryObj<ButtonProps>;

export const Primary: Story = {
  args: {
    children: 'Button',
  },
};