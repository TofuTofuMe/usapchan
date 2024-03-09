import {StyleSheet} from 'react-native';
import {material, materialColors} from 'react-native-typography';

const ChatStyle = StyleSheet.create({
    flexView: {
        flex: 1,
    },
    bottomView: {
        flexDirection: 'row',
        marginTop: 'auto',
        justifyContent: 'flex-end',
    },
    chatView: {
        flex: 1,
        padding: 5,
        paddingTop: 5,
        paddingBottom: 5,
        marginLeft: 5,
        marginRight: 5,
    },
    inputContainer: {
        flex: 1,
        marginBottom: 5,
    },
    textInput: {
        backgroundColor: materialColors.whiteSecondary,
        borderBottomWidth: 0.75,
        color: materialColors.blackPrimary,
        marginTop: 5,
        margin: 10,
        padding: 10,
    },
    chatBubble: {
        padding: 5,
        margin: 10,
        marginTop: 5,
        marginBottom: 25,
        borderRadius: 15,
        backgroundColor: materialColors.whiteSecondary,
    },
    chatMarkdown: {
        textgroup: {
            padding: 5,
            color: materialColors.blackPrimary,
            textAlign: 'center',
        },
        table: {
            flex: 1,
        },
    },
    userBubble: {
        backgroundColor: 'skyblue',
        alignSelf: 'flex-end',
        color: materialColors.blackPrimary,
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
    text: {
        ...material.body1,
        padding: 10,
    },

    introBodyContainer: {
        flex: 1,
        height: 500,
        padding: 50,
        marginTop: 100,
        textAlign: 'justify',
    },
    introBody: {
        flexDirection: 'row',
        flex: 1,
    },
    introText: {
        ...material.body2,
        width: '65%',
        marginLeft: -20,
        fontSize: 26,
        lineHeight: 30,
        textAlign: 'center',
    },
    mascotContainer: {
        flex: 1,
        position: 'absolute',
        marginLeft: 100,
        marginTop: 50,
    },
    chatMascot: {
        width: 300,
        height: 300,
        resizeMode: 'contain',
        position: 'absolute',
    },
});

export default ChatStyle;
