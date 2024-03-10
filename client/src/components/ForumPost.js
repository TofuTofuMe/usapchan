import React from 'react';
import {
    ScrollView,
    View,
    Text,
    Pressable,
    Modal,
    TouchableOpacity,
    TouchableWithoutFeedback,
} from 'react-native';
import {useAtom} from 'jotai';
import {selectedPostAtom} from '../stores';
import ForumStyle from '../styles/ForumStyle';
import Feather from 'react-native-vector-icons/Feather';
import ForumPostModal from './ForumPostModal';

const ForumPost = ({posts}) => {
    const [selectedPost, setSelectedPost] = useAtom(selectedPostAtom);

    const handlePostPress = (post) => {
        setSelectedPost(post);
    };

    return (
        <ScrollView>
            {posts.map((post, index) => (
                <Pressable key={index} onPress={() => handlePostPress(post)}>
                    <View style={ForumStyle.postContainer}>
                        <Text style={ForumStyle.title}>{post.title}</Text>
                        <Text style={ForumStyle.username}>
                            posted by {post.poster} on {post.createdAt}
                        </Text>
                        <Text style={ForumStyle.body}>{post.content}</Text>

                        <View style={ForumStyle.postCounters}>
                            <View style={ForumStyle.counterContainer}>
                                <Pressable
                                    style={({pressed}) => [
                                        pressed && {opacity: 0.5},
                                    ]}
                                >
                                    <Feather
                                        name="bar-chart-2"
                                        size={22}
                                        color="black"
                                    />
                                </Pressable>
                                <Text style={ForumStyle.counterText}>
                                    {post.viewCount}
                                </Text>
                            </View>
                            <View style={ForumStyle.counterContainer}>
                                <Pressable
                                    style={({pressed}) => [
                                        pressed && {opacity: 0.5},
                                    ]}
                                    key={index}
                                    onPress={() => handlePostPress(post)}
                                >
                                    <Feather
                                        name="message-square"
                                        size={22}
                                        color="black"
                                    />
                                </Pressable>
                                <Text style={ForumStyle.counterText}>
                                    {post.commentCount}
                                </Text>
                            </View>
                        </View>
                    </View>
                </Pressable>
            ))}

            <Modal
                animationType="slide"
                transparent={true}
                visible={selectedPost !== null}
                onRequestClose={() => handlePostPress(null)}
            >
                <TouchableOpacity
                    style={ForumStyle.modalBackground}
                    onPress={() => handlePostPress(null)}
                >
                    <TouchableWithoutFeedback>
                        <View style={ForumStyle.modalContainer}>
                            {selectedPost && (
                                <ForumPostModal
                                    post={selectedPost}
                                    onClose={() => handlePostPress(null)}
                                />
                            )}
                        </View>
                    </TouchableWithoutFeedback>
                </TouchableOpacity>
            </Modal>
        </ScrollView>
    );
};

export default ForumPost;
