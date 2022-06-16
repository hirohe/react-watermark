import React from 'react';
import Watermark from './Watermark';

export default {
  title: 'watermark test',
  component: Watermark,
  argTypes: {
    text: { control: 'text' },
    textSize: {
      control: { type: 'range', min: 4, max: 64 }
    },
    textColor: { control: 'color' },
    fontFamily: { control: 'text' },
    opacity: {
      control: { type: 'range', min: 0, max: 1, step: 0.01 }
    },
    gutter: {
      control: { type: 'range', min: 0, max: 150 }
    },
    rotate: {
      control: { type: 'range', min: -360, max: 360 }
    }
  }
};

const Template = (args): React.ReactNode => (
  <Watermark {...args}>
    <div style={{ height: 500, backgroundColor: '#5f5f5f' }}>
    </div>
  </Watermark>
);

export const Default = Template.bind({});
Default.args = {
  text: 'Hello World'
};

export const MultilineText = Template.bind({});
MultilineText.args = {
  text: 'Hello\nagain',
  multiline: true,
  gutter: 16
};

export const MultilineTextWithLineHeight = Template.bind({});
MultilineTextWithLineHeight.args = {
  text: '🌚\n🚀',
  multiline: true,
  lineHeight: '3.2rem',
  gutter: 24,
  rotate: 0,
  opacity: 1
};
