import React from 'react';
import { Text, View, Pressable, Image, StyleSheet } from 'react-native';
import { CardProps } from '@monster/types';
import { theme } from '@monster/theme';

function Card(props: CardProps) {
  const { name, handleGoToDetails, url } = props;
  if (!name) {
    return null;
  }
  return (
    <Pressable
      style={styles.pokemonItem}
      onPress={() => handleGoToDetails({ name, url })}>
      <View>
        <Image
          style={styles.logo}
          source={{
            uri: `https://img.pokemondb.net/artwork/${name}.jpg`,
          }}
        />
        <Text style={styles.title}>{name}</Text>
      </View>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },

  logo: {
    width: '100%',
    height: 100,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  pokemonItem: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: theme.medium,
    margin: theme.medium,
    width: '40%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.15,
    shadowRadius: 1.0,

    elevation: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
export default Card;
