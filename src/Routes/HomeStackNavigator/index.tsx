import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '@monster/ui/Home';
import DetailScreen from '@monster/ui/Details';

const HomeStack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: true,
      }}>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'List Pokemons' }}
      />
      <HomeStack.Screen
        name="Details"
        component={DetailScreen}
        options={{ title: 'Detail Pokemon' }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;
