import React from 'react';
import {Text, Image, View, ScrollView} from 'react-native';
import HomeStyle from '../styles/HomeStyle';
import {HomeHighlight, Carousel} from '../components';

const images = [
    require('../assets/carousel1.jpg'),
    require('../assets/carousel2.jpg'),
    require('../assets/carousel3.jpg'),
    require('../assets/carousel4.jpg'),
    require('../assets/carousel5.jpg'),
];

const HomeScreen = () => {
    return (
        <ScrollView style={HomeStyle.flexView}>
            <View>
                <Image
                    style={HomeStyle.headerImage}
                    source={require('../assets/homeBanner.png')}
                />
            </View>
            <View style={HomeStyle.announcementView}>
                <View style={{flexDirection: 'row', padding: 5}}>
                    <Text style={HomeStyle.announcementText}>Announcement</Text>
                </View>
            </View>
            <HomeHighlight
                title="Title"
                date="January 1, 1970"
                author="Author"
                body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin augue nec fringilla varius. Mauris elementum nec ligula eget blandit. Donec consequat euismod pharetra. Pellentesque quis lorem mi. Nulla placerat eleifend cursus. Duis tristique blandit sem nec gravida. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam at nibh id justo finibus varius sit amet id elit."
            />
            <View style={{marginTop: 15}}>
                <Carousel images={images} />
            </View>
        </ScrollView>
    );
};

export default HomeScreen;
