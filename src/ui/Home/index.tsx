import React from 'react';
import {Text, View, Button} from 'react-native';

type HomeProps = {
  navigation: any;
};
function HomeScreen({navigation}: HomeProps) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

export default HomeScreen;
