import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import Card from '../../components/Card';
import {Loading, Pagination} from '../../components';
import useFetchPokemons from '../../hooks/useFetchPokemons';
import {NavigationProps, Pokemon} from '../../types';
import {theme} from '../../theme';

function HomeScreen({navigation}: NavigationProps) {
  const {pokemons, isLoading, next, prev, count, offset} = useFetchPokemons();
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
    margin: theme.large,
    marginTop: 20,
    height: '100%',
    width: '100%',
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
