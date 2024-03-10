import React from 'react';
import {View, Text} from 'react-native';
import HomeStyle from '../styles/HomeStyle';

const HomeCalendar = ({events}) => {
    if (!events || events.length === 0) {
        return <Text>No events available</Text>;
    }
    return (
        <View style={HomeStyle.calendarView}>
            <View style={HomeStyle.calendarTitleView}>
                <Text style={HomeStyle.calendarTitle}>Calendar</Text>
            </View>
            <View style={HomeStyle.calenderRow}>
                {events.map((event) => (
                    <View style={HomeStyle.calendarContent} key={event.id}>
                        <View style={HomeStyle.calendarBox}>
                            <View style={HomeStyle.calendar}>
                                <Text style={HomeStyle.calendarText}>
                                    {event.month}
                                </Text>
                                <Text style={HomeStyle.calendarDayText}>
                                    {event.day}
                                </Text>
                                <Text style={HomeStyle.calendarText}>
                                    {event.detail}
                                </Text>
                            </View>
                        </View>
                    </View>
                ))}
            </View>
        </View>
    );
};
export default HomeCalendar;
