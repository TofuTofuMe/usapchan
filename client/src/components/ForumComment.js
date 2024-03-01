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
                    <Text
                        style={{
                            marginBottom: 10,
                            paddingLeft: 5,
                            paddingVertical: 10,
                            color: 'black',
                        }}
                    >
                        {comment.content}
                    </Text>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignSelf: 'flex-start',
                            paddingRight: 20,
                        }}
                    >
                        <View
                            style={{flexDirection: 'row', alignItems: 'center'}}
                        >
                            <Pressable
                                style={({pressed}) => [
                                    pressed && {opacity: 0.5},
                                ]}
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
                    </View>
                </View>
            ))}
        </View>
    );
};

export default ForumComment;
