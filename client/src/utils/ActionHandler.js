import {fetchApi} from './ApiHandler';

const sendChat = async (chatQuery, userToken) => {
    try {
        const response = await fetchApi(
            '/chat/send_chat',
            'POST',
            {
                Authorization: `Bearer ${userToken}`,
                'Content-Type': 'application/json',
            },
            JSON.stringify({message: chatQuery})
        );

        return response;
    } catch (error) {
        console.error(error.message);
    }
};

const addPost = async (postObject, userToken) => {
    try {
        const response = await fetchApi(
            '/forum/add_post',
            'POST',
            {
                Authorization: `Bearer ${userToken}`,
                'Content-Type': 'application/json',
            },
            JSON.stringify(postObject)
        );

        return response;
    } catch (error) {
        console.error(error.message);
    }
};

const addComment = async (postId, commentObject, userToken) => {
    try {
        const response = await fetchApi(
            `/forum/post/${postId}/add_comment`,
            'POST',
            {
                Authorization: `Bearer ${userToken}`,
                'Content-Type': 'application/json',
            },
            JSON.stringify(commentObject)
        );

        return response;
    } catch (error) {
        console.error(error.message);
    }
};

const getPosts = async (userToken) => {
    try {
        const response = await fetchApi('/forum/get_posts', 'GET', {
            Authorization: `Bearer ${userToken}`,
            'Content-Type': 'application/json',
        });
        return response;
    } catch (error) {
        console.error(error.message);
    }
};

const getPostDetails = async (postId, userToken) => {
    try {
        const response = await fetchApi(`/forum/post/${postId}`, 'GET', {
            Authorization: `Bearer ${userToken}`,
            'Content-Type': 'application/json',
        });
        return response;
    } catch (error) {
        console.error(error.message);
    }
};

export {sendChat, addPost, addComment, getPosts, getPostDetails};
