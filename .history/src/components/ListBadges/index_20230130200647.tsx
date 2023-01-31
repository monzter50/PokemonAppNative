import React from 'react';
import {View, Text, StyleSheet, StyleProp, ViewStyle} from 'react-native';
import Badges from '../Badges';
import {theme} from '../../theme';
type ListBadgesProps = {
  list?: string[];
  title?: string;
  justifySpace?: string;
  containerStyle?: StyleProp<ViewStyle>;
};
export default function ListBadges(props: ListBadgesProps) {
  const {containerStyle, list, title, justifySpace = 'space-between'} = props;
  const container = StyleSheet.compose<ViewStyle>(
    [{marginVertical: theme.large}],
    containerStyle,
  );
  return (
    <View style={container}>
      {title && <Text style={styles.subTitle}>{title}</Text>}
      <View style={stylesProps({direction: justifySpace}).row}>
        {list instanceof Array &&
          list.map((el: any, index: number) => (
            <Badges key={`${title}-${el}-${index}`} type={el} />
          ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  subTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: theme.medium,
  },

  paraph: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 14,
  },
});

const stylesProps = (props: any) =>
  StyleSheet.create({
    row: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: props.direction,
    },
  });
