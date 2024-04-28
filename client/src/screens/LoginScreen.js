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
    modalAtom,
} from '../stores/SettingStore';
import {PopupModal} from '../components';

const LoginScreen = ({navigation}) => {
    const setLoginState = useSetAtom(loginStateAtom);
    const [userData, setUserData] = useAtom(userDataAtom);
    const [modal, setModal] = useAtom(modalAtom);
    const setUserToken = useSetAtom(userTokenAtom);

    const goLogin = async () => {
        try {
            setModal({
                visibility: true,
                loading: true,
                message: 'Logging you in',
            });
            const response = await loginUser(userData);
            if (response.success) {
                setUserToken(response.token);
                setUserData({
                    studentId: response.user.studentId,
                    email: response.user.email,
                    username: response.user.username,
                    firstName: response.user.firstName,
                    lastName: response.user.lastName,
                });
                setLoginState(true);
            } else {
                Alert.alert('Login Failed', response.message);
            }
            setModal({
                visibility: false,
                loading: false,
            });
        } catch {
            setModal({visibility: false, loading: false});
            Alert.alert(
                'Login Failed',
                'Are you connected to the internet?\nCheck your settings and try again.'
            );
        }
    };

    return (
        <View style={LoginStyle.flexView}>
            <ImageBackground
                source={require('../assets/loginBackground.webp')}
                resizeMode="cover"
                style={LoginStyle.imageBackground}
            >
                <View style={LoginStyle.container}>
                    <Image
                        source={require('../assets/loginMascot.webp')}
                        style={LoginStyle.imageMascot}
                    />
                    <Text style={LoginStyle.headerText}>LOGIN</Text>
                    <View style={{marginTop: 320}}>
                        <TextInput
                            style={LoginStyle.input}
                            placeholder="Username"
                            placeholderTextColor={'gray'}
                            returnKeyType="next"
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
                            returnKeyType="send"
                            onSubmitEditing={goLogin}
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
                                    backgroundColor: pressed
                                        ? 'rgba(82,109,81,.8)'
                                        : 'rgba(82,109,81,.85)',
                                },
                            ]}
                            onPress={goLogin}
                        >
                            {({pressed}) => (
                                <Text
                                    style={{
                                        color: pressed ? 'black' : 'white',
                                    }}
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
                <PopupModal modal={modal} setModal={setModal} />
            </ImageBackground>
        </View>
    );
};

export default LoginScreen;
