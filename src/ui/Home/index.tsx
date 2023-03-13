import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Card from '@monster/components/Card';
import { Loading, Pagination } from '@monster/components';
import useFetchPokemons from '@monster/hooks/useFetchPokemons';
import { NavigationProps, Pokemon } from '@monster/types';
import { theme } from '@monster/theme';

function HomeScreen({ navigation }: NavigationProps) {
  const { pokemons, isLoading, next, prev, count, offset } = useFetchPokemons();
  const handleGoToDetails = (_pokemonObj: Pokemon) => {
    navigation.push('Details', {
      url: _pokemonObj.url || '',
      name: _pokemonObj.name,
    });
  };

  return (
    <View style={styles.container}>
      <Pagination next={next} prev={prev} count={count} offset={offset} />
      {isLoading && <Loading />}
      {!isLoading && (
        <ScrollView style={styles.wrapper}>
          <View style={styles.list}>
            {pokemons?.map((pokemon: Pokemon) => (
              <Card
                key={`card-${pokemon.name}`}
                name={pokemon.name}
                url={pokemon.url}
                handleGoToDetails={handleGoToDetails}
              />
            ))}
          </View>
        </ScrollView>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    margin: theme.medium,
    marginTop: 20,
  },
  list: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    flex: 1,
  },
});

export default HomeScreen;
