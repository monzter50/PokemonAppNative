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
import {Loading, ListBadges} from '../../components';
import useFetchInformation from '../../hooks/useFetchInformation';
import {backgroundColorType} from '../../utils';
import {theme} from '../../theme';
import {NavigationProps} from '../../types';

function Detailscreen(props: NavigationProps) {
  const {navigation, route} = props;
  const {url, name} = route?.params;
  const {pokemon, isLoading} = useFetchInformation({url});
  const firstType =
    pokemon.types instanceof Array &&
    pokemon.types.length > 0 &&
    pokemon.types[pokemon.types.length - 1];
  const typeDefault = typeof firstType === 'string' ? firstType : 'normal';
  const currentColor = backgroundColorType(typeDefault);
  if (!pokemon) {
    return null;
  }
  if (isLoading) {
    return <Loading />;
  }
  console.log('info', pokemon, typeof firstType);

  return (
    <View style={[styles.container, {backgroundColor: currentColor}]}>
      <StatusBar barStyle={'light-content'} />

      <ScrollView
        style={{
          flex: 1,
          paddingTop: 40,
        }}>
        <View style={styles.header}>
          <Text style={styles.h1}>{name}</Text>
          <Text style={styles.h1}>#001</Text>
        </View>
        <View>
          <Image
            style={styles.logo}
            source={{
              uri: `https://img.pokemondb.net/artwork/${name}.jpg`,
            }}
          />
        </View>
        <View style={styles.containerInfo}>
          <ListBadges list={pokemon.types} justifySpace="space-around" />
          <ListBadges
            title="Weekness"
            list={pokemon.weekness}
            justifySpace="flex-start"
          />
          <ListBadges
            title="Fortress"
            list={pokemon.fortress}
            justifySpace="flex-start"
          />

          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
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
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: theme.large,
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
    justifyContent: 'space-between',
  },
  containerTypes: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingVertical: theme.large,
  },
  h1: {
    fontSize: 25,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  header: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingVertical: theme.large,
  },
  containerInfo: {
    backgroundColor: theme.colorWhite,
    borderRadius: 20,
    padding: theme.medium,
    marginLeft: theme.medium,
    marginBottom: theme.medium,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.15,
    shadowRadius: 1.0,

    elevation: 1,
  },
});
export default Detailscreen;
