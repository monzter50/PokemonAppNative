import create from 'zustand';
import pokemonService from '../services/homeServices';
import {JSONObject} from '../types';

const useStorePokemons = create((set: (args: JSONObject) => void) => ({
  pokemons: [],
  count: 0,
  isLoading: false,
  getPokemons: async (params: JSONObject) => {
    set({isLoading: true});
    const response = await pokemonService.getPokemons(params);
    const {data, count} = response;
    set({pokemons: data, isLoading: false, count});
  },
}));

export {useStorePokemons};
