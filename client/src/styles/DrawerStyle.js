import {StyleSheet} from 'react-native';

const DrawerStyle = StyleSheet.create({
    flexView: {
        flex: 1,
        backgroundColor: 'rgba(214,224,217,1)',
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 15,
    },
    userInfo: {
        marginLeft: 15,
        marginTop: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    drawerSection: {
        flex: 1,
    },
});

export default DrawerStyle;
