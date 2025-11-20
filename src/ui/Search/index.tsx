import React, { useRef, useEffect, useState } from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  Animated,
  TouchableOpacity,
  Text,
  Keyboard,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import { theme } from '@monster/theme';
import { SearchIcon } from '@monster/components/Icons';
import PokemonInfo from '@monster/components/PokemonInfo';
import useFetchPokemon from '@monster/hooks/useFetchPokemon';

export default function Search() {
  const { status, pokemon, err, onChangeHandler } = useFetchPokemon();
  const searchBarAnim = useRef(new Animated.Value(0)).current;
  const contentAnim = useRef(new Animated.Value(0)).current;
  const [searchValue, setSearchValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<TextInput>(null);

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

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
    onChangeHandler(value);
  };

  const handleClearSearch = () => {
    setSearchValue('');
    onChangeHandler('');
    inputRef.current?.focus();
  };

  const dismissKeyboard = () => {
    Keyboard.dismiss();
    setIsFocused(false);
  };

  const searchExamples = ['pikachu', 'charizard', 'bulbasaur', '25', '1', '150'];

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={styles.container}>
        <View style={styles.searchSection}>
          <Animated.View
            style={[
              styles.searchBarContainer,
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
            <View style={[styles.searchWrapper, isFocused && styles.searchWrapperFocused]}>
              <SearchIcon
                size={22}
                color={isFocused ? theme.primaryColor : '#666'}
                style={{ marginRight: 12 }}
              />
              <TextInput
                ref={inputRef}
                autoCorrect={false}
                autoCapitalize="none"
                style={styles.input}
                onChangeText={handleSearchChange}
                value={searchValue}
                placeholder="Search by ID or Name"
                placeholderTextColor="#999"
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                returnKeyType="search"
                onSubmitEditing={dismissKeyboard}
              />
              {searchValue.length > 0 && (
                <TouchableOpacity onPress={handleClearSearch} style={styles.clearButton}>
                  <Text style={styles.clearButtonText}>✕</Text>
                </TouchableOpacity>
              )}
            </View>
          </Animated.View>

          {searchValue.length === 0 && (
            <Animated.View
              style={[
                styles.hintsContainer,
                {
                  opacity: contentAnim,
                },
              ]}>
              <Text style={styles.hintsTitle}>Try searching for:</Text>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.hintsScrollContent}>
                {searchExamples.map((example, index) => (
                  <TouchableOpacity
                    key={`hint-${index}`}
                    style={styles.hintChip}
                    onPress={() => {
                      setSearchValue(example);
                      onChangeHandler(example);
                    }}>
                    <Text style={styles.hintChipText}>{example}</Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </Animated.View>
          )}
        </View>

        <Animated.View
          style={[
            styles.resultsContainer,
            {
              opacity: contentAnim,
            },
          ]}>
          <PokemonInfo status={status} pokemon={pokemon} err={err} />
        </Animated.View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  searchSection: {
    backgroundColor: '#fff',
    paddingBottom: 16,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  },
  searchBarContainer: {
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  searchWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8F9FA',
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderWidth: 2,
    borderColor: 'transparent',
    transition: 'all 0.3s ease',
  },
  searchWrapperFocused: {
    backgroundColor: '#fff',
    borderColor: theme.primaryColor,
    shadowColor: theme.primaryColor,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#2D3748',
    padding: 0,
  },
  clearButton: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
  clearButtonText: {
    fontSize: 16,
    color: '#666',
    fontWeight: '600',
  },
  hintsContainer: {
    marginTop: 16,
    paddingHorizontal: 16,
  },
  hintsTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666',
    marginBottom: 12,
  },
  hintsScrollContent: {
    paddingRight: 16,
  },
  hintChip: {
    backgroundColor: 'rgba(75, 93, 232, 0.08)',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
    borderWidth: 1,
    borderColor: 'rgba(75, 93, 232, 0.15)',
  },
  hintChipText: {
    color: theme.primaryColor,
    fontSize: 14,
    fontWeight: '600',
    textTransform: 'capitalize',
  },
  resultsContainer: {
    flex: 1,
    paddingTop: 16,
  },
});
