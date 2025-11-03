import React, { useEffect, useRef } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Animated,
} from 'react-native';
import { Loading, ListBadges } from '@monster/components';
import useFetchInformation from '@monster/hooks/useFetchInformation';
import { backgroundColorType, zeroPad } from '@monster/utils';
import { theme } from '@monster/theme';
import { NavigationProps, Pokemon } from '@monster/types';
import Carousel from '@monster/components/Carousel';
import SvgUri from 'react-native-svg-uri';
import IconTypes from '@monster/components/IconTypes';
import { FavoriteIcon } from '@monster/components/Icons';
import { useStorePokemonsFavorite } from '@monster/provider';

function Detailscreen(props: NavigationProps) {
  const { route } = props;
  const { url, name } = route?.params;
  const { pokemon, isLoading } = useFetchInformation({ url });

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(50)).current;
  const scaleAnim = useRef(new Animated.Value(0.8)).current;

  const { addPokemonFavorite, pokemons } = useStorePokemonsFavorite(
    (state: {
      addPokemonFavorite: (Pokemon: Pokemon) => Promise<void>;
      pokemons: Pokemon[];
    }) => {
      return {
        addPokemonFavorite: state.addPokemonFavorite,
        pokemons: state.pokemons,
      };
    },
  );

  useEffect(() => {
    if (!isLoading && pokemon) {
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 600,
          useNativeDriver: true,
        }),
        Animated.spring(slideAnim, {
          toValue: 0,
          tension: 50,
          friction: 7,
          useNativeDriver: true,
        }),
        Animated.spring(scaleAnim, {
          toValue: 1,
          tension: 50,
          friction: 7,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [isLoading, pokemon, fadeAnim, slideAnim, scaleAnim]);

  const firstType =
    pokemon.types instanceof Array && pokemon.types.length > 0
      ? pokemon.types[pokemon.types.length - 1]
      : 'normal';
  const typeDefault = typeof firstType === 'string' ? firstType : 'normal';
  const currentColor = backgroundColorType(typeDefault);
  const ID = pokemon.id;
  const evolves = pokemon.evolutions;
  const checkFavoritePokemon = (obj: Pokemon) => obj.id === ID;
  const disabled = pokemons.some(checkFavoritePokemon);
  if (!pokemon && !evolves) {
    return null;
  }
  if (isLoading) {
    return <Loading />;
  }
  return (
    <ScrollView style={[styles.container, { backgroundColor: currentColor }]}>
      <Animated.View
        style={[
          styles.headerContainer,
          {
            opacity: fadeAnim,
            transform: [{ translateY: slideAnim }],
          },
        ]}>
        <View style={styles.wrapper}>
          <View style={styles.header}>
            <View style={styles.title}>
              <Text style={styles.h1}>{name}</Text>

              <ListBadges
                list={pokemon.types}
                justifySpace="flex-start"
                containerStyle={styles.mb0}
              />
            </View>

            <Text style={styles.h1}>#{zeroPad(ID, 3)}</Text>
          </View>
        </View>
        <Animated.View
          style={[
            styles.image,
            {
              transform: [{ scale: scaleAnim }],
            },
          ]}>
          <IconTypes type={firstType} containerStyles={[styles.pokeball]} />

          <SvgUri
            source={{
              uri: `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemon.id}.svg`,
            }}
            width="200"
            height="200"
          />
        </Animated.View>
      </Animated.View>

      <Animated.View
        style={[
          styles.containerInfo,
          {
            opacity: fadeAnim,
          },
        ]}>
        <View style={styles.favoriteIconWrapper}>
          <TouchableOpacity
            disabled={disabled}
            onPress={() => addPokemonFavorite({ url, name, id: ID })}>
            <FavoriteIcon
              color={disabled ? theme.colorGrey : '#000000'}
              size={30}
            />
          </TouchableOpacity>
        </View>
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
      </Animated.View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mb0: {
    marginBottom: 0,
  },
  title: {
    alignItems: 'center',
    flexDirection: 'row',
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
  wrapper: {
    paddingVertical: theme.large,
    backgroundColor: '#000',
    opacity: 0.8,
  },
  header: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: theme.medium,
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
  favoriteIconWrapper: {
    alignItems: 'flex-end',
    paddingRight: theme.medium,
    paddingTop: theme.medium,
  },
});
export default Detailscreen;
