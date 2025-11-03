import React, { useEffect, useRef } from 'react';
import { StyleSheet, Animated } from 'react-native';
import { theme } from '@monster/theme';
import { useStorePokemonsFavorite } from '@monster/provider';
import { Pokemon } from '@monster/types';
import FavoriteInfo from '@monster/components/FavoriteInfo';

function FavoriteScreen() {
  const { pokemons } = useStorePokemonsFavorite(
    (state: { pokemons: Pokemon[] }) => {
      return {
        pokemons: state.pokemons,
      };
    },
  );

  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 400,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <FavoriteInfo pokemons={pokemons} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    margin: theme.medium,
    marginTop: 20,
  },
});
export default FavoriteScreen;
