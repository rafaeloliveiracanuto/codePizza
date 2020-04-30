import React, {Component} from 'react'
import HomeScreen from './src/components/Home'
import Order from './src/components/Order'
import 'react-native-gesture-handler'
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()

function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={HomeScreen}></Stack.Screen>
        <Stack.Screen name='Order' component={Order}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
