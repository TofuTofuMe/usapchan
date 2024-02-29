import {React} from 'react';
import {Alert, View, Text, TextInput, Pressable} from 'react-native';
import RegistrationStyle from '../styles/RegistrationStyle';
import {useAtom} from 'jotai';
import {userDataAtom} from '../stores';
import {registerUser} from '../utils';

const RegistrationScreen = ({navigation}) => {
    const [userData, setUserData] = useAtom(userDataAtom);

    return (
        <View style={RegistrationStyle.flexView}>
            <Text style={RegistrationStyle.headerText}>Registration</Text>
            <View>
                <View style={RegistrationStyle.inputLabel}>
                    <Text>Name</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <TextInput
                        style={[RegistrationStyle.inputName, {marginRight: 20}]}
                        placeholder="First Name"
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
                        onChangeText={(lastNameInput) => {
                            setUserData({
                                ...userData,
                                lastName: lastNameInput,
                            });
                        }}
                    />
                </View>
                <View style={RegistrationStyle.inputLabel}>
                    <Text>Username</Text>
                </View>
                <TextInput
                    style={RegistrationStyle.input}
                    placeholder="Username"
                    onChangeText={(usernameInput) => {
                        setUserData({
                            ...userData,
                            username: usernameInput,
                        });
                    }}
                />
                <View style={RegistrationStyle.inputLabel}>
                    <Text>Student ID</Text>
                </View>
                <TextInput
                    style={RegistrationStyle.input}
                    placeholder="Student ID"
                    onChangeText={(studentIdInput) => {
                        setUserData({
                            ...userData,
                            studentId: studentIdInput,
                        });
                    }}
                />
                <View style={RegistrationStyle.inputLabel}>
                    <Text>Email</Text>
                </View>
                <TextInput
                    style={RegistrationStyle.input}
                    placeholder="Email"
                    onChangeText={(emailInput) => {
                        setUserData({
                            ...userData,
                            email: emailInput,
                        });
                    }}
                />
                <View style={RegistrationStyle.inputLabel}>
                    <Text>Password</Text>
                </View>
                <TextInput
                    style={RegistrationStyle.input}
                    placeholder="Password"
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
                                backgroundColor: pressed ? 'white' : '#e2e2e2',
                                padding: 10,
                                borderRadius: 5,
                                elevation: 3,
                                width: 100,
                                alignItems: 'center',
                            },
                        ]}
                        onPress={async () => {
                            const response = await registerUser(userData);

                            if (response.success) {
                                Alert.alert('Success', response.message);
                                navigation.navigate('Login');
                            } else {
                                Alert.alert('Error', response.message);
                            }
                        }}
                    >
                        <Text>Sign Up</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
};

export default RegistrationScreen;
