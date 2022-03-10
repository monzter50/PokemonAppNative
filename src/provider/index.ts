import create from 'zustand';
import pokemonService from '../services/pokemonServices';
import {getEvolutions} from '../utils';
import {JSONObject} from '../types';

type PokemonObj = {
  evolutionsChain: {
    url: string;
  };
  weekness: string[];
  fortress: string[];
  types: string[];
  name: string;
  evoltions: JSONObject[];
};

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

const useStorePokemonInformation = create((set: (args: Object) => void) => ({
  pokemon: {},
  isLoading: false,
  getInformation: async (url: string) => {
    set({isLoading: true});

    try {
      const response = await pokemonService.getInformation(url);
      let dataInformation: PokemonObj = {
        evolutionsChain: {url: ''},
        weekness: [],
        fortress: [],
        types: [],
        name: '',
        evoltions: [],
      };
      const {data} = response;
      const typesUrl = data.types.map(
        (item: {type: {url: Object}}) => item.type.url,
      );

      const typesNames = data.types.map(
        (item: {type: {name: string}}) => item.type.name,
      );

      const urlList = [data.species.url, ...typesUrl];
      const fetchList = urlList.map(uri => pokemonService.getInformation(uri));
      const values = await Promise.all([...fetchList]);
      values.forEach(item => {
        const {data: information} = item;
        if (information.evolution_chain) {
          dataInformation.evolutionsChain = information.evolution_chain;
        }
        if (information.damage_relations) {
          information.damage_relations.double_damage_from.forEach(
            function (damage: {name: string}) {
              dataInformation.weekness.push(damage.name);
            },
          );
          const fortress: string[] =
            information.damage_relations.double_damage_to.map(
              (damage: JSONObject) => damage.name,
            );

          // dataInformation.weekness = [...dataInformation.weekness, ...weekness];
          dataInformation.fortress = [...dataInformation.fortress, ...fortress];
        }
      });
      const evoltions = await pokemonService.getInformation(
        dataInformation.evolutionsChain.url,
      );
      dataInformation.types = [...typesNames];
      dataInformation.name = data.name;
      const {data: evo} = evoltions;
      const allEvolutions = getEvolutions(evo.chain);
      dataInformation.evoltions = [...allEvolutions];

      set({
        pokemon: {...dataInformation},
        isLoading: false,
      });
    } catch (error) {
      console.log(error);
      set({isLoading: false});
    }
  },
}));
export {useStorePokemons, useStorePokemonInformation};
