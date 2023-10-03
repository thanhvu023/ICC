import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Premium from './screens/Premium/Premium';
import QR from './screens/Premium/QR';
import Onbroading from "./screens/Onboarding/Onbroading";
import Signin from "./screens/Account/Signin";
import SignUpNew from "./screens/Account/SignUpNew";
import Welcome from "./screens/Account/Welcome";
import ConfirmOTP from "./screens/Account/ConfirmOTP";
import NewPassword from "./screens/Account/NewPassword";
import ForgotPassword from "./screens/Account/ForgotPassword";
import Onboarding2 from './screens/Onboarding/custome/Onboarding2';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
<NavigationContainer>
  <Stack.Navigator initialRouteName="ONBROADING">
    <Stack.Screen
    name='ONBROADING'
    component={Onboarding2}
    options={{headerShown: false}}
    />
           <Stack.Screen
    name='ACCOUNT'
    component={Signin}
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
      <Stack.Screen
          name="FORGOTPASSWORD"
          component={ForgotPassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NEWPASSWORD"
          component={NewPassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CONFIRMOTP"
          component={ConfirmOTP}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name="SIGNUP"
          component={SignUpNew}
          options={{ headerShown: false }}
        />
  </Stack.Navigator>

</NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
