import {useEffect} from 'react';
import {useStorePokemons} from '../provider';

function useFetchPokemons() {
  const pokemons = useStorePokemons((state: {pokemons: any}) => state.pokemons);
  let getPokemons = useStorePokemons(
    (state: {getPokemons: any}) => state.getPokemons,
  );
  const isLoading = useStorePokemons(
    (state: {isLoading: boolean}) => state.isLoading,
  );
  console.log('pokemons', pokemons);
  useEffect(() => {
    (async function () {
      await getPokemons();
    })();
  }, [getPokemons]);

  return {pokemons, isLoading};
}

export default useFetchPokemons;
