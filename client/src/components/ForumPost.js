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

    const closeModal = () => {
        setSelectedPost(null);
    };

    return (
        <ScrollView>
            {posts.map((post, index) => (
                <Pressable key={index} onPress={() => handlePostPress(post)}>
                    <View style={ForumStyle.postContainer}>
                        <Text style={ForumStyle.userName}>{post.poster}</Text>
                        <Text style={ForumStyle.title}>{post.title}</Text>
                        <Text style={ForumStyle.body}>{post.body}</Text>

                        <View style={ForumStyle.postCounters}>
                            <View style={ForumStyle.counterContainer}>
                                <Pressable
                                    style={({pressed}) => [
                                        pressed && {opacity: 0.5},
                                    ]}
                                >
                                    <Feather
                                        name="heart"
                                        size={22}
                                        color="black"
                                    />
                                </Pressable>
                                <Text style={ForumStyle.counterText}>0</Text>
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
                                <Text style={ForumStyle.counterText}>0</Text>
                            </View>
                            <View style={ForumStyle.counterContainer}>
                                <Pressable
                                    style={({pressed}) => [
                                        pressed && {opacity: 0.5},
                                    ]}
                                >
                                    <Feather
                                        name="share"
                                        size={22}
                                        color="black"
                                    />
                                </Pressable>
                                <Text style={ForumStyle.counterText}>0</Text>
                            </View>
                        </View>
                    </View>
                </Pressable>
            ))}

            <Modal
                animationType="slide"
                transparent={true}
                visible={selectedPost !== null}
                onRequestClose={closeModal}
            >
                <TouchableOpacity
                    style={ForumStyle.modalBackground}
                    onPress={closeModal}
                >
                    <TouchableWithoutFeedback>
                        <View style={ForumStyle.modalContainer}>
                            {selectedPost && (
                                <ForumPostModal
                                    post={selectedPost}
                                    onClose={closeModal}
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
