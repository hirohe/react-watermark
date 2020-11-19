import React from 'react';
import Watermark from './Watermark';

export default {
  title: 'watermark test',
  component: Watermark,
  argTypes: {
    text: { control: 'text' },
    textSize: { control: 'range', min: 4, max: 64 },
    textColor: { control: 'color' },
    opacity: { control: 'number', min: 0, max: 2, step: 0.01 },
  }
};

export const Default = ({ ...rest }): React.ReactNode => (
  <Watermark text={'Hello World'} {...rest}>
    <div style={{ width: 500, height: 500, backgroundColor: '#5f5f5f' }}>
    </div>
  </Watermark>
);
