import {React} from 'react';
import {
    Alert,
    View,
    Text,
    TextInput,
    Pressable,
    ImageBackground,
} from 'react-native';
import RegistrationStyle from '../styles/RegistrationStyle';
import {useAtom} from 'jotai';
import {userDataAtom} from '../stores';
import {registerUser} from '../utils';

const RegistrationScreen = ({navigation}) => {
    const [userData, setUserData] = useAtom(userDataAtom);

    return (
        <View style={RegistrationStyle.flexView}>
            <ImageBackground
                source={require('../assets/loginBackground.png')}
                resizeMode="cover"
                style={RegistrationStyle.imageBackground}
            >
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={RegistrationStyle.headerText}>
                        REGISTRATION
                    </Text>
                    <View
                        style={{alignItems: 'center', justifyContent: 'center'}}
                    >
                        <View style={RegistrationStyle.inputLabel}>
                            <Text style={RegistrationStyle.text}>Name</Text>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <TextInput
                                style={[
                                    RegistrationStyle.inputName,
                                    {marginRight: 20},
                                ]}
                                placeholder="First Name"
                                placeholderTextColor={'gray'}
                                onChangeText={(firstNameInput) => {
                                    setUserData({
                                        ...userData,
                                        firstName: firstNameInput,
                                    });
                                }}
                            />
                            <TextInput
                                style={RegistrationStyle.inputName}
                                placeholder="Last Name"
                                placeholderTextColor={'gray'}
                                onChangeText={(lastNameInput) => {
                                    setUserData({
                                        ...userData,
                                        lastName: lastNameInput,
                                    });
                                }}
                            />
                        </View>
                        <View style={RegistrationStyle.inputLabel}>
                            <Text style={RegistrationStyle.text}>Username</Text>
                        </View>
                        <TextInput
                            style={RegistrationStyle.input}
                            placeholder="Username"
                            placeholderTextColor={'gray'}
                            onChangeText={(usernameInput) => {
                                setUserData({
                                    ...userData,
                                    username: usernameInput,
                                });
                            }}
                        />
                        <View style={RegistrationStyle.inputLabel}>
                            <Text style={RegistrationStyle.text}>
                                Student ID
                            </Text>
                        </View>
                        <TextInput
                            style={RegistrationStyle.input}
                            placeholder="Student ID"
                            placeholderTextColor={'gray'}
                            onChangeText={(studentIdInput) => {
                                setUserData({
                                    ...userData,
                                    studentId: studentIdInput,
                                });
                            }}
                        />
                        <View style={RegistrationStyle.inputLabel}>
                            <Text style={RegistrationStyle.text}>Email</Text>
                        </View>
                        <TextInput
                            style={RegistrationStyle.input}
                            placeholder="Email"
                            placeholderTextColor={'gray'}
                            onChangeText={(emailInput) => {
                                setUserData({
                                    ...userData,
                                    email: emailInput,
                                });
                            }}
                        />
                        <View style={RegistrationStyle.inputLabel}>
                            <Text style={RegistrationStyle.text}>Password</Text>
                        </View>
                        <TextInput
                            style={RegistrationStyle.input}
                            placeholder="Password"
                            placeholderTextColor={'gray'}
                            onChangeText={(passwordInput) => {
                                setUserData({
                                    ...userData,
                                    password: passwordInput,
                                });
                            }}
                            secureTextEntry
                        />
                        <View style={RegistrationStyle.pressableView}>
                            <Pressable
                                style={({pressed}) => [
                                    {
                                        backgroundColor: pressed
                                            ? 'white'
                                            : 'gray',
                                        padding: 10,
                                        borderRadius: 5,
                                        elevation: 3,
                                        width: 100,
                                        alignItems: 'center',
                                    },
                                ]}
                                onPress={async () => {
                                    const response = await registerUser(
                                        userData
                                    );

                                    if (response.success) {
                                        Alert.alert(
                                            'Success',
                                            response.message
                                        );
                                        navigation.navigate('Login');
                                    } else {
                                        Alert.alert('Error', response.message);
                                    }
                                }}
                            >
                                {({pressed}) => (
                                    <Text
                                        style={{
                                            color: pressed ? 'black' : 'white',
                                        }}
                                    >
                                        Sign Up
                                    </Text>
                                )}
                            </Pressable>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
};

export default RegistrationScreen;
