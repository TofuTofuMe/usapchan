import React from 'react';
import {View, TextInput, Pressable, Text, Alert} from 'react-native';
import ForumStyle from '../styles/ForumStyle';
import Feather from 'react-native-vector-icons/Feather';
import {addPost, getPosts} from '../utils';
import {
    modalAtom,
    postInputAtom,
    postsAtom,
    userDataAtom,
    userTokenAtom,
} from '../stores';
import {useAtom, useAtomValue, useSetAtom} from 'jotai';
import PopupModal from './PopupModal';

const ForumPostInput = () => {
    const [postObject, setPostObject] = useAtom(postInputAtom);
    const [modal, setModal] = useAtom(modalAtom);
    const setPosts = useSetAtom(postsAtom);
    const userData = useAtomValue(userDataAtom);
    const userToken = useAtomValue(userTokenAtom);

    const goPost = async () => {
        setModal({
            visibility: true,
            loading: true,
            message: 'Posting your thoughts...',
        });
        const response = await addPost(
            {
                poster: userData.username,
                title: postObject.title,
                content: postObject.content,
            },
            userToken
        );
        if (response.success) {
            Alert.alert('Posted', 'You successfully post your post!');
            getPosts(userToken).then((post) => {
                setPosts(post.reverse());
            }, userToken);
            setPostObject({});
        } else {
            Alert.alert('Try again, maybe?', 'Sadly, we failed to post that.');
        }
        setModal({
            visibility: false,
            loading: false,
        });
    };

    return (
        <View style={ForumStyle.topView}>
            <TextInput
                style={ForumStyle.textInput}
                enterKeyHint="next"
                placeholder={`What's your post about?`}
                placeholderTextColor={'gray'}
                value={postObject.title}
                onChangeText={(postTitle) => {
                    setPostObject({
                        ...postObject,
                        title: postTitle,
                    });
                }}
            />
            <TextInput
                style={ForumStyle.textInput}
                enterKeyHint="enter"
                multiline
                placeholder={`What's on your mind?`}
                placeholderTextColor={'gray'}
                value={postObject.content}
                onChangeText={(postContent) => {
                    setPostObject({
                        ...postObject,
                        content: postContent,
                    });
                }}
            />
            <View style={ForumStyle.pressableRow}>
                <Pressable style={({pressed}) => [pressed && {opacity: 0.5}]}>
                    <View style={ForumStyle.photoPressable}>
                        <Feather name="image" size={25} color="black" />
                        <Text style={ForumStyle.pressableText}>Add photo</Text>
                    </View>
                </Pressable>
                <Pressable
                    style={({pressed}) => [pressed && {opacity: 0.5}]}
                    onPress={goPost}
                >
                    <View style={ForumStyle.postPressable}>
                        <Feather name="edit" size={25} color="black" />
                        <Text style={ForumStyle.pressableText}>Post</Text>
                    </View>
                </Pressable>
            </View>
            <PopupModal modal={modal} setModal={setModal} />
        </View>
    );
};

export default ForumPostInput;
