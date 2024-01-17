import React from 'react';
import {Text, Image, View} from 'react-native';
import Style from '../Style';

const HomeScreen = ({navigation}) => {
  return (
    <View style={Style.centerView}>
      <Image
        source={require('../assets/collegescience_logo.png')}
        resizeMode="contain"
        style={{width: 256, height: 256}}
      />
      <Text style={Style.welcomeText}>How can Usapchan you today?</Text>
    </View>
  );
};

export default HomeScreen;
