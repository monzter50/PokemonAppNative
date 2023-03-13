import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import { theme } from '@monster/theme';
import { SearchIcon } from '@monster/components/Icons';
import PokemonInfo from '@monster/components/PokemonInfo';
import useFetchPokemon from '@monster/hooks/useFetchPokemon';

export default function Search() {
  const { status, pokemon, err, onChangeHandler } = useFetchPokemon();

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <View style={styles.head}>
          <View style={styles.wrapper}>
            <SearchIcon
              size={30}
              color="black"
              style={{ marginRight: theme.medium }}
            />
            <TextInput
              autoCorrect={false}
              style={styles.input}
              onChangeText={value => {
                onChangeHandler(value);
              }}
              placeholder="Search #ID o Name"
            />
          </View>
        </View>
        <PokemonInfo status={status} pokemon={pokemon} err={err} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 30,
    borderWidth: 1,
    backgroundColor: '#FFFFFF',
    marginHorizontal: theme.medium,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  head: {
    margin: theme.medium,
  },

  input: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
});
