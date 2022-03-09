import React from 'react';
import {Text, View, Button, StyleSheet, Image} from 'react-native';
import useFetchInformation from '../../hooks/useFetchInformation';
import {theme} from '../../theme';
import {NavigationProps} from '../../types';

function Detailscreen(props: NavigationProps) {
  const {navigation, route} = props;
  const {url, name} = route?.params;
  const {pokemon, isLoading} = useFetchInformation({url});
  console.log(
    pokemon,
    isLoading,
    `https://img.pokemondb.net/artwork/${name}.jpg`,
  );
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.logo}
          source={{
            uri: `https://img.pokemondb.net/artwork/${name}.jpg`,
          }}
        />
        <Text style={styles.title}>{name}</Text>
      </View>
      <Text>itemId {url}</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: theme.large,
    backgroundColor: '#FFF',
  },
  logo: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
export default Detailscreen;
