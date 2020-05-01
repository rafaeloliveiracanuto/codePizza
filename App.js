import React, {Component} from 'react'
import HomeScreen from './src/components/Home'
import CheckoutScreen from './src/components/Checkout'
import OrderScreen from './src/components/Order'
import 'react-native-gesture-handler'
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import RadioButtonGroup from './src/components/RadioButtonGroup'

const Stack = createStackNavigator()

function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={HomeScreen}></Stack.Screen>
        <Stack.Screen name='Order' component={OrderScreen}></Stack.Screen>
        <Stack.Screen name='RadioButtonGroup' component={RadioButtonGroup}></Stack.Screen>
        <Stack.Screen name='Checkout' component={CheckoutScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
