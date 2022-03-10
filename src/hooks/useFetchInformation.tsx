import {useEffect} from 'react';
import {useStorePokemonInformation} from '../provider';
import {JSONObject} from '../types';

type InformationProps = {
  name?: string;
  url: string;
};

export default function useFetchInformation(props: InformationProps) {
  const {url} = props;
  const informationStore = useStorePokemonInformation(
    (state: {
      pokemon: JSONObject;
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
