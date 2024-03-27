import React from 'react';
import {View, Text} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {Avatar, Title, Drawer, Section} from 'react-native-paper';
import DrawerStyle from '../styles/DrawerStyle';
import {loginStateAtom, userDataAtom, userTokenAtom} from '../stores';
import {useSetAtom} from 'jotai';

const DrawerNavigator = (props) => {
    const setUserToken = useSetAtom(userTokenAtom);
    const setLoginState = useSetAtom(loginStateAtom);
    const setUserData = useSetAtom(userDataAtom);

    const goLogout = () => {
        setUserToken('');
        setUserData({});
        setLoginState(false);
    };

    return (
        <View style={DrawerStyle.flexView}>
            <DrawerContentScrollView {...props}>
                <View style={DrawerStyle.drawerContent}>
                    <View style={DrawerStyle.container}>
                        <View style={DrawerStyle.userInfo}>
                            <Avatar.Image
                                source={require('../assets/hat.png')}
                            />
                        </View>
                        <View style={DrawerStyle.userInfo}>
                            <Title style={DrawerStyle.title}>Username</Title>
                        </View>
                    </View>
                    <Drawer.Section style={DrawerStyle.drawerSection}>
                        <DrawerItem
                            label="Home"
                            onPress={() => {
                                props.navigation.navigate('DrawerHome');
                            }}
                        />
                        <DrawerItem
                            label="Handbook"
                            onPress={() => {
                                props.navigation.navigate('Handbook');
                            }}
                        />
                        <DrawerItem
                            label="Downloadables"
                            onPress={() => {
                                props.navigation.navigate('Downloadables');
                            }}
                        />
                        <DrawerItem label="Logout" onPress={goLogout} />
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
        </View>
    );
};

export default DrawerNavigator;
