/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, ScrollView, TextInput, Pressable} from 'react-native';
import {useAtom, useSetAtom} from 'jotai';
import {messagesAtom, textInputAtom, textOutputAtom} from '../stores';
import Feather from 'react-native-vector-icons/Feather';
import Style from '../Style';
import {trainNlp, processText} from '../utils/NlpHandler';
import {ChatBubble, addMessage} from '../components/';

trainNlp();

const ChatScreen = () => {
  const [textInput, setTextInput] = useAtom(textInputAtom);
  const setTextOutput = useSetAtom(textOutputAtom);
  const [messages, setMessages] = useAtom(messagesAtom);
  return (
    <View style={Style.flexView}>
      {/* <Text style={Style.labelText}>Debug:</Text> */}
      {/* <Text style={Style.text}>{JSON.stringify(textOutput)}</Text> */}
      <ScrollView style={Style.bodyView}>
        {messages.map(msg => (
          <ChatBubble key={msg.id} text={msg.text} user={msg.user} />
        ))}
      </ScrollView>
      <View style={Style.bottomView}>
        <View style={{flex: 1, marginBottom: 5}}>
          <TextInput
            style={Style.textInput}
            enterKeyHint="enter"
            multiline
            value={textInput}
            onChangeText={newTextInput => setTextInput(newTextInput)}
          />
        </View>
        <View style={{marginTop: 'auto'}}>
          <Pressable
            style={({pressed}) => [
              Style.pressable,
              pressed && Style.pressablePressed,
              {marginBottom: 15, marginRight: 15},
            ]}
            disabled={textInput === '' ? true : false}
            onPress={async () => {
              addMessage(setMessages, {text: textInput, user: true});
              const reply = await processText(
                textInput,
                setTextOutput,
                addMessage,
                setMessages,
              );
              setTextInput('');
              addMessage(setMessages, {text: reply.answer, user: false});
            }}>
            <Feather name="send" size={25} color="black" />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default ChatScreen;
