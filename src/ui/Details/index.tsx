import React from 'react';
import {Text, View, StyleSheet, Image, ScrollView} from 'react-native';
import {Loading, ListBadges} from '../../components';
import useFetchInformation from '../../hooks/useFetchInformation';
import {backgroundColorType, zeroPad} from '../../utils';
import {theme} from '../../theme';
import {NavigationProps} from '../../types';

function Detailscreen(props: NavigationProps) {
  const {route} = props;
  const {url, name} = route?.params;
  const {pokemon, isLoading} = useFetchInformation({url});
  const firstType =
    pokemon.types instanceof Array &&
    pokemon.types.length > 0 &&
    pokemon.types[pokemon.types.length - 1];
  const typeDefault = typeof firstType === 'string' ? firstType : 'normal';
  const currentColor = backgroundColorType(typeDefault);
  const ID = pokemon.id;
  if (!pokemon) {
    return null;
  }
  if (isLoading) {
    return <Loading />;
  }
  return (
    <ScrollView style={[styles.container, {backgroundColor: currentColor}]}>
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <Text style={styles.h1}>{name}</Text>
          <Text style={styles.h1}>#{zeroPad(ID, 3)}</Text>
        </View>
        <View style={styles.image}>
          <Image
            style={styles.pokeball}
            source={require('../../images/Pokeball.png')}
          />
          <Image
            style={styles.logo}
            source={{
              uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`,
            }}
          />
        </View>
      </View>

      <View style={styles.containerInfo}>
        <ListBadges list={pokemon.types} justifySpace="space-around" />
        <ListBadges
          title="Weekness"
          list={pokemon.weekness}
          justifySpace="flex-start"
        />
        <ListBadges
          title="Fortress"
          list={pokemon.fortress}
          justifySpace="flex-start"
        />

        <View style={styles.containerEvolutions}>
          {pokemon.evoltions instanceof Array &&
            pokemon.evoltions.map((el: any) => (
              <View style={styles.evolve}>
                <Image
                  style={styles.tinyLogo}
                  source={{
                    uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${el.id}.png`,
                  }}
                />
                <Text style={styles.paraph}>{el.speciesName}</Text>
              </View>
            ))}
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: theme.medium,
    flex: 1,
  },
  logo: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
    alignSelf: 'center',
  },

  tinyLogo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: -15,
  },
  paraph: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 14,
  },
  evolve: {
    flexGrow: 1,
    flexShrink: 0,
    flexBasis: '40.3%',
    margin: theme.medium,
  },
  containerEvolutions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: theme.large,
  },
  h1: {
    fontSize: 25,
    fontWeight: 'bold',
    textTransform: 'capitalize',
    color: theme.colorWhite,
  },
  header: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingVertical: theme.large,
    marginBottom: -50,
  },
  headerContainer: {
    marginBottom: -20,
    position: 'relative',
  },
  containerInfo: {
    marginBottom: 50,
    backgroundColor: theme.colorWhite,
    borderRadius: 20,
    padding: theme.medium,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.15,
    shadowRadius: 1.0,
    elevation: 1,
  },
  pokeball: {
    position: 'absolute',
    right: 20,
    top: 50,
  },
  image: {
    position: 'relative',
    justifyContent: 'center',
  },
});
export default Detailscreen;
