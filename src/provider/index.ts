import create from 'zustand';
import pokemonService from '../services/homeServices';
import {JSONObject} from '../types';

const useStorePokemons = create((set: (args: JSONObject) => void) => ({
  pokemons: [],
  isLoading: false,
  getPokemons: async () => {
    set({isLoading: true});
    const response = await pokemonService.getPokemons();
    console.log(response);
    set({pokemons: response, isLoading: false});
  },
}));

export {useStorePokemons};
