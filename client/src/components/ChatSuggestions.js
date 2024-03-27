import React from 'react';
import {Modal, Pressable, ScrollView, Text, View} from 'react-native';
import ChatStyle from '../styles/ChatStyle';

const ChatSuggestions = ({suggestions, setSuggestions, setTextInput}) => {
    return (
        <Modal
            visible={suggestions.visible}
            animationType="fade"
            transparent={true}
            onRequestClose={() =>
                setSuggestions({visible: false, state: 0, data: []})
            }
        >
            <View style={ChatStyle.modalView}>
                <View style={ChatStyle.modalCard}>
                    <Text style={ChatStyle.title}>Chat Suggestions</Text>
                    <ScrollView style={ChatStyle.zeroFlexGrow}>
                        {suggestions.state === 0
                            ? suggestions.data.map((suggestion, index) => (
                                  <Pressable
                                      style={({pressed}) => [
                                          ChatStyle.pressable,
                                          pressed && ChatStyle.pressablePressed,
                                      ]}
                                      onPress={() => {
                                          setSuggestions({
                                              visible: true,
                                              state: 1,
                                              options: suggestion.options,
                                          });
                                      }}
                                      key={index}
                                  >
                                      <Text style={ChatStyle.button}>
                                          {suggestion.category}
                                      </Text>
                                  </Pressable>
                              ))
                            : suggestions.options.map((option, index) => (
                                  <Pressable
                                      style={({pressed}) => [
                                          ChatStyle.pressable,
                                          pressed && ChatStyle.pressablePressed,
                                      ]}
                                      onPress={() => {
                                          setSuggestions({
                                              visible: false,
                                              state: 0,
                                              data: [],
                                          });
                                          setTextInput(option);
                                      }}
                                      key={index}
                                  >
                                      <Text style={ChatStyle.button}>
                                          {option}
                                      </Text>
                                  </Pressable>
                              ))}
                    </ScrollView>
                </View>
            </View>
        </Modal>
    );
};

export default ChatSuggestions;
