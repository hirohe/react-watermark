import React, {CSSProperties, useEffect, useState} from 'react';

interface WatermarkProps {
  show?: boolean;
  text: string;
  textColor?: string;
  textSize?: number;
  opacity?: number;
}

function generateSvg(text: string, textColor: string, textSize: number, opacity: number) {
  const size = calcTextRenderedWidth(text, textSize);
  const center = size / 2;
  return `<svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg"><text fill="${textColor}" x="50%" y="50%" font-size="${textSize}" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', Helvetica, 'Microsoft Yahei', sans-serif" transform="rotate(-45 ${center} ${center})" opacity="${opacity}">${text}</text></svg>`;
}

function calcTextRenderedWidth(text: string, fontSize: number) {
  // TODO should consider font-family
  const span = document.createElement('span');
  span.innerText = text;
  span.style.fontSize = fontSize + 'px';
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
  show,
  text,
  textColor = '#cccccc',
  textSize = 24,
  opacity = 0.2,
  children,
}) => {
  const [backgroundImage, setBackgroundImage] = useState<string>('');

  useEffect(() => {
    const svg = generateSvg(text, textColor, textSize, opacity);
    const convertedSvg = encodeURIComponent(svg)
      .replace(/'/g, '%27')
      .replace(/"/g, '%22');
    setBackgroundImage(`url("data:image/svg+xml,${convertedSvg}")`);
  }, [show, text, textColor, textSize, opacity]);

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
    <div style={watermarkWrapperStyle}>
      <div style={watermarkStyle} />
      {children}
    </div>
  );
};

export default Watermark;
