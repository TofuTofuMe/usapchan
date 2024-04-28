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
import {
    userTokenAtom,
    userDataAtom,
    messagesAtom,
    textInputAtom,
    showIntroAtom,
    suggestionsAtom,
} from '../stores';
import Feather from 'react-native-vector-icons/Feather';
import ChatStyle from '../styles/ChatStyle';
import {ChatBubble, ChatSuggestions, addMessage} from '../components';
import {getChatSuggestions, sendChat} from '../utils';
import {useAtomValue} from 'jotai';

const ChatScreen = () => {
    const [textInput, setTextInput] = useAtom(textInputAtom);
    const [messages, setMessages] = useAtom(messagesAtom);
    const [showIntro, setShowIntro] = useAtom(showIntroAtom);
    const [suggestions, setSuggestions] = useAtom(suggestionsAtom);
    const userToken = useAtomValue(userTokenAtom);
    const userData = useAtomValue(userDataAtom);
    const scrollRef = useRef();

    const goChat = async () => {
        try {
            addMessage(setMessages, {
                text: textInput,
                user: true,
            });
            Keyboard.dismiss();
            setTextInput('');
            setShowIntro(false);
            const response = await sendChat(textInput, userToken);
            addMessage(setMessages, {
                text: response.answer ? response.answer : 'No response',
                user: false,
            });
        } catch {
            addMessage(setMessages, {
                text: "It seems I can't connect to my server. Are you connected to the internet?",
                user: false,
            });
        }
    };

    const showSuggestions = async () => {
        getChatSuggestions(userToken).then((suggestionsData) => {
            setSuggestions({
                visible: true,
                state: 0,
                data: suggestionsData,
            });
        });
    };

    return (
        <View style={ChatStyle.flexView}>
            {showIntro && (
                <View style={ChatStyle.introBodyContainer}>
                    <View style={ChatStyle.introBody}>
                        <Text style={ChatStyle.introText}>
                            Hi {userData.firstName}! Your college life companion
                            is here!
                        </Text>

                        <View style={ChatStyle.mascotContainer}>
                            <Image
                                source={require('../assets/chatMascot.webp')}
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
                    <ChatSuggestions
                        suggestions={suggestions}
                        setSuggestions={setSuggestions}
                        setTextInput={setTextInput}
                    />
                    <TextInput
                        style={ChatStyle.textInput}
                        enterKeyHint="send"
                        multiline
                        value={textInput}
                        placeholder="Ask a question, or press the menu on the right"
                        placeholderTextColor={'gray'}
                        onSubmitEditing={goChat}
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
                        onPress={textInput ? goChat : showSuggestions}
                    >
                        {textInput ? (
                            <Feather name="send" size={25} color="black" />
                        ) : (
                            <Feather name="menu" size={25} color="black" />
                        )}
                    </Pressable>
                </View>
            </View>
        </View>
    );
};

export default ChatScreen;
