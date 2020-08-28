import React, {useMemo} from 'react';
import {View, Text, StyleSheet} from 'react-native';

/**
 *
 * @param {Object} props
 * @param {number} props.score
 * @param {string} props.backgroundColor
 * @param {string} props.teamName
 */
export default function Team({
  score = 0,
  backgroundColor = 'skyblue',
  teamName = '',
}) {
  const memoScore = useMemo(() => {
    return score;
  }, [score]);
  const memoBackgroundColor = useMemo(() => {
    return backgroundColor;
  }, [backgroundColor]);

  return (
    <View style={[styles.main, {backgroundColor: memoBackgroundColor}]}>
      <View style={styles.scoreContainer}>
        <Text style={styles.scoreText}>{memoScore}</Text>
      </View>
      <View style={styles.teamContainer}>
        <View style={{flexDirection: 'column', padding: 16}}>
          <Text style={styles.teamText}>{teamName}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  scoreContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scoreText: {
    fontSize: 24 * 2,
    color: 'black',
  },
  teamContainer: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    margin: 16,
    borderRadius: 12,
  },
  teamText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
