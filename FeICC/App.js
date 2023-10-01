import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Onbroading from "./screens/Onboarding/Onbroading";
import Signin from "./screens/Account/Signin";
import SignUpNew from "./screens/Account/SignUpNew";
import Welcome from "./screens/Account/Welcome";
import ConfirmOTP from "./screens/Account/ConfirmOTP";
import ForgotPassword from "./screens/Account/ForgotPassword";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ONBROADING">
        <Stack.Screen
          name="ONBROADING"
          component={Onbroading}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ACCOUNT"
          component={Signin}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SIGNUP"
          component={SignUpNew}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="WELCOME"
          component={Welcome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FORGOTPASSWORD"
          component={ForgotPassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CONFIRMOTP"
          component={ConfirmOTP}
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
