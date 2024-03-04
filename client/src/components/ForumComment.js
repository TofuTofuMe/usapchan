import React from 'react';
import {View, Text, Pressable} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import ForumStyle from '../styles/ForumStyle';

const ForumComment = ({comments}) => {
    return (
        <View>
            {comments.map((comment, index) => (
                <View key={index} style={{padding: 10}}>
                    <Text style={ForumStyle.commentPoster}>
                        {comment.poster}
                    </Text>
                    <Text style={ForumStyle.body}>{comment.content}</Text>
                    <View style={ForumStyle.commentContainer}>
                        <View style={ForumStyle.counterContainer}>
                            <Pressable
                                style={({pressed}) => [
                                    pressed && {opacity: 0.5},
                                ]}
                            >
                                <Feather name="heart" size={20} color="black" />
                            </Pressable>
                            <Text style={ForumStyle.counterText}>0</Text>
                        </View>
                    </View>
                </View>
            ))}
        </View>
    );
};

export default ForumComment;
