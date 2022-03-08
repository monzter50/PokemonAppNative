import React from 'react';
import {Text, View, Pressable, Image, StyleSheet} from 'react-native';
import {CardProps} from '../../types';
import {theme} from '../../theme';

function Card(props: CardProps) {
  const {name, handleGoToDetails} = props;
  if (!name) {
    return null;
  }
  return (
    <Pressable
      style={styles.pokemonItem}
      onPress={() => handleGoToDetails({name})}>
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
    marginLeft: theme.medium,
    marginBottom: theme.medium,
    width: '46%',
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
