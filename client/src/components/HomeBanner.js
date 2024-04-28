import React from 'react';
import {View, Image, Text} from 'react-native';
import HomeStyle from '../styles/HomeStyle';

const HomeBanner = ({banner}) => {
    return (
        <View style={HomeStyle.bannerView}>
            <Image
                source={require('../assets/homeBanner.webp')}
                style={HomeStyle.banner}
            />
            <View style={HomeStyle.textView}>
                <Text style={HomeStyle.bannerText}>{banner.textOne}</Text>
                <Text style={HomeStyle.bannerText}>{banner.textTwo}</Text>
            </View>
        </View>
    );
};

export default HomeBanner;
