import React from 'react';
import { Button } from './Button';

export default {
  title: 'Testing/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Red Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'White Button',
};