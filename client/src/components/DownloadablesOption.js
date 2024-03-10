import React from 'react';
import {Pressable, Text} from 'react-native';
import DownloadablesStyle from '../styles/DownloadablesStyle';

const DownloadablesOption = ({title, onPress}) => {
    return (
        <Pressable
            style={({pressed}) => [
                DownloadablesStyle.textPressable,
                {marginBottom: 20},
                pressed && {opacity: 0.5},
            ]}
            onPress={onPress}
        >
            <Text style={DownloadablesStyle.pressableText}>{title}</Text>
        </Pressable>
    );
};

export default DownloadablesOption;
