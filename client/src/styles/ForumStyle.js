import {StyleSheet} from 'react-native';
import {materialColors, material} from 'react-native-typography';

const ForumStyle = StyleSheet.create({
    flexView: {
        flex: 1,
    },
    topView: {
        flex: 1,
        backgroundColor: 'rgba(52, 52, 52, 0.1)',
        paddingTop: 10,
        paddingBottom: 5,
    },
    textInput: {
        flex: 1,
        backgroundColor: materialColors.whiteSecondary,
        borderBottomWidth: 0.75,
        color: materialColors.blackPrimary,
        marginTop: 5,
        margin: 10,
        padding: 10,
    },
    mediaContainer: {
        width: '85%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20,
    },
    nextMediaContainer: {
        width: '85%',
        height: '55%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(52, 52, 52, 0.2)',
        borderRadius: 5,
    },
    addMediaText: {
        ...material.body1,
        fontSize: 16,
        marginLeft: 5,
    },
    post: {
        flex: 1,
        paddingVertical: 15,
        paddingHorizontal: 25,
        marginTop: 10,
        backgroundColor: 'rgba(52, 52, 52, 0.05)',
        marginHorizontal: 10,
        borderRadius: 10,
    },
    userName: {
        ...material.title,
        fontSize: 18,
        marginBottom: 5,
    },
    modalContainer: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        elevation: 5,
        marginHorizontal: 20,
    },
    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0, 0.2)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    commentInput: {
        backgroundColor: materialColors.whiteSecondary,
        color: materialColors.blackPrimary,
    },
});

export default ForumStyle;
