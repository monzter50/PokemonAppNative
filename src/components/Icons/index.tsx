import React from 'react';
import {Svg, Path} from 'react-native-svg';

type IconProps = {
  size: number;
  color: string;
};

const LeftIcon: React.FC<IconProps> = ({size = 40, color = 'black'}) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 256 512" fill={color}>
      <Path d="M137.4 406.6l-128-127.1C3.125 272.4 0 264.2 0 255.1s3.125-16.38 9.375-22.63l128-127.1c9.156-9.156 22.91-11.9 34.88-6.943S192 115.1 192 128v255.1c0 12.94-7.781 24.62-19.75 29.58S146.5 415.8 137.4 406.6z" />
    </Svg>
  );
};

const RightIcon: React.FC<IconProps> = ({size = 40, color = 'black'}) => {
  return (
    <Svg width={size} height={size} fill={color} viewBox="0 0 256 512">
      <Path d="M118.6 105.4l128 127.1C252.9 239.6 256 247.8 256 255.1s-3.125 16.38-9.375 22.63l-128 127.1c-9.156 9.156-22.91 11.9-34.88 6.943S64 396.9 64 383.1V128c0-12.94 7.781-24.62 19.75-29.58S109.5 96.23 118.6 105.4z" />
    </Svg>
  );
};

export {LeftIcon, RightIcon};
