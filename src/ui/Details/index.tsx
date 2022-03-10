import React from 'react';
import {
  Text,
  View,
  Button,
  StyleSheet,
  Image,
  ScrollView,
  StatusBar,
} from 'react-native';
import {Loading} from '../../components';
import useFetchInformation from '../../hooks/useFetchInformation';
import {theme} from '../../theme';
import {NavigationProps} from '../../types';

function Detailscreen(props: NavigationProps) {
  const {navigation, route} = props;
  const {url, name} = route?.params;
  const {pokemon, isLoading} = useFetchInformation({url});
  const info = pokemon;

  if (!info || !pokemon) {
    return null;
  }
  if (isLoading) {
    return <Loading />;
  }
  console.log('info', pokemon);

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} />

      <ScrollView
        style={{
          backgroundColor: 'blue',
          flex: 1,
          paddingTop: 40,
        }}>
        <View style={styles.row}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.title}>#001</Text>
        </View>
        <View>
          <Image
            style={styles.logo}
            source={{
              uri: `https://img.pokemondb.net/artwork/${name}.jpg`,
            }}
          />
        </View>
        <View
          style={{paddingVertical: theme.large, marginVertical: theme.large}}>
          <Text style={styles.subTitle}>Weekness</Text>
          <View style={styles.row}>
            {pokemon.weekness instanceof Array &&
              pokemon.weekness.map((el: any) => (
                <Text style={styles.paraph}>{el}</Text>
              ))}
          </View>
        </View>
        <View
          style={{paddingVertical: theme.large, marginVertical: theme.large}}>
          <Text style={styles.subTitle}>Fortress</Text>
          <View style={styles.row}>
            {pokemon.fortress instanceof Array &&
              pokemon.fortress.map((el: any) => (
                <Text style={styles.paraph}>{el}</Text>
              ))}
          </View>
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            paddingVertical: theme.large,
            marginVertical: theme.large,
            backgroundColor: '#eee',
          }}>
          {pokemon.evoltions instanceof Array &&
            pokemon.evoltions.map((el: any) => (
              <View>
                <Image
                  style={styles.tinyLogo}
                  source={{
                    uri: `https://img.pokemondb.net/artwork/${el.speciesName}.jpg`,
                  }}
                />
                <Text style={styles.paraph}>{el.speciesName}</Text>
              </View>
            ))}
        </View>

        <Button
          title="Go to Home"
          onPress={() => navigation.navigate('Home')}
        />
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: theme.large,
    backgroundColor: 'red',
    height: '100%',
    width: '100%',
    // paddingTop: 80,
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
  tinyLogo: {
    width: '100%',
    height: 70,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  subTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: theme.medium,
  },
  paraph: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 14,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
});
export default Detailscreen;
