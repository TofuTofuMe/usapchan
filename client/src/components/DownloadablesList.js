import {React} from 'react';
import {ScrollView, View, Text, Pressable} from 'react-native';
import DownloadablesStyle from '../styles/DownloadablesStyle';
import Feather from 'react-native-vector-icons/Feather';

const DownloadablesList = ({files}) => {
    return (
        <ScrollView style={DownloadablesStyle.container}>
            {files.map((file, index) => (
                <View style={DownloadablesStyle.fileContainer} key={index}>
                    <View style={DownloadablesStyle.fileName}>
                        <Feather name="file-text" size={25} color="black" />
                        <Text
                            style={[DownloadablesStyle.text, {marginLeft: 15}]}
                        >
                            {file.fileName}
                        </Text>
                    </View>
                    <View style={DownloadablesStyle.pressableContainer}>
                        <Pressable
                            style={({pressed}) => [pressed && {opacity: 0.5}]}
                        >
                            <Feather name="download" size={25} color="black" />
                        </Pressable>
                    </View>
                </View>
            ))}
        </ScrollView>
    );
};

export default DownloadablesList;
