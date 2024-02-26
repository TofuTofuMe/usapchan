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
    textInput: {
        backgroundColor: materialColors.whiteSecondary,
        borderBottomWidth: 0.75,
        color: materialColors.blackPrimary,
        marginTop: 5,
        margin: 10,
        padding: 10,
    },
    title: {
        ...material.title,
        color: materialColors.blackPrimary,
    },
    navText: {
        fontFamily: material.button,
    },
    chatBubble: {
        padding: 5,
        margin: 10,
        marginTop: 5,
        marginBottom: 5,
        borderRadius: 15,
        backgroundColor: materialColors.whiteSecondary,
        alignSelf: 'flex-start',
    },
    userBubble: {
        backgroundColor: 'skyblue',
        alignSelf: 'flex-end',
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
    postUsername: {
        ...material.subheading,
        fontWeight: 'bold',
    },
    postText: {
        padding: 15,
        paddingLeft: 10,
        paddingBottom: 5,
        color: materialColors.blackPrimary,
    },
    featherText: {
        ...material.body2,
        padding: 3,
    },
    lightTheme: {
        backgroundColor: 'white',
    },
    darkTheme: {
        backgroundColor: 'black',
    },
    flexView: {
        flex: 1,
    },
    body: {
        flex: 1,
        height: 500,
        padding: 50,
        marginTop: 100,
        textAlign: 'justify',
    },
    bodyContent: {
        flexDirection: 'row',
    },
    bodyText: {
        width: '65%',
        marginLeft: -20,
        ...material.body2,
        fontWeight: 'bold',
        fontSize: 26,
        lineHeight: 30,
        textAlign: 'center',
    },
    bottom: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomText: {
        ...material.body2,
        fontSize: 22,
    },
    chatPicture: {
        width: '70%',
        resizeMode: 'contain',
        marginTop: -100,
    },
    body: {
        flex: 1,
        width: 350,
        height: 500,
        padding: 50,
        marginTop: 100,
        textAlign: 'justify',
    },
    bodyText: {
        ...material.body2,
        fontWeight: 'bold',
        fontSize: 26,
        lineHeight: 30,
    },
    chatMascot: {
        width: '100%',
        resizeMode: 'contain',
        marginTop: -300,
    },
    bottom: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomText: {
        ...material.body2,
        fontSize: 22,
    },
});

export default Style;
