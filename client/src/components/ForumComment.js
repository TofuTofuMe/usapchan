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
                        {comment.poster} on {comment.createdAt}
                    </Text>
                    <Text style={ForumStyle.body}>{comment.content}</Text>
                </View>
            ))}
        </View>
    );
};

export default ForumComment;
