import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Badges from '../Badges';
import {theme} from '../../theme';
type ListBadgesProps = {
  list?: string[];
  title?: string;
  justifySpace?: string;
};
export default function ListBadges(props: ListBadgesProps) {
  const {list, title, justifySpace = 'space-between'} = props;
  return (
    <View style={{marginVertical: theme.large}}>
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
