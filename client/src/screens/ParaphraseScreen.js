import React, {useState} from 'react';
import {View, Text, TextInput, Pressable} from 'react-native';
// import DocumentPicker, {
//   DirectoryPickerResponse,
//   DocumentPickerResponse,
//   isCancel,
//   isInProgress,
//   types,
// } from 'react-native-document-picker';

const ParaphraseScreen = () => {
  // const [file, setFile] = useState(Array<DocumentPickerResponse>();
  const [text, setText] = useState('');

  return (
    <View>
      <Text>Selected model</Text>
      <Pressable
        style={({pressed}) => [
          {
            backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
          },
        ]}
        onPress={() => {
          console.log('Pressed pressable!');
        }}>
        <Text>Pressable!</Text>
      </Pressable>
      <Text>Enter text</Text>
      <TextInput
        enterKeyHint="enter"
        multiline
        defaultValue="Type here"
        onChangeText={newText => setText(newText)}
      />
      <Text>{text}</Text>
    </View>
  );
};

export default ParaphraseScreen;
