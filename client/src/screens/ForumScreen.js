import React from 'react';
import {ScrollView} from 'react-native';
import ForumStyle from '../styles/ForumStyle';
import ForumPostInput from '../components/ForumPostInput';
import ForumPost from '../components/ForumPost';

const ForumScreen = () => {
    return (
        <ScrollView style={ForumStyle.flexView}>
            <ForumPostInput />
            <ForumPost
                posts={[
                    {
                        poster: 'User1',
                        body: 'Test',
                    },
                    {
                        poster: 'User2',
                        body: 'Test',
                    },
                    {
                        poster: 'User3',
                        body: 'Test',
                    },
                ]}
            />
        </ScrollView>
    );
};

export default ForumScreen;
