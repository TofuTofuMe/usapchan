import {StyleSheet} from 'react-native';
import {material, materialColors, robotoWeights} from 'react-native-typography';

const Style = StyleSheet.create({
    flexView: {
        flex: 1,
    },
    centerView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bodyView: {
        flex: 1,
        padding: 15,
        marginLeft: 15,
        marginRight: 15,
    },
    bottomView: {
        flexDirection: 'row',
        marginTop: 'auto',
    },
    welcomeText: {
        ...robotoWeights.condensed,
        fontSize: 22,
        color: 'black',
    },
    modalView: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalCard: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 25,
        padding: 35,
        paddingLeft: 50,
        paddingRight: 50,
        margin: 35,
        shadowColor: '#000',
        shadowOffset: {
            width: 0.2,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    text: {
        ...material.body1,
        padding: 10,
    },
    description: {
        ...material.body1,
        marginTop: 15,
        marginLeft: 5,
        marginRight: 5,
        marginBottom: 15,
        borderBottomWidth: 0.75,
    },
    labelText: {
        ...material.body2,
        padding: 5,
    },
    button: {
        ...material.button,
        alignSelf: 'center',
    },
    pressable: {
        padding: 10,
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor: materialColors.whiteTertiary,
        borderBottomWidth: 0.75,
        borderRadius: 5,
    },
    pressablePressed: {
        backgroundColor: materialColors.blackTertiary,
    },
    pressableText: {
        ...material.button,
        color: 'white',
    },
    title: {
        ...material.title,
        color: materialColors.blackPrimary,
    },
    postView: {
        flex: 1,
        backgroundColor: materialColors.whitePrimary,
        shadowColor: 'black',
        shadowOpacity: 1,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 1,
        },
        marginTop: 15,
        padding: 10,
    },
});

export default Style;
