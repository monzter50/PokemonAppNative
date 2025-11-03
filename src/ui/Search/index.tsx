import React, { useRef, useEffect } from 'react';
import { TextInput, View, StyleSheet, Animated } from 'react-native';
import { theme } from '@monster/theme';
import { SearchIcon } from '@monster/components/Icons';
import PokemonInfo from '@monster/components/PokemonInfo';
import useFetchPokemon from '@monster/hooks/useFetchPokemon';

export default function Search() {
  const { status, pokemon, err, onChangeHandler } = useFetchPokemon();
  const searchBarAnim = useRef(new Animated.Value(0)).current;
  const contentAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.stagger(200, [
      Animated.spring(searchBarAnim, {
        toValue: 1,
        tension: 50,
        friction: 7,
        useNativeDriver: true,
      }),
      Animated.timing(contentAnim, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }),
    ]).start();
  }, [searchBarAnim, contentAnim]);

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Animated.View
          style={[
            styles.head,
            {
              opacity: searchBarAnim,
              transform: [
                {
                  translateY: searchBarAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [-20, 0],
                  }),
                },
              ],
            },
          ]}>
          <View style={styles.wrapper}>
            <SearchIcon
              size={24}
              color="#666"
              style={{ marginRight: theme.medium }}
            />
            <TextInput
              autoCorrect={false}
              style={styles.input}
              onChangeText={value => {
                onChangeHandler(value);
              }}
              placeholder="Search by ID or Name"
              placeholderTextColor="#999"
            />
          </View>
        </Animated.View>
        <Animated.View
          style={{
            flex: 1,
            opacity: contentAnim,
          }}>
          <PokemonInfo status={status} pokemon={pokemon} err={err} />
        </Animated.View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    borderRadius: 30,
    borderWidth: 0,
    backgroundColor: '#FFFFFF',
    marginHorizontal: theme.medium,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  head: {
    margin: theme.medium,
    marginTop: 20,
  },

  input: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
});
