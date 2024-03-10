import React, {useEffect} from 'react';
import {View, Text, Pressable, TextInput, Alert} from 'react-native';
import ForumStyle from '../styles/ForumStyle';
import Feather from 'react-native-vector-icons/Feather';
import ForumComment from './ForumComment';
import {
    userTokenAtom,
    commentInputAtom,
    commentsAtom,
    modalAtom,
    userDataAtom,
} from '../stores';
import {useAtom, useAtomValue} from 'jotai';
import {addComment, getPostDetails} from '../utils';
import PopupModal from './PopupModal';

const ForumPostModal = ({post}) => {
    const [comments, setComments] = useAtom(commentsAtom);
    const [commentObject, setCommentObject] = useAtom(commentInputAtom);
    const [modal, setModal] = useAtom(modalAtom);
    const userToken = useAtomValue(userTokenAtom);
    const userData = useAtomValue(userDataAtom);

    useEffect(() => {
        getPostDetails(post.id, userToken).then((postDetails) => {
            setComments(postDetails.comments.reverse());
        }, userToken);
    }, [post.id, userToken, setComments]);

    const goComment = async () => {
        setModal({
            visibility: true,
            loading: true,
            message: 'Commenting your thoughts!',
        });
        const response = await addComment(
            post.id,
            {poster: userData.username, content: commentObject},
            userToken
        );
        if (response.success) {
            Alert.alert('Posted', `You commented on ${post.poster}'s post!`);
            setCommentObject('');
        } else {
            Alert.alert('Try again, maybe?', 'Sadly, we failed to post that.');
        }
        setModal({
            visibility: false,
            loading: false,
        });
    };

    return (
        <View style={ForumStyle.modalCard}>
            <Text style={ForumStyle.title}>{post.title}</Text>
            <Text style={ForumStyle.username}>
                {post.poster} on {post.createdAt}
            </Text>
            <Text style={ForumStyle.body}>{post.content}</Text>
            <View style={ForumStyle.postCounters}>
                <View style={ForumStyle.counterContainer}>
                    <Pressable
                        style={({pressed}) => [pressed && {opacity: 0.5}]}
                    >
                        <Feather name="bar-chart-2" size={20} color="black" />
                    </Pressable>
                    <Text style={ForumStyle.counterText}>{post.viewCount}</Text>
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
                    <Text style={ForumStyle.counterText}>
                        {post.commentCount}
                    </Text>
                </View>
            </View>
            <TextInput
                style={ForumStyle.commentInput}
                enterKeyHint="enter"
                multiline
                value={commentObject.content}
                placeholder={`Write a comment...`}
                placeholderTextColor={'gray'}
                onChangeText={(commentInput) => {
                    setCommentObject(commentInput);
                }}
            />
            <Pressable
                disabled={commentObject === '' ? true : false}
                onPress={goComment}
            >
                <Feather name="send" size={25} color="black" />
            </Pressable>
            <ForumComment comments={comments} />
            <PopupModal modal={modal} setModal={setModal} />
        </View>
    );
};

export default ForumPostModal;
