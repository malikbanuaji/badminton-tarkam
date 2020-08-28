import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {Colors, Typography} from '../styles';

const BASE_DIMENSION = 25;
const INNER_DIMENSION = BASE_DIMENSION - 10;
const BORDER_WIDTH = 3;

export default function RadioButton({selected, text, onPress}) {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.main}>
        <View style={styles.container}>
          <View style={selected && styles.selected} />
        </View>
        <Text style={styles.radioText}>{text}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  main: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioText: {
    fontSize: Typography.base,
    fontFamily: 'PTSansCaption-Regular',
  },
  container: {
    width: BASE_DIMENSION,
    height: BASE_DIMENSION,
    borderRadius: BASE_DIMENSION / 2,
    borderWidth: BORDER_WIDTH,
    borderColor: Colors.darker,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  selected: {
    width: INNER_DIMENSION,
    height: INNER_DIMENSION,
    borderRadius: INNER_DIMENSION / 2,
    backgroundColor: Colors.darker,
  },
  unselected: {},
});
