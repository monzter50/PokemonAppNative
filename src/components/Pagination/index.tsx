import React from 'react';
import { Text, TouchableHighlight, View, StyleSheet } from 'react-native';
import { theme } from '@monster/theme';
import { LeftIcon, RightIcon } from '@monster/components/Icons';
type PaginationProps = {
  next: () => void;
  prev: () => void;
  count: number;
  offset: number;
};
export default function Pagination(props: PaginationProps) {
  const { next, prev, offset, count } = props;
  return (
    <View style={styles.nav}>
      <TouchableHighlight underlayColor="rgba(73,182,77,1,0.6)" onPress={prev}>
        <LeftIcon size={40} color={'black'} />
      </TouchableHighlight>
      <View>
        <Text style={styles.title}>
          {offset} {'-'} {count}
        </Text>
      </View>
      <TouchableHighlight underlayColor="rgba(73,182,77,1,0.6)" onPress={next}>
        <RightIcon size={40} color={'black'} />
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: theme.large,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
