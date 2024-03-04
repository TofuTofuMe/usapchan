import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import HomeStyle from '../styles/HomeStyle';
import {HomeHighlight, Carousel, HomeBanner} from '../components';

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
            <HomeBanner
                banner={{
                    textOne: 'Hello college student',
                    textTwo: 'Your college companion is here!',
                }}
            />
            <HomeHighlight
                title="Title"
                date="January 1, 1970"
                author="Author"
                body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sollicitudin augue nec fringilla varius. Mauris elementum nec ligula eget blandit. Donec consequat euismod pharetra. Pellentesque quis lorem mi. Nulla placerat eleifend cursus. Duis tristique blandit sem nec gravida. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam at nibh id justo finibus varius sit amet id elit."
            />

            <Carousel images={images} />
        </ScrollView>
    );
};

export default HomeScreen;
