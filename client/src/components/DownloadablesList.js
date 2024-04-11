import {React} from 'react';
import {ScrollView, View, Text, Pressable, Alert} from 'react-native';
import DownloadablesStyle from '../styles/DownloadablesStyle';
import Feather from 'react-native-vector-icons/Feather';
import {getDownloadable, openFile} from '../utils/';
import {userTokenAtom} from '../stores';
import {useAtomValue} from 'jotai';

const DownloadablesList = ({files}) => {
    const userToken = useAtomValue(userTokenAtom);

    const goDownload = async (fileName, filePath) => {
        getDownloadable(userToken, {name: fileName, url: filePath}).then(
            (response) => {
                response.downloaded
                    ? Alert.alert(
                          'Downloaded',
                          'File was downloaded successfully!'
                      )
                    : Alert.alert(
                          'Already Downloaded',
                          'File was already downloaded. Would you like to open it now?',
                          [
                              {text: 'Later'},
                              {
                                  text: 'Open',
                                  onPress: () => {
                                      openFile(response.filePath);
                                  },
                              },
                          ]
                      );
            }
        );
    };

    return (
        <ScrollView style={DownloadablesStyle.container}>
            {files.map((file, index) => (
                <View style={DownloadablesStyle.fileContainer} key={index}>
                    <View style={DownloadablesStyle.filename}>
                        <Feather name="file-text" size={25} color="black" />
                        <Text style={DownloadablesStyle.text}>
                            {file.filename}
                        </Text>
                    </View>
                    <View style={DownloadablesStyle.pressableContainer}>
                        <Pressable
                            style={({pressed}) => [pressed && {opacity: 0.5}]}
                            onPress={() => goDownload(file.filename, file.url)}
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
