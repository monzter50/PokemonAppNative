import React from 'react';
import {View} from 'react-native';
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
} from '../ilustration';
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
    | 'steel';
}
export default function IconTypes({type}: IconTypesProps) {
  switch (type) {
    case 'bug':
      return <Bug />;
    case 'fire':
      return <Fire />;
    case 'water':
      return <Water />;
    case 'electric':
      return <Electric />;
    case 'dark':
      return <Dark />;
    case 'dragon':
      return <Dragon />;
    case 'fairy':
      return <Fairy />;
    case 'flying':
      return <Flying />;
    case 'ghost':
      return <Ghost />;
    case 'grass':
      return <Grass />;
    case 'ground':
      return <Ground />;
    case 'ice':
      return <Ice />;
    case 'normal':
      return <Normal />;
    case 'poison':
      return <Poison />;
    case 'psychic':
      return <Psychic />;
    case 'rock':
      return <Rock />;
    case 'steel':
      return <Steel />;
    default:
      return <View />;
  }
}
