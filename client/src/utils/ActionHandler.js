import {fetchApi, downloadFile} from './ApiHandler';
import ReactNativeBlobUtil from 'react-native-blob-util';

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

const getChatSuggestions = async (userToken) => {
    try {
        const response = await fetchApi('/chat/get_chatsuggestions', 'GET', {
            Authorization: `Bearer ${userToken}`,
            'Content-Type': 'application/json',
        });
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

const getDownloadables = async (userToken, type) => {
    try {
        const response = await fetchApi('/college/get_downloadables/', 'GET', {
            Authorization: `Bearer ${userToken}`,
        });
        const downloadables = [];

        for (const file of response) {
            if (file.path.includes(type)) {
                downloadables.push({
                    filename: file.name,
                    url: file.path.replace('assets/', '/') + `/${file.name}`,
                });
            }
        }
        return downloadables;
    } catch (error) {
        console.error(error.message);
    }
};

const getDownloadable = async (userToken, file) => {
    try {
        const response = await downloadFile(userToken, file);
        return response;
    } catch (error) {
        console.log(error.message);
    }
};

const openFile = async (filePath) => {
    try {
        ReactNativeBlobUtil.android.actionViewIntent(filePath);
    } catch (error) {
        console.log(error.message);
    }
};

export {
    sendChat,
    getChatSuggestions,
    addPost,
    addComment,
    getPosts,
    getPostDetails,
    getDownloadables,
    getDownloadable,
    openFile,
};
