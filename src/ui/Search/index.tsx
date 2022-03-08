import React, {useState} from 'react';
import {TextInput, View, StyleSheet} from 'react-native';
import {theme} from '../../theme';

export default function Search() {
  const [text, onChangeText] = useState('');
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  input: {
    height: 40,
    borderWidth: 1,
    marginHorizontal: theme.medium,
    padding: 10,
    backgroundColor: '#FFFFFF',
  },
});
