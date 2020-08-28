import React from 'react';
import {View, Text, useWindowDimensions} from 'react-native';
import {Typography, Colors} from '../styles';

export default function BadmintonMatch() {
  const dimension = useWindowDimensions();
  return (
    <View style={{flex: 1, backgroundColor: Colors.secondary}}>
      <Text style={Typography.title}>Set 1</Text>
      <View style={{flexDirection: 'row', marginTop: 16}}>
        <View
          style={{
            width: dimension.width / 2,
            height: dimension.width / 1.5,
            backgroundColor: '#ddd',
          }}>
          <Text>Test</Text>
        </View>
        <View
          style={{
            width: dimension.width / 2,
            height: dimension.width / 1.5,
            backgroundColor: '#aaa',
          }}>
          <Text>Test</Text>
        </View>
      </View>
    </View>
  );
}
