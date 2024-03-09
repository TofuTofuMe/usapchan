import React, {useRef} from 'react';
import {
    View,
    ScrollView,
    TextInput,
    Pressable,
    Text,
    Image,
    Keyboard,
} from 'react-native';
import {useAtom} from 'jotai';
import {messagesAtom, textInputAtom, showIntroAtom} from '../stores';
import Feather from 'react-native-vector-icons/Feather';
import ChatStyle from '../styles/ChatStyle';
import {ChatBubble, addMessage} from '../components';
import {sendChat} from '../utils';
import {userTokenAtom} from '../stores';
import {useAtomValue} from 'jotai';

const ChatScreen = () => {
    const [textInput, setTextInput] = useAtom(textInputAtom);
    const [messages, setMessages] = useAtom(messagesAtom);
    const [showIntro, setShowIntro] = useAtom(showIntroAtom);
    const userToken = useAtomValue(userTokenAtom);
    const scrollRef = useRef();

    const goChat = async () => {
        addMessage(setMessages, {
            text: textInput,
            user: true,
        });
        setTextInput('');
        setShowIntro(false);
        const response = await sendChat(textInput, userToken);
        addMessage(setMessages, {
            text: response.answer ? response.answer : 'No response',
            user: false,
        });
        Keyboard.dismiss();
    };

    return (
        <View style={ChatStyle.flexView}>
            {showIntro && (
                <View style={ChatStyle.introBodyContainer}>
                    <View style={ChatStyle.introBody}>
                        <Text style={ChatStyle.introText}>
                            Hi Student, Usapchan is here! Your college life
                            companion.
                        </Text>

                        <View style={ChatStyle.mascotContainer}>
                            <Image
                                source={require('../assets/chatMascot.png')}
                                style={ChatStyle.chatMascot}
                            />
                        </View>
                    </View>
                </View>
            )}
            <ScrollView
                ref={scrollRef}
                style={ChatStyle.chatView}
                onContentSizeChange={() =>
                    scrollRef.current.scrollToEnd({animated: true})
                }
            >
                {!showIntro &&
                    messages.map((message) => (
                        <ChatBubble
                            key={message.id}
                            text={message.text}
                            user={message.user}
                        />
                    ))}
            </ScrollView>
            <View style={ChatStyle.bottomView}>
                <View style={ChatStyle.inputContainer}>
                    <TextInput
                        style={ChatStyle.textInput}
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
                <View style={ChatStyle.bottomView}>
                    <Pressable
                        style={({pressed}) => [
                            ChatStyle.pressable,
                            pressed && ChatStyle.pressablePressed,
                            {marginBottom: 15, marginRight: 15},
                        ]}
                        onPress={goChat}
                    >
                        <Feather name="send" size={25} color="black" />
                    </Pressable>
                </View>
            </View>
        </View>
    );
};

export default ChatScreen;
