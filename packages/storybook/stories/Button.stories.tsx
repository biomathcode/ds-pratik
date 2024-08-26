import React, { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import Button from '@pratik-ds/web/src/Button';

const meta: Meta<typeof Button> = {
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  argTypes: {
    children: {
      type: 'string',
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Button>;

const ButtonWithHooks = () => {
  // Sets the hooks for both the label and primary props
  const [value, setValue] = useState('Secondary');
  const [isPrimary, setIsPrimary] = useState(false);

  // Sets a click handler to change the label's value
  const handleOnChange = () => {
    if (!isPrimary) {
      setIsPrimary(true);
      setValue('Primary');
    }
  };
  return <Button onClick={handleOnChange}>{value} </Button>;
};
export const Basic: Story = {
  args: {
    children: 'Basic',
    color: 'primary',
  },
};

export const Primary: Story = {
  render: () => <ButtonWithHooks />,
};
