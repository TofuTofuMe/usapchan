import {StyleSheet} from 'react-native';

const DrawerStyle = StyleSheet.create({
    flexView: {
        flex: 1,
        backgroundColor: 'rgba(82,109,81,.35)',
    },
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    userInfo: {
        marginLeft: 15,
        marginTop: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    drawerSection: {
        flex: 1,
        marginTop: 15,
    },
});

export default DrawerStyle;
