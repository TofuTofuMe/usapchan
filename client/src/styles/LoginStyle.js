import {StyleSheet} from 'react-native';
import {material} from 'react-native-typography';

const LoginStyle = StyleSheet.create({
    flexView: {
        flex: 1,
    },
    imageBackground: {
        flex: 1,
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        alignSelf: 'center',
        alignItems: 'center',
        width: '100%',
        height: 200,
        paddingTop: 20,
    },
    headerText: {
        ...material.display2Black,
        fontSize: 50,
        color: 'white',
    },
    loginContainer: {
        marginTop: 20,
    },
    loginPressable: {
        padding: 10,
        borderRadius: 5,
        elevation: 3,
        width: 100,
        alignItems: 'center',
    },
    bottomContainer: {
        alignItems: 'center',
        marginTop: -15,
    },
    input: {
        backgroundColor: 'white',
        width: 300,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        color: 'black',
    },
    placeholder: {
        fontSize: 16,
        color: '#9e9e9e',
        position: 'absolute',
        right: 10,
        paddingTop: 15,
    },
    loginButton: {
        backgroundColor: '#e2e2e2',
        padding: 10,
        paddingHorizontal: 30,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 10,
    },
    imageMascot: {
        flex: 1,
        position: 'absolute',
        height: 300,
        resizeMode: 'contain',
        marginTop: 150,
    },
    footerText: {
        marginTop: 50,
        fontSize: 18,
        color: 'black',
    },
    text: {
        fontSize: 18,
        fontWeight: '600',
    },
});

export default LoginStyle;
