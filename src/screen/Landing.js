import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Typography, Colors} from '../styles';
import SportItem from '../component/SportItem';
import EmptySpace from '../component/EmptySpace';
import {useNavigation} from '@react-navigation/native';

export default function Landing() {
  const navigation = useNavigation();

  return (
    <View style={styles.main}>
      <View style={styles.full}>
        <Text style={styles.appTitle}>TARKAM</Text>
        <View style={styles.sportItemContainer}>
          <SportItem
            title={'Bulu Tangkis'}
            onPress={() => navigation.navigate('CreateMatchBadminton')}
          />
          <EmptySpace />
          <SportItem title={'Bola Voli'} />
        </View>
      </View>
      <View style={styles.versionContainer}>
        <Text style={styles.versionText}>Version 0.0.1 100</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  full: {
    flex: 1,
    justifyContent: 'center',
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.secondary,
  },
  appTitle: {
    ...Typography.APP_TITLE,
    paddingHorizontal: 4,
    textAlign: 'center',
  },
  sportItemContainer: {
    display: 'flex',
    flex: 0,
    marginHorizontal: 16,
    marginTop: 16,
  },
  versionContainer: {
    margin: 16,
  },
  versionText: {
    ...Typography.version,
  },
});
