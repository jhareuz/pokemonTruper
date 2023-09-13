import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import Home from './Home';
import Detail from './Detail';
import Splash from './Splash';

const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name="Splash" component={Splash}/>
        <RootStack.Screen name="Home" component={Home}/>
        <RootStack.Screen name="Detail" component={Detail}/>
    </RootStack.Navigator>
);

export default RootStackScreen;