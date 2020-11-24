import React, {CSSProperties, useEffect, useState} from 'react';

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

function generateSvg(options: Required<Omit<WatermarkProps, 'wrapperStyle' | 'show'>>) {
  const { text, textColor, textSize, fontFamily, opacity, gutter, rotate } = options;
  const size = calcTextRenderedWidth(text, textSize, fontFamily) + gutter;
  const center = size / 2;
  return `<svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg"><text fill="${textColor}" x="50%" y="50%" font-size="${textSize}" text-anchor="middle" font-family="${fontFamily}" transform="rotate(${rotate} ${center} ${center})" opacity="${opacity}">${text}</text></svg>`;
}

function calcTextRenderedWidth(text: string, fontSize: number, fontFamily: string) {
  const span = document.createElement('span');
  span.innerText = text;
  span.style.fontSize = fontSize + 'px';
  span.style.fontFamily = fontFamily;
  span.style.visibility = 'hidden';
  document.body.appendChild(span);
  const width = span.offsetWidth;
  document.body.removeChild(span);
  return width;
}

const watermarkWrapperStyle: CSSProperties = {
  position: 'relative',

}

const Watermark: React.FC<WatermarkProps> = ({
  show = true,
  text,
  textColor = '#cccccc',
  textSize = 24,
  fontFamily = 'Arial, Helvetica, sans-serif',
  opacity = 0.2,
  wrapperStyle,
  gutter = 0,
  rotate = -45,
  children,
}) => {
  const [backgroundImage, setBackgroundImage] = useState<string>('');

  useEffect(() => {
    const svg = generateSvg({ text, textColor, textSize, fontFamily, opacity, gutter, rotate });
    const convertedSvg = encodeURIComponent(svg)
      .replace(/'/g, '%27')
      .replace(/"/g, '%22');
    setBackgroundImage(`url("data:image/svg+xml,${convertedSvg}")`);
  }, [show, text, textColor, textSize, opacity, gutter, rotate]);

  const watermarkStyle: CSSProperties = {
    pointerEvents: 'none',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    content: '',
    backgroundRepeat: 'repeat',
    zIndex: 1,
    backgroundImage,
  }

  return (
    <div style={{ ...watermarkWrapperStyle, ...wrapperStyle }}>
      {show && <div style={watermarkStyle} />}
      {children}
    </div>
  );
};

export default Watermark;
