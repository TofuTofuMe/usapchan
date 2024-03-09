import React from 'react';
import {Text, View} from 'react-native';
import Markdown from 'react-native-markdown-display';
import ChatStyle from '../styles/ChatStyle';

const ChatBubble = (message) => {
    if (message.user === true) {
        return (
            <View style={[ChatStyle.chatBubble, ChatStyle.userBubble]}>
                <Text style={ChatStyle.text}>{message.text}</Text>
            </View>
        );
    }

    return (
        <View style={ChatStyle.chatBubble}>
            <Markdown style={ChatStyle.chatMarkdown}>{message.text}</Markdown>
        </View>
    );
};

const addMessage = (setMessages, newMessage) => {
    setMessages((prevMessages) => [
        ...prevMessages,
        {
            id: Date.now() + Math.random().toString(),
            text: newMessage.text,
            user: newMessage.user,
        },
    ]);
};

export {ChatBubble, addMessage};
