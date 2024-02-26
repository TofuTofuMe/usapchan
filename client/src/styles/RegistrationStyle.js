import {StyleSheet} from 'react-native';
import {material} from 'react-native-typography';

const RegistrationStyle = StyleSheet.create({
    flexView: {
        flex: 1,
        backgroundColor: '#afd69b',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        ...material.display2Black,
        fontSize: 50,
        marginTop: -50,
        marginBottom: 100,
    },
    inputLabel: {
        marginBottom: 10,
        alignSelf: 'flex-start',
    },
    inputName: {
        backgroundColor: 'white',
        width: 165,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },
    input: {
        backgroundColor: 'white',
        width: 350,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },
    pressableView: {
        marginTop: 20,
        alignItems: 'center',
    },
    text: {
        ...material.display2Black,
    },
});
export default RegistrationStyle;
