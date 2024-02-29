import {React} from 'react';
import {Alert, View, Text, TextInput, Image, Pressable} from 'react-native';
import {useAtom, useSetAtom} from 'jotai';
import {loginUser} from '../utils';
import LoginStyle from '../styles/LoginStyle';
import {
    loginStateAtom,
    userDataAtom,
    userTokenAtom,
} from '../stores/SettingStore';

const LoginScreen = ({navigation}) => {
    const setLoginState = useSetAtom(loginStateAtom);
    const [userData, setUserData] = useAtom(userDataAtom);
    const setUserToken = useSetAtom(userTokenAtom);

    return (
        <View style={LoginStyle.flexView}>
            <View style={LoginStyle.container}>
                <Image
                    source={require('../assets/loginMascot.png')}
                    style={LoginStyle.imageMascot}
                />
                <Text style={LoginStyle.headerText}>Login</Text>
                <View style={{marginTop: 320}}>
                    <TextInput
                        style={LoginStyle.input}
                        placeholder="Username"
                        onChangeText={(usernameInput) =>
                            setUserData({
                                ...userData,
                                username: usernameInput,
                            })
                        }
                    />
                    <TextInput
                        style={LoginStyle.input}
                        placeholder="Password"
                        onChangeText={(passwordInput) =>
                            setUserData({
                                ...userData,
                                password: passwordInput,
                            })
                        }
                    />
                </View>
                <Pressable
                    style={LoginStyle.loginButton}
                    onPress={async () => {
                        const response = await loginUser(userData);
                        if (response.success) {
                            setUserToken(response);
                            setLoginState(true);
                        } else {
                            Alert.alert('Error logging in', response.message);
                        }
                    }}
                >
                    <Text>Login</Text>
                </Pressable>
                <Text style={LoginStyle.footerText}>
                    Don't have an account?
                </Text>
                <Pressable onPress={() => navigation.navigate('Registration')}>
                    {({pressed}) => (
                        <Text
                            style={[
                                LoginStyle.text,
                                {color: pressed ? 'gray' : 'black'},
                            ]}
                        >
                            Register here!
                        </Text>
                    )}
                </Pressable>
            </View>
        </View>
    );
};

export default LoginScreen;
