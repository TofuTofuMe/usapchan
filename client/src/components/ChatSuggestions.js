import React from 'react';
import {Modal, Pressable, Text, View} from 'react-native';
import Style from '../Style';

const ChatSuggestions = ({
    showQueries,
    setShowQueries,
    setTextInput,
    suggestions,
}) => {
    return (
        <Modal
            visible={showQueries}
            animationType="fade"
            transparent={true}
            onRequestClose={() => setShowQueries(false)}
        >
            <View style={Style.modalView}>
                <View style={Style.modalCard}>
                    <Text style={Style.title}>Chat Suggestions</Text>
                    <View>
                        {suggestions.map((suggestion, index) => (
                            <Pressable
                                style={({pressed}) => [
                                    Style.pressable,
                                    pressed && Style.pressablePressed,
                                ]}
                                onPress={() => {
                                    setTextInput(suggestion.query);
                                    setShowQueries(false);
                                }}
                                key={index}
                            >
                                <Text style={Style.button}>
                                    {suggestion.query}
                                </Text>
                            </Pressable>
                        ))}
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default ChatSuggestions;
