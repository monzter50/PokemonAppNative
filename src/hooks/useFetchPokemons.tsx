import {useEffect, useState} from 'react';
import {useStorePokemons} from '../provider';

function useFetchPokemons() {
  const [limit] = useState(20);
  const [offset] = useState(10);
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
      await getPokemons({limit, offset});
    })();
  }, [getPokemons, limit, offset]);

  return {pokemons, isLoading};
}

export default useFetchPokemons;
