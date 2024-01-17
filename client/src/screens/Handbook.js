/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Dimensions, View} from 'react-native';
import Pdf from 'react-native-pdf';
import Style from '../Style';

const HandbookScreen = () => {
  const handbook = {uri: 'bundle-assets://student_handbook.pdf'};

  return (
    <View style={Style.flexView}>
      <Pdf
        source={handbook}
        style={{
          flex: 1,
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height,
        }}
      />
    </View>
  );
};

export default HandbookScreen;
