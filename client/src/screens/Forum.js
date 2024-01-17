/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {ScrollView, Text, View, Image} from 'react-native';
import style from '../Style';
import Feather from 'react-native-vector-icons/Feather';
import Style from '../Style';

const ForumScreen = ({navigation}) => {
  return (
    <View>
      <ScrollView>
        <View>
          <View elevation={5} style={style.postView}>
            <Text style={style.postUsername}>Top</Text>
            <Text style={style.postText}>
              Saya mag-code ng React Native, wow!
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Feather name="arrow-up" size={25} color="black" />
              <Text style={style.featherText}>0</Text>
              <Feather name="arrow-down" size={25} color="black" />
              <Text style={style.featherText}>0</Text>
              <Feather name="share" size={25} color="black" />
              <Text style={style.featherText}>0</Text>
            </View>
          </View>

          <View elevation={5} style={style.postView}>
            <Text style={style.postUsername}>Tin</Text>
            <Text style={style.postText}>
              Parang gusto ko kumain ng kangkong chips pagkatapos ng thesis...
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Feather name="arrow-up" size={25} color="black" />
              <Text style={style.featherText}>0</Text>
              <Feather name="arrow-down" size={25} color="black" />
              <Text style={style.featherText}>0</Text>
              <Feather name="share" size={25} color="black" />
              <Text style={style.featherText}>0</Text>
            </View>
          </View>

          <View elevation={5} style={style.postView}>
            <Text style={style.postUsername}>Pat</Text>
            <Text style={style.postText}>
              <Text style={Style.labelText}>Kangkong Chips ni Patrick</Text>
              {'\n'}
              Sarap na Organikong Kangkong Chips ni Patrick - 100% Likas at
              Lasa! {'\n'}
              Guys, bili na kayo! #SupportLocal
            </Text>
            <Image
              resizeMode="contain"
              style={{width: 250, height: 250}}
              source={require('../assets/kangkongchips_ad.png')}
            />
            <View style={{flexDirection: 'row'}}>
              <Feather name="arrow-up" size={25} color="black" />
              <Text style={style.featherText}>0</Text>
              <Feather name="arrow-down" size={25} color="black" />
              <Text style={style.featherText}>0</Text>
              <Feather name="share" size={25} color="black" />
              <Text style={style.featherText}>0</Text>
            </View>
          </View>

          <View elevation={5} style={style.postView}>
            <Text style={style.postUsername}>Hans</Text>
            <Text style={style.postText}>
              INGAT DAW TAYO SA SCAM! MAY NAGBEBENTA NG KANGKONG CHIPS
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Feather name="arrow-up" size={25} color="black" />
              <Text style={style.featherText}>0</Text>
              <Feather name="arrow-down" size={25} color="black" />
              <Text style={style.featherText}>0</Text>
              <Feather name="share" size={25} color="black" />
              <Text style={style.featherText}>0</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ForumScreen;
