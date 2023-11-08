import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Tutorial from './screens/Tutorial/Tutorail';
import SignUpNew from './screens/Account/SignUpNew';
import CompleteTutorial from './screens/Tutorial/CompleteTutorial';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import DetailProfile from './screens/Profile/DetailProfile';
import Notification from './screens/Notification/Notfication';
import KitchenCabinets from './screens/KitchenCabinets/KitchenCabinets';
import Signin from './screens/Account/Signin';
import Welcome from './screens/Account/Welcome';
import ConfirmOTP from './screens/Account/ConfirmOTP';
import NewPassword from './screens/Account/NewPassword';
import ForgotPassword from './screens/Account/ForgotPassword';
import Onboarding2 from './screens/Onboarding/custome/Onboarding2';
import Premium from './screens/Premium/Premium';
import QR from './screens/Premium/QR';
import HomePage from './screens/HomePage/HomePage';
import FavoriteFood from './screens/FavoriteFood/FavoriteFood';
import MyMeal from './screens/MyMeal/MyMeal';
export default function App() {
    const Stack = createNativeStackNavigator();
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="ONBROADING"
                    screenOptions={{
                        headerTitleAlign: 'center',
                    }}
                >
                    <Stack.Screen name="ONBROADING" component={Onboarding2} options={{ headerShown: false }} />
                    <Stack.Screen name="ACCOUNT" component={Signin} options={{ headerShown: false }} />

                    <Stack.Screen name="WELCOME" component={Welcome} options={{ headerShown: false }} />
                    <Stack.Screen name="PREMIUM" component={Premium} options={{ headerShown: false }} />
                    <Stack.Screen name="QRSCAN" component={QR} options={{ headerShown: false }} />
                    <Stack.Screen name="FORGOTPASSWORD" component={ForgotPassword} options={{ headerShown: false }} />
                    <Stack.Screen name="NEWPASSWORD" component={NewPassword} options={{ headerShown: false }} />
                    <Stack.Screen name="CONFIRMOTP" component={ConfirmOTP} options={{ headerShown: false }} />
                    <Stack.Screen name="SIGNUP" component={SignUpNew} options={{ headerShown: false }} />
                    <Stack.Screen name="HOMEPAGE" component={HomePage} options={{ headerShown: false }} />
                    <Stack.Screen name="NOTIFICATION" component={Notification} options={{ title: 'Thông báo' }} />
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
                    <Stack.Screen
                        name="FavoriteFood"
                        component={FavoriteFood}
                        options={{ title: 'Món ăn yêu thích' }}
                    />
                    <Stack.Screen name="MyMeal" component={MyMeal} options={{ title: 'Bữa ăn của tôi' }} />
                </Stack.Navigator>
            </NavigationContainer>
        </GestureHandlerRootView>
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
