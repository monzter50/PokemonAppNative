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
        tabBarActiveTintColor: theme.primaryColor,
        tabBarInactiveTintColor: theme.colorGrey,
        tabBarShowLabel: true,
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
          marginBottom: 5,
        },
        tabBarStyle: {
          height: 60,
          paddingTop: 5,
          paddingBottom: 8,
          borderTopWidth: 0,
          elevation: 10,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: -2,
          },
          shadowOpacity: 0.1,
          shadowRadius: 4,
        },
        headerStyle: {
          backgroundColor: theme.primaryColor,
          elevation: 4,
          shadowOpacity: 0.2,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
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
        options={{ title: 'Home', headerShown: false }}
      />
      <BottomTabs.Screen
        name="Search"
        component={SearchScreen}
        options={{ title: 'Search' }}
      />
      <BottomTabs.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{ title: 'Favorites' }}
      />
    </BottomTabs.Navigator>
  );
};
