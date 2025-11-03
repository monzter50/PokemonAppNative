import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '@monster/ui/Home';
import DetailScreen from '@monster/ui/Details';
import { theme } from '@monster/theme';

const HomeStack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: true,
        animation: 'slide_from_right',
        headerStyle: {
          backgroundColor: theme.primaryColor,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerShadowVisible: true,
      }}>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'List Pokemons',
          animation: 'fade',
        }}
      />
      <HomeStack.Screen
        name="Details"
        component={DetailScreen}
        options={{
          title: 'Detail Pokemon',
          animation: 'slide_from_bottom',
        }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;
