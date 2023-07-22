import { StatusBar} from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import BottomTab from '../component/BottomTab';



const Provider = () => {
  return (
    <SafeAreaProvider>
    <NavigationContainer>
      <StatusBar barStyle={'dark-content'}/>
      <BottomTab/>
    </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default Provider