import React from 'react';

import {
  Dimensions,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Text,
} from 'react-native';
import SvgUri from 'react-native-svg-uri';
import {theme} from '../../theme';
import {zeroPad} from '../../utils';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
type PokemonType = {
  id?: number | string;
  name?: string;
};
type EvolType = {
  id?: string | number;
  item?: string;
  minLevel?: number;
  speciesName?: string;
  triggerName?: string;
};
type EvolvesType = {
  evolves: EvolType[];
};

const MAX_WIDTH = Dimensions.get('screen').width;

function CarouselEvolutions({evolves}: EvolvesType) {
  const {navigate} = useNavigation<NativeStackNavigationProp<any>>();
  const handleGoToDetails = ({id, name}: PokemonType) => {
    navigate('Details', {
      url: `https://pokeapi.co/api/v2/pokemon/${id}/` || '',
      name: name,
    });
  };
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      snapToInterval={MAX_WIDTH * 0.7}
      decelerationRate="fast"
      pagingEnabled
      style={{marginVertical: theme.space * 2}}>
      {evolves?.map((evol: EvolType, index: number) => (
        <TouchableOpacity
          onPress={() =>
            handleGoToDetails({id: evol.id, name: evol.speciesName})
          }
          style={styles.containerEvolutions}
          key={index}>
          <View style={[styles.container]}>
            <SvgUri
              key={evol?.id}
              source={{
                uri: `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${evol.id}.svg`,
              }}
              width="200"
              height="200"
            />
            <View style={styles.title}>
              <Text style={styles.h1}>{evol?.speciesName}</Text>
              <Text style={styles.h1}>#{zeroPad(evol?.id, 3)}</Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  containerEvolutions: {
    width: MAX_WIDTH * 0.7,
    height: MAX_WIDTH * 0.9,
    overflow: 'hidden',

    marginRight: theme.space * 2,
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    marginTop: theme.medium,
  },

  container: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: theme.colorGrey,
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: theme.space * 2,
  },
  h1: {
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
});

export default CarouselEvolutions;
