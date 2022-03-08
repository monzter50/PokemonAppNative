import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  TouchableHighlight,
  Text,
} from 'react-native';
import Card from '../../components/Card';
import {LeftIcon, RightIcon, Loading} from '../../components';
import useFetchPokemons from '../../hooks/useFetchPokemons';
import {theme} from '../../theme';
import {NavigationProps, Pokemon} from '../../types';

function HomeScreen({navigation}: NavigationProps) {
  const {pokemons, isLoading, next, prev, count, offset} = useFetchPokemons();
  const handleGoToDetails = (_pokemonObj: Pokemon) => {
    console.log(_pokemonObj);
    navigation.navigate('Details', {
      itemId: 86,
      name: _pokemonObj.name,
    });
  };
  if (isLoading) {
    return <Loading />;
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.nav}>
        <TouchableHighlight
          underlayColor="rgba(73,182,77,1,0.6)"
          onPress={prev}>
          <LeftIcon size={40} color={'black'} />
        </TouchableHighlight>
        <View>
          <Text style={styles.title}>
            {offset} {'-'} {count}
          </Text>
        </View>
        <TouchableHighlight
          underlayColor="rgba(73,182,77,1,0.6)"
          onPress={next}>
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
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    // fontFamily: theme.fontFamilyBold,
  },
});

export default HomeScreen;
