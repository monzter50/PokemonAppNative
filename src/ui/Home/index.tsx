import React from 'react';
import {Text, View, ScrollView, StyleSheet} from 'react-native';
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
    <ScrollView style={styles.container}>
      <View style={styles.list}>
        {pokemons.map((pokemon: Pokemon) => (
          <Card
            key={pokemon.name}
            name={pokemon.name}
            handleGoToDetails={handleGoToDetails}
          />
        ))}
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
