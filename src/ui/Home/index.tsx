import React from 'react';
import {Text, View, Button, ScrollView} from 'react-native';
// import pokemonService from '../../services/homeServices';
import useFetchPokemons from '../../hooks/useFetchPokemons';
import {NavigationProps} from '../../types';

function HomeScreen({navigation}: NavigationProps) {
  const {pokemons, isLoading} = useFetchPokemons();
  if (isLoading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }
  return (
    <ScrollView>
      {pokemons.map((pokemon: any) => (
        <View>
          <Text>{pokemon?.name}</Text>
        </View>
      ))}

      <Button
        title="Go to Details"
        onPress={() =>
          navigation.navigate('Details', {
            itemId: 86,
            otherParam: 'anything you want here',
          })
        }
      />
    </ScrollView>
  );
}

export default HomeScreen;
