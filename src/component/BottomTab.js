import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home';
import ChartScreen from '../screens/Chart';
import GameScreen from '../screens/Game';
import MarksScreen from '../screens/Marks';
import ProfileScreen from '../screens/Profile';

const Tab = createBottomTabNavigator()

const BottomTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Group
      screenOptions={{
        headerShown:false,
      }}
      >
       <Tab.Screen 
       options={{tabBarLabel:'Home'}}
       name="HomeScreen" 
       component={HomeScreen}/>

       <Tab.Screen
       options={{tabBarLabel:'Chart'}}
       name="ChartScreen" 
       component={ChartScreen}/>

       <Tab.Screen
       options={{tabBarLabel:'Game'}}
       name="GameScreen" 
       component={GameScreen}/>

       <Tab.Screen
       options={{tabBarLabel:'Marks'}}
       name="MarksScreen" 
       component={MarksScreen}/>

       <Tab.Screen
       options={{tabBarLabel:'Profile'}}
       name="ProfileScreen" 
       component={ProfileScreen}/> 
       
      </Tab.Group>
    </Tab.Navigator>
  )
}

export default BottomTab