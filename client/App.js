/* eslint-disable react/no-unstable-nested-components */
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import {
    HomeScreen,
    SettingScreen,
    ChatScreen,
    ForumScreen,
    HandbookScreen,
    LoginScreen,
    RegistrationScreen,
    DownloadablesScreen,
} from './src/screens';
import Feather from 'react-native-vector-icons/Feather';
import {useAtomValue, useSetAtom} from 'jotai';
import {loginStateAtom, userDataAtom} from './src/stores';
import {DrawerNavigator} from './src/components';

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();
const DrawerNav = createDrawerNavigator();

const Drawer = () => {
    const setLoginState = useSetAtom(loginStateAtom);
    const setUserData = useSetAtom(userDataAtom);
    return (
        <DrawerNav.Navigator
            drawerContent={(props) => <DrawerNavigator {...props} />}
        >
            <DrawerNav.Screen
                name="DrawerHome"
                component={HomeScreen}
                options={{
                    title: 'Home',
                    headerStyle: {
                        backgroundColor: '#526d51',
                    },
                    headerTintColor: 'white',
                }}
            />
            <DrawerNav.Screen
                name="Handbook"
                component={HandbookScreen}
                options={{
                    headerStyle: {
                        backgroundColor: '#526d51',
                    },
                    headerTintColor: 'white',
                }}
            />
            <DrawerNav.Screen
                name="Downloadables"
                component={DownloadablesScreen}
                options={{
                    headerStyle: {
                        backgroundColor: '#526d51',
                    },
                    headerTintColor: 'white',
                }}
            />
            <DrawerNav.Screen
                name="Logout"
                component={LoginScreen}
                listeners={{
                    drawerItemPress: () => {
                        setUserData({});
                        setLoginState(false);
                    },
                }}
            />
            {/* <DrawerNav.Screen name="Settings" component={SettingScreen} /> */}
        </DrawerNav.Navigator>
    );
};

const Tab = () => {
    return (
        <BottomTab.Navigator
            screenOptions={{
                tabBarActiveBackgroundColor: 'rgba(55,100,75,1)',
                tabBarInactiveBackgroundColor: '#526d51',
                tabBarStyle: {
                    backgroundColor: 'white',
                },
            }}
        >
            <BottomTab.Screen
                name="TabHome"
                component={Drawer}
                options={{
                    title: 'Home',
                    headerShown: false,
                    tabBarLabel: () => null,
                    tabBarIcon: () => (
                        <Feather name="home" size={25} color={'white'} />
                    ),
                }}
            />
            <BottomTab.Screen
                name="Chat"
                component={ChatScreen}
                options={{
                    tabBarLabel: () => null,
                    tabBarIcon: () => (
                        <Feather
                            name="message-square"
                            size={25}
                            color={'white'}
                        />
                    ),
                    headerStyle: {
                        backgroundColor: '#526d51',
                    },
                    headerTintColor: 'white',
                }}
            />
            <BottomTab.Screen
                name="Forum"
                component={ForumScreen}
                options={{
                    title: 'Forum',
                    tabBarLabel: () => null,
                    tabBarIcon: () => (
                        <Feather name="edit" size={25} color={'white'} />
                    ),
                    headerStyle: {
                        backgroundColor: '#526d51',
                    },
                    headerTintColor: 'white',
                }}
            />
        </BottomTab.Navigator>
    );
};

const App = () => {
    const loginState = useAtomValue(loginStateAtom);

    useEffect(() => {});

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                {loginState ? (
                    <>
                        <Stack.Screen name="Tab" component={Tab} />
                        <Stack.Screen name="Home" component={HomeScreen} />
                        <Stack.Screen
                            name="Settings"
                            component={SettingScreen}
                        />
                        <Stack.Screen
                            name="Paraphrase"
                            component={ChatScreen}
                        />
                    </>
                ) : (
                    <>
                        <Stack.Screen name="Login" component={LoginScreen} />
                        <Stack.Screen
                            name="Registration"
                            component={RegistrationScreen}
                        />
                    </>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
