import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TextInput,
  TouchableNativeFeedback,
  UIManager,
  LayoutAnimation,
  ScrollView,
} from 'react-native';
import {Typography, Colors} from '../styles';
import {useNavigation} from '@react-navigation/native';
import RadioButton from '../component/RadioButton';
import EmptySpace from '../component/EmptySpace';

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

export default function CreateMatchBadminton() {
  const [teamName, setTeamName] = useState({
    a: '',
    b: '',
  });
  const [strategy, setStrategy] = useState(null);

  const navigation = useNavigation();

  function handleRadioRally() {
    LayoutAnimation.configureNext(
      LayoutAnimation.create(
        100,
        LayoutAnimation.Types.easeOut,
        LayoutAnimation.Properties.scaleXY,
      ),
    );
    setStrategy('rally');
  }
  function handleRadioBall() {
    LayoutAnimation.configureNext(
      LayoutAnimation.create(
        100,
        LayoutAnimation.Types.easeOut,
        LayoutAnimation.Properties.scaleXY,
      ),
    );
    setStrategy('ball');
  }

  function handleChangeTeamA(text) {
    setTeamName((prevState) => {
      return {
        ...prevState,
        a: text,
      };
    });
  }
  function handleChangeTeamB(text) {
    setTeamName((prevState) => {
      return {
        ...prevState,
        b: text,
      };
    });
  }

  const btnDisabled = teamName.a <= 0 || teamName.b <= 0 || strategy === null;
  const btnStyle = btnDisabled ? {opacity: 0.5} : {opacity: 1};

  return (
    <View style={styles.main}>
      <ScrollView>
        <View style={styles.header}>
          <Pressable onPress={() => navigation.goBack()}>
            <Text>Kembali</Text>
          </Pressable>
        </View>
        <Text style={styles.title}>Bulu Tangkis</Text>
        <Text style={styles.subtitle}>Buat Pertandingan</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Jenis Permainan</Text>
          <RadioButton
            onPress={handleRadioRally}
            text={'Rally Point'}
            selected={strategy === 'rally'}
          />
          <EmptySpace />
          <RadioButton
            onPress={handleRadioBall}
            text={'Pindah Bola'}
            selected={strategy === 'ball'}
          />
          <Text style={styles.inputLabel}>Team A</Text>
          <TextInput
            onChangeText={handleChangeTeamA}
            style={styles.inputText}
            placeholder={'Team Name'}
          />
          <Text style={styles.inputLabel}>Team B</Text>
          <TextInput
            onChangeText={handleChangeTeamB}
            style={styles.inputText}
            placeholder={'Team Name'}
          />
        </View>
        <View
          style={[
            {
              borderRadius: 12,
              overflow: 'hidden',
              margin: 16,
              borderWidth: 2,
              borderColor: Colors.darker,
            },
            btnStyle,
          ]}>
          <TouchableNativeFeedback onPress={() => navigation.navigate('BadmintonMatch')}>
            <View
              style={{
                padding: 12,
                backgroundColor: Colors.white,
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 16,
                  fontFamily: 'PTSansCaption-Bold',
                }}>
                Buat
              </Text>
            </View>
          </TouchableNativeFeedback>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Colors.secondary,
  },
  header: {
    margin: 16,
  },
  inputContainer: {
    marginTop: 16,
    marginHorizontal: 16,
  },
  inputText: {
    borderRadius: 12,
    fontSize: 16,
    backgroundColor: Colors.white,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  inputLabel: {
    ...Typography.inputLabel,
    marginBottom: 8,
    marginTop: 8,
  },

  subtitle: {
    ...Typography.subtitle,
  },
  title: {
    ...Typography.title,
    paddingHorizontal: 4,
    textAlign: 'center',
  },
});
