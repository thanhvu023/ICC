import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Onbroading from './screens/Onboarding/Onbroading';
import Tutorial from './screens/Tutorial/Tutorail';
import Signup from './screens/Account/Signup';
import Welcome from './screens/Account/Welcome';
import CompleteTutorial from './screens/Tutorial/CompleteTutorial';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import DetailProfile from './screens/Profile/DetailProfile';
import KitchenCabinets from './screens/KitchenCabinets/KitchenCabinets';

export default function App() {
    const Stack = createNativeStackNavigator();
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="BottomTabNavigator"
                    screenOptions={{
                        headerTitleAlign: 'center',
                    }}
                >
                    <Stack.Screen name="ACCOUNT" component={Signup} options={{ headerShown: false }} />

                    <Stack.Screen name="WELCOME" component={Welcome} options={{ headerShown: false }} />

                    <Stack.Screen name="Tutorial" component={Tutorial} options={{ headerShown: false }} />
                    <Stack.Screen
                        name="CompleteTutorial"
                        component={CompleteTutorial}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen name="KitchenCabinets" component={KitchenCabinets} options={{ title: 'Tủ Bếp' }} />

                    <Stack.Screen name="DetailProfile" component={DetailProfile} options={{ title: 'Hồ sơ cá nhân' }} />
                    <Stack.Screen
                        name="BottomTabNavigator"
                        component={BottomTabNavigator}
                        options={{ headerShown: false }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </GestureHandlerRootView>
    );
}

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
// });
