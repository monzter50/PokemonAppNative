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
    console.log(_pokemonObj);
    navigation.navigate('Details', {
      itemId: 86,
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
            {pokemons.map((pokemon: Pokemon) => (
              <Card
                key={pokemon.name}
                name={pokemon.name}
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
