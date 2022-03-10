import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {theme} from '../../theme';
import {backgroundColorType} from '../../utils';
type BadgesProps = {
  type: string;
};
export default function Badges(props: BadgesProps) {
  const {type} = props;
  if (!type) {
    return null;
  }
  const currentColor = backgroundColorType(type);

  return (
    <View style={[styles.container, {backgroundColor: currentColor}]}>
      <Text style={styles.paraph}>{type}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    padding: theme.medium,
    paddingHorizontal: theme.large,
    marginLeft: theme.medium,
    marginBottom: theme.medium,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.15,
    shadowRadius: 1.0,
    elevation: 1,
  },
  paraph: {
    fontSize: 16,
    color: theme.colorWhite,
    fontWeight: 'bold',
  },
});
