import {React} from 'react';
import {
    View,
    Text,
    TextInput,
    Image,
    TouchableOpacity,
    Pressable,
} from 'react-native';
import {usernameAtom, passwordAtom, loggedInAtom} from '../stores';
import {useAtom} from 'jotai';
import LoginStyle from '../styles/LoginStyle';

const LoginScreen = ({navigation}) => {
    const [username, setUsername] = useAtom(usernameAtom);
    const [password, setPassword] = useAtom(passwordAtom);
    const [loggedIn, setLoggedIn] = useAtom(loggedInAtom);

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
                        value={username}
                        onChangeText={setUsername}
                    />
                    <TextInput
                        style={LoginStyle.input}
                        placeholder="Password"
                        value={password}
                        onChangeText={setPassword}
                    />
                </View>
                <TouchableOpacity style={LoginStyle.loginButton}>
                    <Text>Login</Text>
                </TouchableOpacity>
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
