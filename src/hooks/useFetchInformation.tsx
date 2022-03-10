import {useEffect} from 'react';
import {useStorePokemonInformation} from '../provider';
import {PokemonInformation, InformationProps} from '../types';

export default function useFetchInformation(props: InformationProps) {
  const {url} = props;
  const informationStore = useStorePokemonInformation(
    (state: {
      pokemon: PokemonInformation;
      isLoading: boolean;
      getInformation: (url: string) => Promise<void>;
    }) => {
      return {
        pokemon: state.pokemon,
        isLoading: state.isLoading,
        getInformation: state.getInformation,
      };
    },
  );

  const {getInformation} = informationStore;

  useEffect(() => {
    (async function () {
      await getInformation(url);
    })();
  }, [getInformation, url]);

  return {
    pokemon: informationStore.pokemon,
    isLoading: informationStore.isLoading,
  };
}
