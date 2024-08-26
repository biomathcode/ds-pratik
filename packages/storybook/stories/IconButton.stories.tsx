import React from 'react';

import IconButton from '@pratik-ds/web/src/IconButton';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof IconButton> = {
  component: IconButton,
  // 👇 Meta-level parameters

  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  argTypes: {
    children: {
      type: 'string',
    },
    disabled: {
      type: 'boolean',
    },
    loading: {
      type: 'boolean',
    },
  },
};
export default meta;

type Story = StoryObj<typeof IconButton>;

const DemoIconButton = (args) => (
  <IconButton {...args}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      style={{ width: '18px', height: '18px' }}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
      />
    </svg>
  </IconButton>
);

export const Basic: Story = {
  args: {
    children: 'hello',
    loading: false,
    disabled: false,
  },
};

export const Loading: Story = {
  args: {
    children: 'hello',
    loading: true,
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    children: 'hello',
    loading: false,
    disabled: true,
  },
};
export const Primary: Story = {
  render: (args) => <DemoIconButton {...args} />,
};
