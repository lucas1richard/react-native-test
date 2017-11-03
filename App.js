import React, { Component } from 'react';
import {
  Platform,
  View,
  Alert
} from 'react-native';
import styled from 'styled-components/native';
import { StackNavigator } from 'react-navigation';

import { ThemeProvider } from 'styled-components';

import iftheme from 'theme/iftheme';

import Text from 'components/Text';
import FlexWrapper from 'components/FlexWrapper';
import Input from 'components/Input';
import Button from 'components/Button';

import HomeScreen from 'containers/Home';
import TestScreen from 'containers/Test';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const AppWrapper = styled.View`
  width: 100%;
  height: 100%;
  padding-left: 3;
  padding-right: 3;
  padding-top: 3;
  padding-bottom: 3;
`;

const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  Test: { screen: TestScreen }
});


export default class App extends Component<{}> {
  render() {
    return (
      <AppWrapper>
        <ThemeProvider theme={iftheme}>
        <FlexWrapper>
          <SimpleApp />
        </FlexWrapper>
        </ThemeProvider>
      </AppWrapper>
    );
  }
}

          {/* <View>
            <Text>
              Welcome to React Native!!
            </Text>
          </View>
          <View>
            <Text centered>
              To get started, edit App.js
            </Text>
            <Button onPress={() => Alert.alert('Button pressed')} title="Press" color="darkBlue" />
          </View>
          <View>
            <Text>
              {instructions}
            </Text>
          </View> */}