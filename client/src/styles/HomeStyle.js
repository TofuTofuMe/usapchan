import {StyleSheet} from 'react-native';
import {material, robotoWeights} from 'react-native-typography';

const HomeStyle = StyleSheet.create({
    flexView: {
        flex: 1,
    },
    headerImage: {
        width: '100%',
        height: 300,
    },
    newsText: {
        ...material.body2,
        fontSize: 32,
        padding: 15,
        paddingLeft: 30,
        fontWeight: '600',
    },
    bulsuImage: {
        width: '100%',
        height: 250,
    },
    announcementView: {
        padding: 10,
    },
    announcementText: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 30,
        marginBottom: 10,
        ...material.body2,
        fontSize: 22,
        fontWeight: 'normal',
    },
    announcementContent: {
        ...material.body2,
        flex: 1,
        padding: 0,
        shadowColor: '#171717',
        width: '100%',
    },
    announcementImage: {
        width: '100%',
        resizeMode: 'contain',
        height: 200,
    },
    announcementTitle: {
        ...robotoWeights.condensed,
        fontSize: 22,
        marginBottom: 15,
        marginTop: 10,
        alignSelf: 'center',
    },
    announcementDate: {
        ...robotoWeights.condensed,
        fontSize: 12,
        alignSelf: 'center',
    },
    announcementAuthor: {
        ...robotoWeights.condensed,
        fontSize: 16,
        alignSelf: 'center',
    },
    announcementBodyText: {
        textAlign: 'justify',
        ...robotoWeights.condensed,
        paddingLeft: 50,
        paddingRight: 50,
        marginTop: 20,
        marginBottom: 50,
    },
    calendarView: {
        flex: 1,
        backgroundColor: '#99BC85',
        marginTop: 20,
    },
    calendarTitleView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    calendarTitle: {
        ...material.body1,
        fontSize: 22,
        padding: 30,
    },
    calendarContent: {
        flex: 1,
        height: 110,
        margin: 20,
    },
    calendarBox: {
        flex: 1,
        borderWidth: 2,
        borderColor: 'black',
    },
    calendar: {
        flex: 1,
        alignItems: 'center',
    },
    calendarEvent: {
        flex: 1,
        alignItems: 'center',
    },
    pagination: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 10,
        alignSelf: 'center',
    },
    paginationDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: 'rgba(0,0,0,.2)',
        marginHorizontal: 5,
    },
    paginationDotActive: {
        backgroundColor: '#000',
    },
});

export default HomeStyle;
