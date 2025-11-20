import React, { useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';
import { theme } from '@monster/theme';

interface IEmpty {
  message: string;
}

export default function EmptyScreen({ message }: IEmpty) {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.9)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        tension: 50,
        friction: 7,
        useNativeDriver: true,
      }),
    ]).start();
  }, [fadeAnim, scaleAnim]);

  const getEmoji = (msg: string) => {
    const lowerMsg = msg.toLowerCase();
    if (lowerMsg.includes('loading')) return '⏳';
    if (lowerMsg.includes('not found')) return '🔍';
    if (lowerMsg.includes('search')) return '🎯';
    return '📱';
  };

  return (
    <View style={styles.body}>
      <Animated.View
        style={[
          styles.content,
          {
            opacity: fadeAnim,
            transform: [{ scale: scaleAnim }],
          },
        ]}>
        <Text style={styles.emoji}>{getEmoji(message)}</Text>
        <Text style={styles.emptyMessage}>{message}</Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  content: {
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 32,
    borderRadius: 24,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 4,
    minWidth: 200,
  },
  emoji: {
    fontSize: 56,
    marginBottom: 16,
  },
  emptyMessage: {
    color: theme.colorGrey,
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    lineHeight: 24,
  },
});
