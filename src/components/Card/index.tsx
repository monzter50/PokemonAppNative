import React, { useState, useEffect } from 'react';
import {
  Text,
  Pressable,
  Image,
  StyleSheet,
  Animated,
  View,
  ActivityIndicator,
} from 'react-native';
import { CardProps } from '@monster/types';
import { theme } from '@monster/theme';

function Card(props: CardProps) {
  const { name, handleGoToDetails, url } = props;
  const scaleAnim = React.useRef(new Animated.Value(1)).current;
  const fadeAnim = React.useRef(new Animated.Value(0)).current;
  const [imageLoading, setImageLoading] = useState(true);
  const [pokemonId, setPokemonId] = useState<number | null>(null);

  useEffect(() => {
    // Animate card entrance
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();

    // Extract Pokemon ID from URL
    if (url) {
      const matches = url.match(/\/(\d+)\//);
      if (matches) {
        setPokemonId(parseInt(matches[1], 10));
      }
    }
  }, [fadeAnim, url]);

  if (!name) {
    return null;
  }

  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.92,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      friction: 4,
      tension: 60,
      useNativeDriver: true,
    }).start();
  };

  const handleImageLoad = () => {
    setImageLoading(false);
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
            opacity: fadeAnim,
            transform: [{ scale: scaleAnim }],
          },
        ]}>
        <View style={styles.imageContainer}>
          {imageLoading && (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="small" color={theme.primaryColor} />
            </View>
          )}
          <Image
            style={[styles.logo, imageLoading && styles.hiddenImage]}
            source={{
              uri: `https://img.pokemondb.net/artwork/${name}.jpg`,
            }}
            onLoad={handleImageLoad}
          />
        </View>

        <View style={styles.infoContainer}>
          {pokemonId && (
            <Text style={styles.pokemonId}>#{String(pokemonId).padStart(3, '0')}</Text>
          )}
          <Text style={styles.title} numberOfLines={1}>
            {name}
          </Text>
        </View>

        <View style={styles.decorativeCircle} />
      </Animated.View>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  pokemonItem: {
    backgroundColor: '#fff',
    borderRadius: 24,
    padding: 16,
    margin: 8,
    minWidth: 150,
    overflow: 'hidden',
    position: 'relative',
    shadowColor: theme.primaryColor,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 8,
    borderWidth: 1,
    borderColor: 'rgba(75, 93, 232, 0.08)',
  },
  imageContainer: {
    width: '100%',
    height: 110,
    marginBottom: 12,
    position: 'relative',
    backgroundColor: 'rgba(75, 93, 232, 0.03)',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  hiddenImage: {
    opacity: 0,
  },
  loadingContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoContainer: {
    alignItems: 'center',
    gap: 4,
  },
  pokemonId: {
    fontSize: 12,
    fontWeight: '700',
    color: theme.primaryColor,
    letterSpacing: 0.5,
    opacity: 0.7,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'capitalize',
    color: '#2D3748',
    letterSpacing: 0.3,
  },
  decorativeCircle: {
    position: 'absolute',
    top: -30,
    right: -30,
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: theme.primaryColor,
    opacity: 0.04,
  },
});
export default Card;
