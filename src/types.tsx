export type Primitive = number | string | boolean | null;

export type JSONObject = {[k: string]: JSONTypes};

export type JSONArray = JSONTypes[];

export type JSONTypes = JSONArray | JSONObject | Primitive;

export type DetailsProps = {
  route: {
    params: {
      itemId: number;
      otherParam: string;
    };
  };
  navigation: {
    goBack: () => void;
    navigate: (arg: Primitive) => void;
  };
};
