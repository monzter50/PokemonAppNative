import React from 'react';
import { View, StyleSheet } from 'react-native';
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

  return (
    <View style={styles.container}>
      <FavoriteInfo pokemons={pokemons} />
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
});
export default FavoriteScreen;
