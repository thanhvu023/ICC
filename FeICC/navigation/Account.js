import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CreateAccPage from '../components/CreateAccPage';

export default function Account() {
    const accountStack = createNativeStackNavigator();

  return (
   <accountStack.Navigator>
    <accountStack.Screen
    name='CREATEACC'
    component={CreateAccPage}
    options={{headerShown: flase}}
    />
   </accountStack.Navigator>
  )
}