import React from 'react';
import {View, Text, Pressable, TextInput} from 'react-native';
import ForumStyle from '../styles/ForumStyle';
import Feather from 'react-native-vector-icons/Feather';
import ForumComment from './ForumComment';

const ForumPostModal = ({post}) => {
    return (
        <View style={{padding: 30, width: 300}}>
            <Text style={ForumStyle.userName}>{post.poster}</Text>
            <Text style={ForumStyle.title}>{post.title}</Text>
            <Text style={ForumStyle.body}>{post.body}</Text>
            <View style={ForumStyle.postCounters}>
                <View style={ForumStyle.counterContainer}>
                    <Pressable
                        style={({pressed}) => [pressed && {opacity: 0.5}]}
                    >
                        <Feather name="heart" size={20} color="black" />
                    </Pressable>
                    <Text style={ForumStyle.counterText}>0</Text>
                </View>
                <View style={ForumStyle.counterContainer}>
                    <Pressable
                        style={({pressed}) => [pressed && {opacity: 0.5}]}
                    >
                        <Feather
                            name="message-square"
                            size={20}
                            color="black"
                        />
                    </Pressable>
                    <Text style={ForumStyle.counterText}>0</Text>
                </View>
                <View style={ForumStyle.counterContainer}>
                    <Pressable
                        style={({pressed}) => [pressed && {opacity: 0.5}]}
                    >
                        <Feather name="share" size={20} color="black" />
                    </Pressable>
                    <Text style={ForumStyle.counterText}>0</Text>
                </View>
            </View>
            <TextInput
                style={ForumStyle.commentInput}
                enterKeyHint="enter"
                multiline
                placeholder={`Write a comment...`}
                placeholderTextColor={'gray'}
            />
            <ForumComment
                comments={[
                    {
                        poster: 'User1',
                        content: 'Test',
                    },
                ]}
            />
        </View>
    );
};

export default ForumPostModal;
