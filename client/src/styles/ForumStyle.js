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
    pressableRow: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 30,
    },
    photoPressable: {
        width: '85%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20,
    },
    pressableText: {
        ...material.body1,
        fontSize: 16,
        marginLeft: 5,
    },
    postPressable: {
        width: '85%',
        height: '55%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(52, 52, 52, 0.2)',
        borderRadius: 5,
    },
    postContainer: {
        flex: 1,
        paddingVertical: 25,
        paddingHorizontal: 25,
        marginVertical: 10,
        backgroundColor: 'rgba(52, 52, 52, 0.05)',
        marginHorizontal: 10,
        borderRadius: 10,
    },
    username: {
        marginBottom: 5,
        color: 'black',
    },
    title: {
        ...material.title,
        fontWeight: '500',
        color: 'black',
    },
    body: {
        marginBottom: 10,
        paddingVertical: 30,
        color: 'black',
    },
    postCounters: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'flex-start',
        paddingRight: 20,
    },
    counterContainer: {
        flexDirection: 'row',
    },
    counterText: {
        color: 'black',
        marginHorizontal: 5,
        fontSize: 15,
    },
    commentPoster: {
        ...material.title,
        fontSize: 15,
        color: 'black',
    },
    commentContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'flex-start',
        paddingRight: 20,
    },
    commentContent: {
        marginBottom: 10,
        paddingLeft: 5,
        paddingVertical: 10,
        color: 'black',
    },
    likeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    likeCount: {
        marginHorizontal: 5,
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
    modalCard: {
        padding: 15,
        width: 350,
    },
    commentInput: {
        marginTop: 30,
        backgroundColor: materialColors.whiteSecondary,
        color: materialColors.blackPrimary,
    },
});

export default ForumStyle;
