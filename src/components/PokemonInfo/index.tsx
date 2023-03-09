import React from 'react';
import EmptyScreen from '../States/Empty';
import {useNavigation} from '@react-navigation/native';
import Card from '../Card';
import {View, StyleSheet} from 'react-native';
import {baseUrl} from '../../constant';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Pokemon} from '../../types';

export default function PokemonInfo({status, err, pokemon}: any) {
  const {navigate} = useNavigation<NativeStackNavigationProp<any>>();
  const url = `${baseUrl}/pokemon/${pokemon.id}`;

  const handleGoToDetails = (_pokemonObj: Pokemon) => {
    navigate('HomeStack', {
      screen: 'Details',
      params: {url: _pokemonObj.url, name: _pokemonObj.name},
    });
  };
  if (status === 'idle') {
    return <EmptyScreen message={'Search a your pokemon favorite'} />;
  } else if (status === 'pending') {
    return <EmptyScreen message={'Loading...'} />;
  } else if (status === 'not_found') {
    return <EmptyScreen message={'Not found'} />;
  } else if (status === 'rejected') {
    // this will be handled by an error boundary
    throw err;
  } else if (status === 'resolved') {
    return (
      <View style={styles.body}>
        <Card
          name={pokemon.name}
          url={url}
          handleGoToDetails={handleGoToDetails}
        />
      </View>
    );
  }

  throw new Error('This should be impossible');
}
const styles = StyleSheet.create({
  body: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
