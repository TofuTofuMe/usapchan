/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, Image, View} from 'react-native';
import Style from '../Style';

const ChatBubble = message => {
  if (message.user === true) {
    return (
      <View style={[Style.chatBubble, Style.userBubble]}>
        <Text style={Style.text}>{message.text}</Text>
      </View>
    );
  }
  if (message.user === false && message.attachment === false) {
    return (
      <View style={Style.chatBubble}>
        <Text style={Style.text}>{message.text}</Text>
        <Image
          style={{width: 50, height: 50}}
          resizeMode="contain"
          source={require('../assets/tree_sparrow.png')}
        />
      </View>
    );
  }

  return (
    <View style={Style.chatBubble}>
      <Text style={Style.text}>{message.text}</Text>
    </View>
  );
};

const addMessage = (setMessages, newMessage) => {
  setMessages(prevMessages => [
    ...prevMessages,
    {
      id: Date.now() + Math.random().toString(),
      text: newMessage.text,
      user: newMessage.user,
    },
  ]);
};

export {ChatBubble, addMessage};
