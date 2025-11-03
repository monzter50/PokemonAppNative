import React, { useState, useCallback } from 'react';
import { View, FlatList, StyleSheet, RefreshControl } from 'react-native';
import Card from '@monster/components/Card';
import { Loading, Pagination } from '@monster/components';
import useFetchPokemons from '@monster/hooks/useFetchPokemons';
import { NavigationProps, Pokemon } from '@monster/types';
import { theme } from '@monster/theme';

function HomeScreen({ navigation }: NavigationProps) {
  const { pokemons, isLoading, next, prev, count, offset } = useFetchPokemons();
  const [refreshing, setRefreshing] = useState(false);

  const handleGoToDetails = (_pokemonObj: Pokemon) => {
    navigation.push('Details', {
      url: _pokemonObj.url || '',
      name: _pokemonObj.name,
    });
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    // Simulate refresh - in real app, this would refetch data
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, []);

  const renderItem = ({ item }: { item: Pokemon }) => (
    <Card
      name={item.name}
      url={item.url}
      handleGoToDetails={handleGoToDetails}
    />
  );

  const keyExtractor = (item: Pokemon) => `card-${item.name}`;

  return (
    <View style={styles.container}>
      <Pagination next={next} prev={prev} count={count} offset={offset} />
      {isLoading && <Loading />}
      {!isLoading && (
        <FlatList
          data={pokemons}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          numColumns={2}
          contentContainerStyle={styles.list}
          columnWrapperStyle={styles.columnWrapper}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    margin: theme.medium,
    marginTop: 20,
  },
  list: {
    paddingBottom: 20,
  },
  columnWrapper: {
    justifyContent: 'space-between',
    paddingHorizontal: 5,
  },
});

export default HomeScreen;
