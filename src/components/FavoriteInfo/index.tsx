import React from 'react';
import Card from '@monster/components/Card';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import EmptyScreen from '@monster/components/States/Empty';
import { Pokemon } from '@monster/types';
import { ScrollView, StyleSheet, View } from 'react-native';
type FavoriteInfoProps = {
  pokemons: Pokemon[];
};
export default function FavoriteInfo({ pokemons }: FavoriteInfoProps) {
  const { navigate } = useNavigation<NativeStackNavigationProp<any>>();

  const handleGoToDetails = (_pokemonObj: Pokemon) => {
    navigate('HomeStack', {
      screen: 'Details',
      params: { url: _pokemonObj.url, name: _pokemonObj.name },
    });
  };
  if (pokemons.length === 0) {
    return <EmptyScreen message={'Add your pokemon favorite'} />;
  }
  return (
    <ScrollView>
      <View style={styles.list}>
        {pokemons.map(pokemon => (
          <Card
            name={pokemon.name}
            url={pokemon.url}
            handleGoToDetails={handleGoToDetails}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
