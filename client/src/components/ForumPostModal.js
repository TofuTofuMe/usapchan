import React from 'react';
import {View, Text, Pressable, TextInput} from 'react-native';
import ForumStyle from '../styles/ForumStyle';
import Feather from 'react-native-vector-icons/Feather';

const ForumPostModal = ({post}) => {
    return (
        <View>
            <Text style={ForumStyle.userName}>{post.poster}</Text>
            <Text style={{marginBottom: 10, paddingLeft: 5}}>{post.body}</Text>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingRight: 200,
                }}
            >
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Pressable
                        style={({pressed}) => [pressed && {opacity: 0.5}]}
                    >
                        <Feather name="arrow-up" size={20} color="black" />
                    </Pressable>
                    <Text style={{marginLeft: 5}}>0</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Pressable
                        style={({pressed}) => [pressed && {opacity: 0.5}]}
                    >
                        <Feather name="arrow-down" size={20} color="black" />
                    </Pressable>
                    <Text style={{marginLeft: 5}}>0</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Pressable
                        style={({pressed}) => [pressed && {opacity: 0.5}]}
                    >
                        <Feather
                            name="message-square"
                            size={20}
                            color="black"
                        />
                    </Pressable>
                    <Text style={{marginLeft: 5}}>0</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Pressable
                        style={({pressed}) => [pressed && {opacity: 0.5}]}
                    >
                        <Feather name="share" size={20} color="black" />
                    </Pressable>
                    <Text style={{marginLeft: 5}}>0</Text>
                </View>
            </View>
            <TextInput
                style={ForumStyle.commentInput}
                enterKeyHint="enter"
                multiline
                placeholder={`Write a comment...`}
            />
        </View>
    );
};

export default ForumPostModal;
