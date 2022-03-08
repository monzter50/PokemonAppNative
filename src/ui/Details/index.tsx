import React from 'react';
import {Text, View, Button} from 'react-native';
import {NavigationProps} from '../../types';

function Detailscreen(props: NavigationProps) {
  const {navigation, route} = props;
  const {itemId, name} = route?.params;
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Detailscreen Screen {name}</Text>
      <Text>itemId {itemId}</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

export default Detailscreen;
