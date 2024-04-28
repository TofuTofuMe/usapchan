import React, {useEffect} from 'react';
import {ActivityIndicator, ScrollView} from 'react-native';
import ForumStyle from '../styles/ForumStyle';
import ForumPostInput from '../components/ForumPostInput';
import ForumPost from '../components/ForumPost';
import {getPosts} from '../utils';
import {postsAtom, userTokenAtom} from '../stores';
import {useAtom, useAtomValue} from 'jotai';

const ForumScreen = () => {
    const [posts, setPosts] = useAtom(postsAtom);
    const userToken = useAtomValue(userTokenAtom);

    useEffect(() => {
        getPosts(userToken).then((post) => {
            setPosts(post.reverse());
        });
    }, [userToken, setPosts]);

    return (
        <ScrollView style={ForumStyle.flexView}>
            <ForumPostInput />
            {!posts ? (
                <ActivityIndicator size={'large'} />
            ) : (
                <ForumPost posts={posts} />
            )}
        </ScrollView>
    );
};

export default ForumScreen;
