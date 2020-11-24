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

export const Default = ({ ...rest }): React.ReactNode => (
  <Watermark text={'Hello World'} {...rest}>
    <div style={{ height: 500, backgroundColor: '#5f5f5f' }}>
    </div>
  </Watermark>
);
