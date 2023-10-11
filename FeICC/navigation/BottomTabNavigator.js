import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from '../screens/Profile/Profile';
import Tutorial from '../screens/Tutorial/Tutorail';
import Welcome from '../screens/Account/Welcome';
import { Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import DetailProfile from '../screens/Profile/DetailProfile';
import DishDetail from '../screens/DishDetail/DishDetail';
import Dishes from '../screens/DishDetail/Dishes';

const Tab = createBottomTabNavigator();

const ProfileStack = createStackNavigator();
const DishesStack = createStackNavigator();

function BottomTabNavigator() {
    return (
        <Tab.Navigator
            initialRouteName="Discover"
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
                    } else if (routeName === 'Leaderboard') {
                        iconSource = require('../assets/BottomBarIcons/Wheat.png');
                    } else if (routeName === 'Profile') {
                        iconSource = require('../assets/BottomBarIcons/Profile.png');
                    }
                    return <Image source={iconSource} style={{ tintColor: focused ? '#FF7A00' : undefined }} />;
                },
            })}
        >
            <Tab.Screen name="Home" component={Tutorial} options={{ headerShown: false }} />
            <Tab.Screen name="Discover" component={DishesStackScreens} options={{ headerShown: false }} />
            <Tab.Screen name="Leaderboard" component={Welcome} options={{ headerShown: false }} />
            <Tab.Screen name="Profile" component={ProfileStackScreens} options={{ headerShown: false }} />
        </Tab.Navigator>
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
