import React from 'react';
import {
    View,
    ScrollView,
    TextInput,
    Pressable,
    Text,
    Image,
} from 'react-native';
import {useAtom, useSetAtom} from 'jotai';
import {
    messagesAtom,
    textInputAtom,
    textOutputAtom,
    showIntroAtom,
} from '../stores';
import Feather from 'react-native-vector-icons/Feather';
import Style from '../Style';
import {trainNlp, processText} from '../utils/NlpHandler';
import {ChatBubble, addMessage} from '../components/';

trainNlp();

const ChatScreen = () => {
    const [textInput, setTextInput] = useAtom(textInputAtom);
    const setTextOutput = useSetAtom(textOutputAtom);
    const [messages, setMessages] = useAtom(messagesAtom);
    const [showIntro, setShowIntro] = useAtom(showIntroAtom);
    return (
        <View style={Style.flexView}>
            {showIntro && (
                <View style={Style.body}>
                    <View style={Style.bodyContainer}>
                        <Text style={Style.bodyText}>
                            Hi Student, Usapchan is here! Your college life
                            companion.
                        </Text>

                        <View style={Style.mascotContainer}>
                            <Image
                                source={require('../assets/chatMascot.png')}
                                style={Style.chatMascot}
                            />
                        </View>
                    </View>
                </View>
            )}
            <ScrollView style={Style.bodyView}>
                {!showIntro &&
                    messages.map((msg) => (
                        <ChatBubble
                            key={msg.id}
                            text={msg.text}
                            user={msg.user}
                        />
                    ))}
            </ScrollView>
            <View style={Style.bottomView}>
                <View style={Style.inputContainer}>
                    <TextInput
                        style={Style.textInput}
                        enterKeyHint="enter"
                        multiline
                        value={textInput}
                        placeholder="Ask a question"
                        placeholderTextColor={'gray'}
                        onChangeText={(newTextInput) =>
                            setTextInput(newTextInput)
                        }
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
                            addMessage(setMessages, {
                                text: textInput,
                                user: true,
                            });
                            const reply = await processText(
                                textInput,
                                setTextOutput,
                                addMessage,
                                setMessages
                            );
                            setTextInput('');
                            addMessage(setMessages, {
                                text: reply.answer,
                                user: false,
                            });
                            setShowIntro(false);
                        }}
                    >
                        <Feather name="send" size={25} color="black" />
                    </Pressable>
                </View>
            </View>
        </View>
    );
};

export default ChatScreen;
