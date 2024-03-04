import {React} from 'react';
import {
    Alert,
    View,
    Text,
    TextInput,
    Image,
    Pressable,
    ImageBackground,
} from 'react-native';
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
            <ImageBackground
                source={require('../assets/loginBackground.png')}
                resizeMode="cover"
                style={LoginStyle.imageBackground}
            >
                <View style={LoginStyle.container}>
                    <Image
                        source={require('../assets/loginMascot.png')}
                        style={LoginStyle.imageMascot}
                    />
                    <Text style={LoginStyle.headerText}>LOGIN</Text>
                    <View style={{marginTop: 320}}>
                        <TextInput
                            style={LoginStyle.input}
                            placeholder="Username"
                            placeholderTextColor={'gray'}
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
                            placeholderTextColor={'gray'}
                            secureTextEntry
                            onChangeText={(passwordInput) =>
                                setUserData({
                                    ...userData,
                                    password: passwordInput,
                                })
                            }
                        />
                    </View>
                    <View style={LoginStyle.loginContainer}>
                        <Pressable
                            style={({pressed}) => [
                                LoginStyle.loginPressable,
                                {
                                    backgroundColor: pressed ? 'white' : 'gray',
                                },
                            ]}
                            onPress={async () => {
                                const response = await loginUser(userData);
                                if (response.success) {
                                    setUserToken(response);
                                    setLoginState(true);
                                } else {
                                    Alert.alert(
                                        'Error logging in',
                                        response.message
                                    );
                                }
                            }}
                        >
                            {({pressed}) => (
                                <Text
                                    style={{color: pressed ? 'black' : 'white'}}
                                >
                                    Login
                                </Text>
                            )}
                        </Pressable>
                    </View>

                    <View style={LoginStyle.bottomContainer}>
                        <Text style={LoginStyle.footerText}>
                            Don't have an account?
                        </Text>
                        <Pressable
                            onPress={() => navigation.navigate('Registration')}
                        >
                            {({pressed}) => (
                                <Text
                                    style={[
                                        LoginStyle.text,
                                        {
                                            color: pressed
                                                ? 'black'
                                                : 'rgba(52, 52, 52, 0.9)',
                                        },
                                    ]}
                                >
                                    Register here!
                                </Text>
                            )}
                        </Pressable>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
};

export default LoginScreen;
