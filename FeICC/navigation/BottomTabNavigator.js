import React from 'react';
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from '../screens/Profile/Profile';
import Tutorial from '../screens/Tutorial/Tutorail';
import Welcome from '../screens/Account/Welcome';
import { Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import DetailProfile from '../screens/Profile/DetailProfile';
import DishDetail from '../screens/DishDetail/DishDetail';
import Dishes from '../screens/DishDetail/Dishes';
import HomePage from '../screens/HomePage/HomePage';
import { MaterialIcons } from '@expo/vector-icons';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { BottomTabBarWrapper, MultiBarButton, MultiBarProvider } from 'react-native-multibar-crosslisting';
import { TouchIcon } from '../components/TouchIcon';
import Notification from '../screens/Notification/Notfication';



const Tab = createBottomTabNavigator();
const ProfileStack = createStackNavigator();
const DishesStack = createStackNavigator();

function BottomTabNavigator() {
    const navigation = useNavigation();
    return (
        <MultiBarProvider
            data={[
                () => (
                    <TouchIcon
                        name="chevron-left"
                        color="#E24E1B"
                        size={25}
                        onPress={() => {
                            if (navigation.canGoBack()) {
                                navigation.goBack();
                            }
                        }}
                    />
                ),
                () => (
                    <TouchIcon
                        name="table"
                        color="#E24E1B"
                        size={25}
                        onPress={() => navigation.navigate('KitchenCabinets')}
                    />
                ),
                // ... Add more if necessary
            ]}
            iconSize={40}
            // overlayRadius={100}
            initialExtrasVisible={false}
        >
            <Tab.Navigator
                initialRouteName="Home"
                screenOptions={({ route }) => ({
                    tabBarActiveTintColor: '#FF7A00',
                    tabBarLabel: () => null,
                    tabBarIcon: ({ focused }) => {
                        let iconSource;
                        let routeName = route.name;
                        if (routeName === 'Home') {
                            iconSource = require('../assets/BottomBarIcons/Home.png');
                        } else if (routeName === 'Discover') {
                            iconSource = require('../assets/BottomBarIcons/Group.png');
                        } else if (routeName === 'Notification') {
                            iconSource = require('../assets/ProfileIcon/noti.png');
                        } else if (routeName === 'Profile') {
                            iconSource = require('../assets/BottomBarIcons/Profile.png');
                        }
                        return <Image source={iconSource} style={{ tintColor: focused ? '#FF7A00' : "#A9B1BD" }} />;
                    },
                })}

                tabBar={(props) => (
                    <BottomTabBarWrapper navigation={props.navigation}>
                        <BottomTabBar {...props} />
                    </BottomTabBarWrapper>
                )}
            >
                <Tab.Screen name="Home" component={HomePage} options={{ headerShown: false }} />
                <Tab.Screen name="Discover" component={DishesStackScreens} options={{ headerShown: false }} />
                <Tab.Screen
                    name="Center"
                    component={HomePage}
                    options={{
                        tabBarLabel: '',
                        tabBarButton: () => (
                            <MultiBarButton
                                style={{
                                    backgroundColor: '#E24E1B'
                                }}
                            >
                                <MaterialIcons
                                    name="add"
                                    style={{
                                        fontSize: 32,
                                        color: '#EDF2F4'
                                    }}
                                />
                            </MultiBarButton>
                        )
                    }}
                />
                <Tab.Screen name="Notification" component={Notification} options={{ headerShown: false }} />
                <Tab.Screen name="Profile" component={ProfileStackScreens} options={{ headerShown: false }} />
            </Tab.Navigator>
        </MultiBarProvider>
    );
}

export default BottomTabNavigator;

const ProfileStackScreens = () => (
    <ProfileStack.Navigator
        initialRouteName="Profile"
        screenOptions={{
            headerTitleAlign: 'center',
        }}
    >
        <ProfileStack.Screen name="ProfileOutlook" component={Profile} options={{ title: 'Góc của tôi' }} />
    </ProfileStack.Navigator>
);

const DishesStackScreens = () => (
    <DishesStack.Navigator
        initialRouteName="Dishes"
        screenOptions={{
            headerTitleAlign: 'center',
        }}
    >
        <DishesStack.Screen name="Dishes" component={Dishes} options={{ title: 'Món ăn' }} />
        <DishesStack.Screen name="DishesDetail" component={DishDetail} options={{ headerShown: false }} />
    </DishesStack.Navigator>
);
