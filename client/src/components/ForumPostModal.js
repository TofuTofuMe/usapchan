import React from 'react';
import {View, Text, Pressable, TextInput} from 'react-native';
import ForumStyle from '../styles/ForumStyle';
import Feather from 'react-native-vector-icons/Feather';

const ForumPostModal = ({post}) => {
    return (
        <View style={{padding: 30, width: 300}}>
            <Text style={ForumStyle.userName}>{post.poster}</Text>
            <Text style={ForumStyle.title}>{post.title}</Text>
            <Text
                style={{
                    marginBottom: 10,
                    paddingLeft: 5,
                    paddingVertical: 30,
                    color: 'black',
                }}
            >
                {post.body}
            </Text>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignSelf: 'flex-start',
                    paddingRight: 20,
                }}
            >
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Pressable
                        style={({pressed}) => [pressed && {opacity: 0.5}]}
                    >
                        <Feather name="heart" size={20} color="black" />
                    </Pressable>
                    <Text
                        style={[
                            ForumStyle.featherNum,
                            {marginHorizontal: 5},
                            {fontSize: 15},
                        ]}
                    >
                        0
                    </Text>
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
                    <Text
                        style={[
                            ForumStyle.featherNum,
                            {marginHorizontal: 5},
                            {fontSize: 15},
                        ]}
                    >
                        0
                    </Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Pressable
                        style={({pressed}) => [pressed && {opacity: 0.5}]}
                    >
                        <Feather name="share" size={20} color="black" />
                    </Pressable>
                    <Text
                        style={[
                            ForumStyle.featherNum,
                            {marginHorizontal: 5},
                            {fontSize: 15},
                        ]}
                    >
                        0
                    </Text>
                </View>
            </View>
            <TextInput
                style={ForumStyle.commentInput}
                enterKeyHint="enter"
                multiline
                placeholder={`Write a comment...`}
                placeholderTextColor={'gray'}
            />
        </View>
    );
};

export default ForumPostModal;
