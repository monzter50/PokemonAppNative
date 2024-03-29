import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
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
export default function IconTypes({ type, containerStyles }: IconTypesProps) {
  switch (type) {
    case 'bug':
      return <Bug size={200} color={'#fff'} style={containerStyles} />;
    case 'fire':
      return <Fire size={200} color={'#fff'} style={containerStyles} />;
    case 'water':
      return <Water size={200} color={'#fff'} style={containerStyles} />;
    case 'electric':
      return <Electric size={200} color={'#fff'} style={containerStyles} />;
    case 'dark':
      return <Dark size={200} color={'#fff'} style={containerStyles} />;
    case 'dragon':
      return <Dragon size={200} color={'#fff'} style={containerStyles} />;
    case 'fairy':
      return <Fairy size={200} color={'#fff'} style={containerStyles} />;
    case 'flying':
      return <Flying size={200} color={'#fff'} style={containerStyles} />;
    case 'ghost':
      return <Ghost size={200} color={'#fff'} style={containerStyles} />;
    case 'grass':
      return <Grass size={200} color={'#fff'} style={containerStyles} />;
    case 'ground':
      return <Ground size={200} color={'#fff'} style={containerStyles} />;
    case 'ice':
      return <Ice size={200} color={'#fff'} style={containerStyles} />;
    case 'normal':
      return <Normal size={200} color={'#fff'} style={containerStyles} />;
    case 'poison':
      return <Poison size={200} color={'#fff'} style={containerStyles} />;
    case 'psychic':
      return <Psychic size={200} color={'#fff'} style={containerStyles} />;
    case 'rock':
      return <Rock size={200} color={'#fff'} style={containerStyles} />;
    case 'steel':
      return <Steel size={200} color={'#fff'} style={containerStyles} />;
    default:
      return <View style={containerStyles} />;
  }
}
