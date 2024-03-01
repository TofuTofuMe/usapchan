import {StyleSheet} from 'react-native';
import {material} from 'react-native-typography';

const RegistrationStyle = StyleSheet.create({
    flexView: {
        flex: 1,
    },
    imageBackground: {
        flex: 1,
        justifyContent: 'center',
    },
    headerText: {
        ...material.display2Black,
        fontSize: 40,
        marginTop: 10,
        marginBottom: 80,
        color: 'white',
    },
    inputLabel: {
        marginBottom: 10,
        alignSelf: 'flex-start',
        paddingLeft: 20,
    },
    inputName: {
        backgroundColor: 'white',
        width: 135,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        color: 'black',
    },
    input: {
        backgroundColor: 'white',
        width: 290,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        color: 'black',
    },
    pressableView: {
        marginTop: 20,
        alignItems: 'center',
    },
    text: {
        color: 'black',
    },
});
export default RegistrationStyle;
