import React from 'react';
import { Text, Pressable, Image, StyleSheet, Animated } from 'react-native';
import { CardProps } from '@monster/types';
import { theme } from '@monster/theme';

function Card(props: CardProps) {
  const { name, handleGoToDetails, url } = props;
  const scaleAnim = React.useRef(new Animated.Value(1)).current;

  if (!name) {
    return null;
  }

  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      friction: 3,
      tension: 40,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Pressable
      onPress={() => handleGoToDetails({ name, url })}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}>
      <Animated.View
        style={[
          styles.pokemonItem,
          {
            transform: [{ scale: scaleAnim }],
          },
        ]}>
        <Image
          style={styles.logo}
          source={{
            uri: `https://img.pokemondb.net/artwork/${name}.jpg`,
          }}
        />
        <Text style={styles.title}>{name}</Text>
      </Animated.View>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  logo: {
    width: '100%',
    height: 100,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  pokemonItem: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: theme.medium,
    margin: theme.medium,
    minWidth: 150,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'capitalize',
    marginTop: 8,
  },
});
export default Card;
