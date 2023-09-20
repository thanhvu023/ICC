import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Signup from './components/Signup';


export default function App() {
  const Stack = createNativeStackNavigator();
  return (
<NavigationContainer>
  <Stack.Navigator initialRouteName="SIGNUP">
    <Stack.Screen
    name='SIGNUP'
    component={Signup}
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
