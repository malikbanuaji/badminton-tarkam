import React, {useMemo, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  Pressable,
  TouchableNativeFeedback,
} from 'react-native';
import {Colors, Typography} from '../styles';

export default function SportItem({title, onPress}) {
  const dimension = useWindowDimensions();

  const boxStyle = useMemo(() => {
    return {height: dimension.width / 6};
  }, [dimension.width]);

  return (
    <View style={styles.btnRadius}>
      <TouchableNativeFeedback onPress={onPress}>
        <View style={[styles.main, boxStyle]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  btnRadius: {
    borderRadius: 12,
    overflow: 'hidden',
  },
  main: {
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
  },
  title: {
    ...Typography.title,
    padding: 8,
  },
});
