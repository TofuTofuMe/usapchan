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
} from './src/screens';
import Feather from 'react-native-vector-icons/Feather';

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();
const DrawerNav = createDrawerNavigator();

const Drawer = () => {
  return (
    <DrawerNav.Navigator screenOptions={{drawerStyle: {paddingTop: 75}}}>
      <DrawerNav.Screen
        name="DrawerHome"
        component={HomeScreen}
        options={{title: 'Home'}}
      />
      <DrawerNav.Screen name="Handbook" component={HandbookScreen} />
      {/* <DrawerNav.Screen name="Settings" component={SettingScreen} /> */}
    </DrawerNav.Navigator>
  );
};

const Tab = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name="TabHome"
        component={Drawer}
        options={{
          title: 'Home',
          headerShown: false,
          tabBarLabel: () => null,
          tabBarIcon: () => <Feather name="home" size={25} color="black" />,
        }}
      />
      <BottomTab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: () => (
            <Feather name="message-square" size={25} color="black" />
          ),
        }}
      />
      <BottomTab.Screen
        name="Forum"
        component={ForumScreen}
        options={{
          title: 'Forum',
          tabBarLabel: () => null,
          tabBarIcon: () => <Feather name="edit" size={25} color="black" />,
        }}
      />
    </BottomTab.Navigator>
  );
};

const App = () => {
  useEffect(() => {});

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Tab" component={Tab} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Settings" component={SettingScreen} />
        <Stack.Screen name="Paraphrase" component={ChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
