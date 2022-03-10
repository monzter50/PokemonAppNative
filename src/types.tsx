export type Primitive = number | string | boolean | null;

export type JSONObject = {[k: string]: JSONTypes};

export type JSONArray = JSONTypes[];

export type JSONTypes = JSONArray | JSONObject | Primitive;

export type NavigationProps = {
  route: {
    params: {
      url: string;
      name: string;
    };
  };
  navigation: {
    goBack: () => void;
    navigate: (arg: Primitive, params?: JSONObject) => void;
    push: (arg: Primitive, params?: JSONObject) => void;
  };
};

export type OptionsProps = {
  [k: string]: JSONTypes;
  endpoint: string | '';
};

export type CardProps = {
  name: string;
  id?: number;
  url?: string;
  handleGoToDetails: (pokemonObj: Pokemon) => void;
};

export type Pokemon = {
  name: string;
  url?: string;
};

export type InformationProps = {
  name?: string;
  url: string;
};
export type EvolutionsProps = {
  id: string;
  item?: any;
  minLevel: number;
  speciesName: string;
  triggerName?: any;
};
export type PokemonInformation = {
  name: string;
  fortress?: string[];
  weekness?: string[];
  types?: string[];
  evoltions: EvolutionsProps[];
  evolutionsChain: {url: string};
  id: number;
};
