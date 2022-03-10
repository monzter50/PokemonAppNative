import {useEffect, useState} from 'react';
import {useStorePokemons} from '../provider';
import {Pokemon, JSONObject} from '../types';

function useFetchPokemons() {
  const [limit] = useState(10);
  const [offset, setOffset] = useState(0);
  const next = () => {
    setOffset(prev => prev + limit);
  };
  const prev = () => {
    if (offset > 0) {
      setOffset(prevState => prevState - limit);
    }
  };
  const store = useStorePokemons(
    (state: {pokemons: Pokemon[]; isLoading: boolean; count: number}) => {
      return {
        pokemons: state.pokemons || [],
        isLoading: state.isLoading,
        count: state.count,
      };
    },
  );
  let getPokemons = useStorePokemons(
    (state: {getPokemons: (params: JSONObject) => void}) => state.getPokemons,
  );

  useEffect(() => {
    (async function () {
      await getPokemons({limit, offset});
    })();
  }, [getPokemons, limit, offset]);

  return {
    pokemons: store.pokemons,
    isLoading: store.isLoading,
    next,
    prev,
    count: store.count,
    offset,
  };
}

export default useFetchPokemons;
