import {React} from 'react';
import {Alert, View} from 'react-native';
import {DownloadablesList, DownloadablesOption} from '../components';
import DownloadablesStyle from '../styles/DownloadablesStyle';
import {userTokenAtom, downloadablesAtom} from '../stores';
import {getDownloadables} from '../utils';
import {useAtom, useAtomValue} from 'jotai';

const DownloadablesScreen = () => {
    const [downloadMenu, setDownloadMenu] = useAtom(downloadablesAtom);
    const userToken = useAtomValue(userTokenAtom);

    const setMenu = async (menuType) => {
        try {
            menuType === 0
                ? getDownloadables(userToken, 'student').then((files) => {
                      setDownloadMenu({
                          state: downloadMenu.state ? 0 : 1,
                          files: files,
                      });
                  })
                : getDownloadables(userToken, 'faculty').then((files) => {
                      setDownloadMenu({
                          state: downloadMenu.state ? 0 : 2,
                          files: files,
                      });
                  });
        } catch {
            Alert.alert(
                'Error',
                `There's an issue loading the downloadables, are you connected to the internet?`
            );
        }
    };

    return (
        <View style={DownloadablesStyle.flexView}>
            {(downloadMenu.state === 0 || downloadMenu.state === 1) && (
                <DownloadablesOption
                    title="For Students"
                    onPress={() => setMenu(0)}
                />
            )}
            {(downloadMenu.state === 0 || downloadMenu.state === 2) && (
                <DownloadablesOption
                    title="For Faculty"
                    onPress={() => setMenu(1)}
                />
            )}
            {downloadMenu.state === 1 && (
                <DownloadablesList files={downloadMenu.files} />
            )}
            {downloadMenu.state === 2 && (
                <DownloadablesList files={downloadMenu.files} />
            )}
        </View>
    );
};

export default DownloadablesScreen;
