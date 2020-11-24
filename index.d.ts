import { CSSProperties, PropsWithChildren } from 'react';

export interface WatermarkProps {
  show?: boolean;
  text: string;
  textColor?: string;
  textSize?: number;
  fontFamily?: string;
  opacity?: number;
  rotate?: number;
  gutter?: number;
  wrapperStyle?: CSSProperties;
}

export function Watermark(props: PropsWithChildren<WatermarkProps>);
