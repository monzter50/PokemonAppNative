import React from 'react';
import {Text, View, Button} from 'react-native';
type RouteParams = {
  itemId?: number;
  otherParam?: string;
};
type Route = {
  params?: RouteParams | undefined;
};
interface DetailsProps {
  navigation: any;
  route?: Route;
}
function Detailscreen(props: DetailsProps) {
  const {navigation, route} = props;
  // const {itemId, otherParam} = route?.params;

  const allParams: RouteParams | undefined = route?.params;
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Detailscreen Screen {allParams?.otherParam}</Text>
      <Text>
        itemId {allParams?.itemId}
        {/* {itemId} */}
      </Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

export default Detailscreen;
