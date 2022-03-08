import React from 'react';
import {Text, View, Pressable, Image, StyleSheet} from 'react-native';
import {CardProps} from '../../types';

function Card(props: CardProps) {
  const {name, handleGoToDetails} = props;
  if (!name) {
    return null;
  }
  return (
    <Pressable onPress={() => handleGoToDetails({name})}>
      <View>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: `https://img.pokemondb.net/artwork/${name}.jpg`,
          }}
        />
        <Text>{name}</Text>
      </View>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
});
export default Card;
