import {StyleSheet} from 'react-native';

const DownloadablesStyle = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        padding: 10,
        backgroundColor: '#e2e2e2',
    },
    fileContainer: {
        flex: 1,
        flexDirection: 'row',
        margin: 10,
        paddingBottom: 10,
        borderBottomWidth: 2,
        borderColor: '#526d51',
    },
    fileName: {
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
});

export default DownloadablesStyle;
