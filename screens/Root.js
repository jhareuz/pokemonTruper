import React from 'react';
import {
  NavigationContainer,
} from '@react-navigation/native';
import RootStackScreen from './RootStackScreen';

const Root = () => {

  return (
    <NavigationContainer>
      <RootStackScreen />
    </NavigationContainer>
  );
}

export default Root;
