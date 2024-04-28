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
    announcementContent: {
        ...material.body2,
        flex: 1,
        width: '100%',
        paddingVertical: 15,
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
        paddingHorizontal: 50,
        alignSelf: 'center',
        justifyContent: 'center',
        color: 'black',
    },
    announcementDate: {
        ...robotoWeights.condensed,
        fontSize: 12,
        alignSelf: 'center',
        color: 'black',
    },
    announcementAuthor: {
        ...robotoWeights.condensed,
        fontSize: 16,
        alignSelf: 'center',
        color: 'black',
    },
    announcementBodyText: {
        textAlign: 'justify',
        ...robotoWeights.condensed,
        paddingLeft: 50,
        paddingRight: 50,
        marginTop: 20,
        marginBottom: 50,
        color: 'black',
    },
    textPressable: {
        backgroundColor: 'rgba(82,109,81,.85)',
        width: 200,
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: -30,
    },
    pressableText: {
        color: 'white',
        fontWeight: 'bold',
    },
    calendarView: {
        flex: 1,
        marginTop: 15,
        margin: 10,
        backgroundColor: 'rgba(82,109,81,.85)',
        padding: 10,
        borderRadius: 10,
    },
    calendarTitleView: {
        flex: 1,
        width: '55%',
        alignSelf: 'center',
        alignItems: 'center',
        paddingVertical: 5,
    },
    calendarTitle: {
        ...material.body3,
        fontSize: 32,
        color: 'white',
        fontWeight: '700',
    },
    calenderRow: {
        flexDirection: 'row',
    },
    calendarContent: {
        flex: 1,
        height: 'auto',
        margin: 5,
        marginTop: 15,
    },
    calendarBox: {
        flex: 1,
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 10,
    },
    calendar: {
        flex: 1,
        alignItems: 'center',
    },
    calendarText: {
        color: 'rgba(255,255,255,.8)',
    },
    calendarDayText: {
        fontSize: 20,
        color: 'rgba(255,255,255,.8)',
    },
    carouselContainer: {
        flex: 1,
    },
    paginationContainer: {
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
    bannerView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    banner: {
        flex: 1,
        width: '100%',
        height: 250,
    },
    textView: {
        position: 'absolute',
        alignItems: 'center',
    },
    bannerText: {
        flex: 1,
        color: 'white',
        fontSize: 18,
    },
});

export default HomeStyle;
