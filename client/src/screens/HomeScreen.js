import React from 'react';
import {ScrollView} from 'react-native';
import HomeStyle from '../styles/HomeStyle';
import {HomeHighlight, Carousel, HomeBanner} from '../components';
import {userDataAtom} from '../stores';
import {useAtomValue} from 'jotai';

const images = [
    require('../assets/carousel1.webp'),
    require('../assets/carousel2.webp'),
    require('../assets/carousel3.webp'),
    require('../assets/carousel4.webp'),
    require('../assets/carousel5.webp'),
];

const HomeScreen = () => {
    const userData = useAtomValue(userDataAtom);

    return (
        <ScrollView style={HomeStyle.flexView}>
            <HomeBanner
                banner={{
                    textOne: `Hello ${userData.firstName}`,
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
