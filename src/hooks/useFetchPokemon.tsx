import { useState, useRef } from 'react';
import { useStorePokemon } from '@monster/provider';

export default function useFetchPokemon() {
  const [, onChangeText] = useState('');
  const timeout = useRef<any | undefined>(null);
  const pokemonStore = useStorePokemon(
    (state: {
      pokemon: any;
      status: string;
      err: any;
      getPokemon: (name: string) => Promise<void>;
    }) => {
      return {
        pokemon: state.pokemon,
        status: state.status,
        err: state.err,
        getPokemon: state.getPokemon,
      };
    },
  );
  const onChangeHandler = (value: string) => {
    clearTimeout(timeout.current);
    onChangeText(value);
    if (value.length !== 0) {
      timeout.current = setTimeout(() => {
        getPokemon(value);
      }, 1000);
    }
  };
  const { getPokemon } = pokemonStore;

  return {
    pokemon: pokemonStore.pokemon,
    status: pokemonStore.status,
    err: pokemonStore.err,
    onChangeHandler,
  };
}
