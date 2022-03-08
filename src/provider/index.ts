import create from 'zustand';
import pokemonService from '../services/homeServices';
import {JSONObject} from '../types';

const useStorePokemons = create((set: (args: JSONObject) => void) => ({
  pokemons: [],
  isLoading: false,
  getPokemons: async (params: JSONObject) => {
    set({isLoading: true});
    const response = await pokemonService.getPokemons(params);
    console.log('response ->', response);
    set({pokemons: response, isLoading: false});
  },
}));

export {useStorePokemons};
