import {React} from 'react';
import {ScrollView} from 'react-native';
import {DownloadablesList} from '../components';

const DownloadablesScreen = () => {
    return (
        <ScrollView>
            <DownloadablesList
                files={[
                    {
                        fileName: 'Test',
                    },
                ]}
            />
        </ScrollView>
    );
};

export default DownloadablesScreen;
