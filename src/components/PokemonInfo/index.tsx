import React, { useEffect, useRef } from 'react';
import EmptyScreen from '@monster/components/States/Empty';
import { useNavigation } from '@react-navigation/native';
import Card from '@monster/components/Card';
import { View, StyleSheet, Animated, Text } from 'react-native';
import { baseUrl } from '@monster/constant';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Pokemon } from '@monster/types';
import { theme } from '@monster/theme';

export default function PokemonInfo({ status, err, pokemon }: any) {
  const { navigate } = useNavigation<NativeStackNavigationProp<any>>();
  const id = pokemon?.id ?? '';
  const url = `${baseUrl}/pokemon/${id}`;
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(20)).current;

  useEffect(() => {
    if (status === 'resolved') {
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 400,
          useNativeDriver: true,
        }),
        Animated.spring(slideAnim, {
          toValue: 0,
          tension: 50,
          friction: 7,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [status, fadeAnim, slideAnim]);

  const handleGoToDetails = (_pokemonObj: Pokemon) => {
    navigate('HomeStack', {
      screen: 'Details',
      params: { url: _pokemonObj.url, name: _pokemonObj.name },
    });
  };

  if (status === 'idle') {
    return <EmptyScreen message={'Search for your favorite Pokemon'} />;
  } else if (status === 'pending') {
    return <EmptyScreen message={'Searching...'} />;
  } else if (status === 'not_found') {
    return <EmptyScreen message={'Pokemon not found'} />;
  } else if (status === 'rejected') {
    // this will be handled by an error boundary
    throw err;
  } else if (status === 'resolved') {
    return (
      <View style={styles.body}>
        <Animated.View
          style={[
            styles.resultCard,
            {
              opacity: fadeAnim,
              transform: [{ translateY: slideAnim }],
            },
          ]}>
          <Text style={styles.resultLabel}>Search Result</Text>
          <Card
            name={pokemon.name}
            url={url}
            handleGoToDetails={handleGoToDetails}
          />
        </Animated.View>
      </View>
    );
  }

  throw new Error('This should be impossible');
}

const styles = StyleSheet.create({
  body: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  resultCard: {
    width: '100%',
    maxWidth: 400,
    alignItems: 'center',
  },
  resultLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: theme.colorGrey,
    marginBottom: 12,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
});
