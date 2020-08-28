import React, {PureComponent} from 'react';
import {View, StyleSheet} from 'react-native';

export default class EmptySpace extends PureComponent {
  render() {
    return <View style={styles.main} />;
  }
}

const styles = StyleSheet.create({
  main: {
    marginTop: 8,
  },
});
