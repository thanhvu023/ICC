import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Onbroading from './screens/Onboarding/Onbroading';
import Signup from './screens/Account/Signup';
import Welcome from './screens/Account/Welcome';
import Premium from './screens/Premium/Premium';
import QR from './screens/Premium/QR';


export default function App() {
  const Stack = createNativeStackNavigator();
  return (
<NavigationContainer>
  <Stack.Navigator initialRouteName="ONBROADING">
    <Stack.Screen
    name='ONBROADING'
    component={Onbroading}
    options={{headerShown: false}}
    />
           <Stack.Screen
    name='ACCOUNT'
    component={Signup}
    options={{headerShown: false}}
    />

<Stack.Screen
    name='WELCOME'
    component={Welcome}
    options={{headerShown: false}}
    />
    <Stack.Screen
    name='PREMIUM'
    component={Premium}
    options={{headerShown: false}}
    />
    <Stack.Screen
    name='QRSCAN'
    component={QR}
    options={{headerShown: false}}
    />
  </Stack.Navigator>

</NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
