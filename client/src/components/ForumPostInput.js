import React from 'react';
import {View, TextInput, Pressable, Text} from 'react-native';
import ForumStyle from '../styles/ForumStyle';
import Feather from 'react-native-vector-icons/Feather';

const ForumPostInput = () => {
    return (
        <View style={ForumStyle.topView}>
            <TextInput
                style={ForumStyle.textInput}
                enterKeyHint="enter"
                multiline
                placeholder={`What's on your mind?`}
                placeholderTextColor={'gray'}
            />
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginLeft: 30,
                }}
            >
                <Pressable style={({pressed}) => [pressed && {opacity: 0.5}]}>
                    <View style={ForumStyle.mediaContainer}>
                        <Feather name="image" size={25} color="black" />
                        <Text style={ForumStyle.addMediaText}>Add photo</Text>
                    </View>
                </Pressable>
                <Pressable style={({pressed}) => [pressed && {opacity: 0.5}]}>
                    <View style={ForumStyle.nextMediaContainer}>
                        <Feather name="edit" size={25} color="black" />
                        <Text style={ForumStyle.addMediaText}>Post</Text>
                    </View>
                </Pressable>
            </View>
        </View>
    );
};

export default ForumPostInput;
