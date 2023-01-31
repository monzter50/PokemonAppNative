import React from 'react';

import {
  Dimensions,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import SvgUri from 'react-native-svg-uri';
// import {theme} from '../../theme';
import {theme} from '../../theme';

type Props = {
  images: string[];
};

const MAX_WIDTH = Dimensions.get('screen').width;

function CarouselEvolutions({evolves}: any) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      snapToInterval={MAX_WIDTH * 0.7}
      decelerationRate="fast"
      pagingEnabled
      style={{marginVertical: theme.space * 2}}>
      {evolves?.map((evol: any, index: number) => (
        <TouchableOpacity style={styles.containerEvolutions} key={index}>
          <View style={[styles.container]}>
            <SvgUri
              key={evol?.id}
              source={{
                uri: `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${evol.id}.svg`,
              }}
              width="200"
              height="200"
            />
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
    borderRadius: theme.space * 2,
    marginRight: theme.space * 2,
  },

  container: {
    height: '100%',
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CarouselEvolutions;
