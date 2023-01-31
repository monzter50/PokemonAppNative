import React from 'react';
import {Text, View, StyleSheet, ScrollView, Dimensions} from 'react-native';
import {Loading, ListBadges} from '../../components';
import useFetchInformation from '../../hooks/useFetchInformation';
import {backgroundColorType, zeroPad} from '../../utils';
import {theme} from '../../theme';
import {NavigationProps} from '../../types';
import Carousel from '../../components/Carousel';
import SvgUri from 'react-native-svg-uri';
import IconTypes from '../../components/IconTypes';

const SLIDER_WIDTH = Dimensions.get('window').width - 40;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.4);

function Detailscreen(props: NavigationProps) {
  const {route} = props;
  const {url, name} = route?.params;
  const {pokemon, isLoading} = useFetchInformation({url});

  const firstType =
    pokemon.types instanceof Array && pokemon.types.length > 0
      ? pokemon.types[pokemon.types.length - 1]
      : 'normal';
  const typeDefault = typeof firstType === 'string' ? firstType : 'normal';
  const currentColor = backgroundColorType(typeDefault);
  const ID = pokemon.id;
  const evolves = pokemon.evolutions;
  if (!pokemon && !evolves) {
    return null;
  }
  if (isLoading) {
    return <Loading />;
  }
  return (
    <ScrollView style={[styles.container, {backgroundColor: currentColor}]}>
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <View style={{paddingHorizontal: theme.medium}}>
            <View style={{alignItems: 'center', flexDirection: 'row'}}>
              <Text style={styles.h1}>{name}</Text>

              <ListBadges
                list={pokemon.types}
                justifySpace="flex-start"
                containerStyle={{marginBottom: 0}}
              />
            </View>

            <Text style={styles.h1}>#{zeroPad(ID, 3)}</Text>
          </View>
        </View>
        <View style={styles.image}>
          <IconTypes type={firstType} containerStyles={[styles.pokeball]} />

          <SvgUri
            source={{
              uri: `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemon.id}.svg`,
            }}
            width="200"
            height="200"
          />
        </View>
      </View>

      <View style={styles.containerInfo}>
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
          <Carousel evolves={evolves} />
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
    alignSelf: 'center',
  },

  tinyLogo: {
    width: ITEM_WIDTH,
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
    backgroundColor: 'red',
  },
  containerEvolutions: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
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
    alignItems: 'center',
    paddingVertical: theme.large,
    backgroundColor: '#000',
    opacity: 0.8,
  },
  headerContainer: {
    marginBottom: -20,
    position: 'relative',
  },
  containerInfo: {
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
    height: '100%',
  },
  pokeball: {
    position: 'absolute',
    right: 20,
    top: 50,
    opacity: 0.5,
  },
  image: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    height: 300,
  },
});
export default Detailscreen;
