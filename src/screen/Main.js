import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, useWindowDimensions} from 'react-native';
import Team from '../component/Team';

export default function Main() {
  const window = useWindowDimensions();
  const [windowOrientation, setWindowOrientation] = useState('potrait');

  useEffect(() => {
    if (window.width > window.height) {
      setWindowOrientation('landscape');
    } else {
      setWindowOrientation('potrait');
    }
  }, [window.height, window.width]);

  return (
    <View style={styles.main}>
      <View style={{display: 'flex', flexDirection: 'row', flex: 1}}>
        <Team backgroundColor={'skyblue'} teamName={'Team Check'} />
        <Team backgroundColor={'indianred'} teamName={'Global Indo'} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    color: 'black',
  },
});
