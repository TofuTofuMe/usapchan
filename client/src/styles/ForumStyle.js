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
        color: 'black',
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
    title: {
        paddingLeft: 5,
        fontWeight: '500',
        color: 'black',
    },
    post: {
        flex: 1,
        paddingVertical: 25,
        paddingHorizontal: 25,
        marginVertical: 10,
        backgroundColor: 'rgba(52, 52, 52, 0.05)',
        marginHorizontal: 10,
        borderRadius: 10,
    },
    userName: {
        ...material.title,
        fontSize: 18,
        marginBottom: 5,
        color: 'black',
    },
    commentPoster: {
        ...material.title,
        fontSize: 15,
        color: 'black',
    },
    modalContainer: {
        backgroundColor: 'white',
        borderRadius: 10,
        elevation: 5,
    },
    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0, 0.2)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    commentInput: {
        marginTop: 30,
        backgroundColor: materialColors.whiteSecondary,
        color: materialColors.blackPrimary,
    },
    featherNum: {
        color: 'black',
    },
});

export default ForumStyle;
