import React from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import Card from '../../components/Card';
import {LeftIcon, RightIcon} from '../../components/Icons';
import useFetchPokemons from '../../hooks/useFetchPokemons';
import {theme} from '../../theme';
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
      <View style={styles.nav}>
        <TouchableHighlight
          underlayColor="rgba(73,182,77,1,0.6)"
          onPress={() => console.log('Loading...')}>
          <LeftIcon size={40} color={'black'} />
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor="rgba(73,182,77,1,0.6)"
          onPress={() => console.log('Loading...')}>
          <RightIcon size={40} color={'black'} />
        </TouchableHighlight>
      </View>
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
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.large,
    marginLeft: theme.large,
    marginRight: theme.large,
  },
});

export default HomeScreen;
