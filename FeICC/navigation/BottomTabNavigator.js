import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from '../screens/Profile/Profile';
import Tutorial from '../screens/Tutorial/Tutorail';
import CompleteTutorial from '../screens/Tutorial/CompleteTutorial';
import Welcome from '../screens/Account/Welcome';
import { Image } from 'react-native';

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
    return (
        <Tab.Navigator
            initialRouteName="Profile"
            screenOptions={({ route }) => ({
                tabBarActiveTintColor: '#FF7A00',
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
            <Tab.Screen name="Discover" component={CompleteTutorial} options={{ headerShown: false }} />
            <Tab.Screen name="Leaderboard" component={Welcome} options={{ headerShown: false }} />
            <Tab.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
        </Tab.Navigator>
    );
}

export default BottomTabNavigator;
