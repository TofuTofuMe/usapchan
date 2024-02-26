import {React} from 'react';
import {View, Text, TextInput, Pressable} from 'react-native';
import RegistrationStyle from '../styles/RegistrationStyle';
import {
    firstNameAtom,
    lastNameAtom,
    usernameAtom,
    studentIdAtom,
    emailAtom,
    passwordAtom,
} from '../stores';
import {useAtom} from 'jotai';

const RegistrationScreen = () => {
    const [firstName, setFirstName] = useAtom(firstNameAtom);
    const [lastName, setLastName] = useAtom(lastNameAtom);
    const [username, setUsername] = useAtom(usernameAtom);
    const [studentId, setStudentId] = useAtom(studentIdAtom);
    const [email, setEmail] = useAtom(emailAtom);
    const [password, setPassword] = useAtom(passwordAtom);

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
                        value={firstName}
                        onChangeText={setFirstName}
                    />
                    <TextInput
                        style={RegistrationStyle.inputName}
                        placeholder="Last Name"
                        value={lastName}
                        onChangeText={setLastName}
                    />
                </View>
                <View style={RegistrationStyle.inputLabel}>
                    <Text>Username</Text>
                </View>
                <TextInput
                    style={RegistrationStyle.input}
                    placeholder="Username"
                    value={username}
                    onChangeText={setUsername}
                />
                <View style={RegistrationStyle.inputLabel}>
                    <Text>Student ID</Text>
                </View>
                <TextInput
                    style={RegistrationStyle.input}
                    placeholder="Student ID"
                    value={studentId}
                    onChangeText={setStudentId}
                />
                <View style={RegistrationStyle.inputLabel}>
                    <Text>Email</Text>
                </View>
                <TextInput
                    style={RegistrationStyle.input}
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                />
                <View style={RegistrationStyle.inputLabel}>
                    <Text>Password</Text>
                </View>
                <TextInput
                    style={RegistrationStyle.input}
                    placeholder="New password"
                    value={password}
                    onChangeText={setPassword}
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
                    >
                        {({pressed}) => (
                            <Text
                                style={[
                                    RegistrationStyle.text,
                                    {color: pressed ? 'gray' : 'black'},
                                ]}
                            >
                                Sign up
                            </Text>
                        )}
                    </Pressable>
                </View>
            </View>
        </View>
    );
};

export default RegistrationScreen;
