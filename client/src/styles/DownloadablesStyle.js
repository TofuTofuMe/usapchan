import {StyleSheet} from 'react-native';

const DownloadablesStyle = StyleSheet.create({
    flexView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: 'white',
    },
    container: {
        flex: 1,
        width: '100%',
        margin: 10,
        padding: 10,
        backgroundColor: '#e2e2e2',
    },
    fileContainer: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        margin: 10,
        paddingBottom: 10,
        borderBottomWidth: 2,
        borderColor: '#526d51',
    },
    filename: {
        flex: 1,
        flexDirection: 'row',
    },
    pressableContainer: {
        flex: 0.25,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 20,
    },
    text: {
        color: 'black',
        fontSize: 19,
    },
    textPressable: {
        backgroundColor: '#99BC85',
        width: 200,
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    pressableText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default DownloadablesStyle;
