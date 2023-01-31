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
    | 'steel'
    | string;
}
export default function IconTypes({type}: IconTypesProps) {
  switch (type) {
    case 'bug':
      return <Bug width={100} height={100} />;
    case 'fire':
      return <Fire width={100} height={100} />;
    case 'water':
      return <Water width={100} height={100} />;
    case 'electric':
      return <Electric width={100} height={100} />;
    case 'dark':
      return <Dark width={100} height={100} />;
    case 'dragon':
      return <Dragon width={100} height={100} />;
    case 'fairy':
      return <Fairy width={100} height={100} />;
    case 'flying':
      return <Flying width={100} height={100} />;
    case 'ghost':
      return <Ghost width={100} height={100} />;
    case 'grass':
      return <Grass width={100} height={100} />;
    case 'ground':
      return <Ground width={100} height={100} />;
    case 'ice':
      return <Ice width={100} height={100} />;
    case 'normal':
      return <Normal width={100} height={100} />;
    case 'poison':
      return <Poison width={100} height={100} />;
    case 'psychic':
      return <Psychic width={100} height={100} />;
    case 'rock':
      return <Rock width={100} height={100} />;
    case 'steel':
      return <Steel width={100} height={100} />;
    default:
      return <View />;
  }
}
