import React from 'react';
import {Text, View, Button, StyleSheet, Image, ScrollView} from 'react-native';
import {Loading, ListBadges} from '../../components';
import useFetchInformation from '../../hooks/useFetchInformation';
import {backgroundColorType, zeroPad} from '../../utils';
import {theme} from '../../theme';
import {NavigationProps} from '../../types';

function Detailscreen(props: NavigationProps) {
  const {navigation, route} = props;
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
        <View>
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
              <View>
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
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate('Home')}
        />
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: theme.large,
    height: '100%',
    width: '100%',
  },
  logo: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
    alignSelf: 'center',
  },

  tinyLogo: {
    width: '100%',
    height: 100,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: -20,
  },
  paraph: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 14,
  },
  containerEvolutions: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
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
  },
  containerInfo: {
    marginBottom: 50,
    backgroundColor: theme.colorWhite,
    borderRadius: 20,
    padding: theme.medium,
    marginLeft: theme.medium,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.15,
    shadowRadius: 1.0,
    elevation: 1,
  },
});
export default Detailscreen;
