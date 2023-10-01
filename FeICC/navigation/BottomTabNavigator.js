import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from '../screens/Profile/Profile';
import Tutorial from '../screens/Tutorial/Tutorail';
import CompleteTutorial from '../screens/Tutorial/CompleteTutorial';
import Welcome from '../screens/Account/Welcome';
import { Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import DetailProfile from '../screens/Profile/DetailProfile';

const Tab = createBottomTabNavigator();

const ProfileStack = createStackNavigator();

function BottomTabNavigator() {
    return (
        <Tab.Navigator
            initialRouteName="Profile"
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
            <Tab.Screen name="Discover" component={CompleteTutorial} options={{ headerShown: false }} />
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
        {/* <ProfileStack.Screen name="DetailProfile" component={DetailProfile} options={{ title: 'Hồ sơ cá nhân' }} /> */}
    </ProfileStack.Navigator>
);
