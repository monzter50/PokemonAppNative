import React from 'react';
import {Text, View, Button} from 'react-native';
import {DetailsProps} from '../../types';

function Detailscreen(props: DetailsProps) {
  const {navigation, route} = props;
  const {itemId, otherParam} = route?.params;
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Detailscreen Screen {otherParam}</Text>
      <Text>itemId {itemId}</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

export default Detailscreen;
