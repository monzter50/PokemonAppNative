import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import Card from '../../components/Card';
import useFetchPokemons from '../../hooks/useFetchPokemons';
import {NavigationProps, Pokemon} from '../../types';

function HomeScreen({navigation}: NavigationProps) {
  const {pokemons, isLoading} = useFetchPokemons();
  const handleGoToDetails = (_pokemonObj: Pokemon) => {
    console.log(_pokemonObj);
    navigation.navigate('Details', {
      itemId: 86,
      name: _pokemonObj.name,
    });
  };
  if (isLoading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <ScrollView>
      {pokemons.map((pokemon: Pokemon) => (
        <Card
          key={pokemon.name}
          name={pokemon.name}
          handleGoToDetails={handleGoToDetails}
        />
      ))}
    </ScrollView>
  );
}

export default HomeScreen;
