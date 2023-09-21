import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Onbroading from './components/Onbroading';
import Account from './navigation/Account';
import CreateAccPage from './components/CreateAccPage';


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
    name='CREATEACC'
    component={CreateAccPage}
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
