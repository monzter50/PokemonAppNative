import React from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import {
  Bug,
  Dark,
  Dragon,
  Electric,
  Fairy,
  Fire,
  Flying,
  Ghost,
  Grass,
  Ground,
  Ice,
  Normal,
  Poison,
  Psychic,
  Rock,
  Steel,
  Water,
} from '../Icons';
interface IconTypesProps {
  type:
    | 'bug'
    | 'fire'
    | 'water'
    | 'electric'
    | 'dark'
    | 'dragon'
    | 'fairy'
    | 'flying'
    | 'ghost'
    | 'grass'
    | 'ground'
    | 'ice'
    | 'normal'
    | 'poison'
    | 'psychic'
    | 'rock'
    | 'steel'
    | string;
  containerStyles: StyleProp<ViewStyle>;
}
export default function IconTypes({type, containerStyles}: IconTypesProps) {
  switch (type) {
    case 'bug':
      return <Bug size={100} color={'#fff'} />;
    case 'fire':
      return <Fire size={100} color={'#fff'} />;
    case 'water':
      return <Water size={100} color={'#fff'} />;
    case 'electric':
      return <Electric size={100} color={'#fff'} />;
    case 'dark':
      return <Dark size={100} color={'#fff'} />;
    case 'dragon':
      return <Dragon size={100} color={'#fff'} />;
    case 'fairy':
      return <Fairy size={100} color={'#fff'} />;
    case 'flying':
      return <Flying size={100} color={'#fff'} />;
    case 'ghost':
      return <Ghost size={100} color={'#fff'} />;
    case 'grass':
      return <Grass size={100} color={'#fff'} />;
    case 'ground':
      return <Ground size={100} color={'#fff'} />;
    case 'ice':
      return <Ice size={100} color={'#fff'} />;
    case 'normal':
      return <Normal size={100} color={'#fff'} />;
    case 'poison':
      return <Poison size={100} color={'#fff'} />;
    case 'psychic':
      return <Psychic size={100} color={'#fff'} />;
    case 'rock':
      return <Rock size={100} color={'#fff'} />;
    case 'steel':
      return <Steel size={100} color={'#fff'} />;
    default:
      return <View />;
  }
}
