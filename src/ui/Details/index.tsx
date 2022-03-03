import React from 'react';
import {Text, View, Button} from 'react-native';
type DetailsProps = {
  navigation: any;
};
function Detailscreen({navigation}: DetailsProps) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Detailscreen Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

export default Detailscreen;
