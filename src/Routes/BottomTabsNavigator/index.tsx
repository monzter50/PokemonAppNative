import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SearchScreen from '@monster/ui/Search';
import FavoriteScreen from '@monster/ui/Favorites';
import HomeStack from '@monster/Routes/HomeStackNavigator';
import { ListIcon, FavoriteIcon, SearchIcon } from '@monster/components/Icons';
import { theme } from '@monster/theme';
const BottomTabs = createBottomTabNavigator();

export const BottomTabsNavigator: React.FC = () => {
  return (
    <BottomTabs.Navigator
      initialRouteName="HomeStack"
      screenOptions={({ route }) => ({
        // headerTitleStyle: { fontFamily: theme.fontFamilyBold },
        tabBarActiveTintColor: theme.primaryColor,
        tabBarInactiveTintColor: theme.colorGrey,
        tabBarShowLabel: false,
        tabBarIcon: ({ color, size }) => {
          if (route.name === 'HomeStack') {
            return <ListIcon color={color} size={size} />;
          }
          if (route.name === 'Search') {
            return <SearchIcon color={color} size={size} />;
          }
          if (route.name === 'Favorite') {
            return <FavoriteIcon color={color} size={size} />;
          }
          return null;
        },
      })}>
      <BottomTabs.Screen
        name="HomeStack"
        component={HomeStack}
        options={{ title: 'List Pokemon', headerShown: false }}
      />
      <BottomTabs.Screen
        name="Search"
        component={SearchScreen}
        options={{ title: 'Search Pokemon' }}
      />
      <BottomTabs.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{ title: 'Favorite List' }}
      />
    </BottomTabs.Navigator>
  );
};
