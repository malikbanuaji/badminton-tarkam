/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StatusBar, View} from 'react-native';
import Landing from './src/screen/Landing';
import {Colors} from './src/styles';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import CreateMatchBadminton from './src/screen/CreateMatchBadminton';
import BadmintonMatch from './src/screen/BadmintonMatch';
const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={Colors.secondary} barStyle={'dark-content'} />
      <Stack.Navigator
        screenOptions={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
        headerMode={'none'}>
        <Stack.Screen name={'Landing'} component={Landing} />
        <Stack.Screen
          name={'CreateMatchBadminton'}
          component={CreateMatchBadminton}
        />
        <Stack.Screen name={'BadmintonMatch'} component={BadmintonMatch} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
