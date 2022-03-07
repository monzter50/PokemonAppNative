import React, {useEffect} from 'react';
import {Text, View, Button} from 'react-native';
import pokemonService from '../../services/homeServices';
import {NavigationProps} from '../../types';

function HomeScreen({navigation}: NavigationProps) {
  useEffect(() => {
    pokemonService
      .getPokemons({})
      .then(result => {
        console.log('response', result);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() =>
          navigation.navigate('Details', {
            itemId: 86,
            otherParam: 'anything you want here',
          })
        }
      />
    </View>
  );
}

export default HomeScreen;
