import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SearchScreen from '../../ui/Search';
import FavoriteScreen from '../../ui/Favorites';
import HomeStack from '../HomeStackNavigator';
import {ListIcon, FavoriteIcon, SearchIcon} from '../../components/Icons';
import {theme} from '../../theme';
const BottomTabs = createBottomTabNavigator();

export const BottomTabsNavigator: React.FC = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={({route}) => ({
        // headerTitleStyle: { fontFamily: theme.fontFamilyBold },
        tabBarActiveTintColor: theme.primaryColor,
        tabBarInactiveTintColor: theme.colorGrey,
        tabBarShowLabel: false,
        // headerShown: false,
        tabBarIcon: ({color, size}) => {
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
        options={{title: 'List Pokemon'}}
      />
      <BottomTabs.Screen
        name="Search"
        component={SearchScreen}
        options={{title: 'Search Pokemon'}}
      />
      <BottomTabs.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{title: 'Favorite List'}}
      />
    </BottomTabs.Navigator>
  );
};
