import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {theme} from '../../../theme';

interface IEmpty {
  message: string;
}

export default function EmptyScreen({message}: IEmpty) {
  return (
    <View style={styles.body}>
      <Text style={styles.emptyMessage}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyMessage: {
    color: theme.colorGrey,
    opacity: 0.8,
  },
});
