import Config from 'react-native-config';
import ReactNativeBlobUtil from 'react-native-blob-util';

const apiUrl = Config.API_URL;

const fetchApi = async (path, method, headers, body) => {
    try {
        const endpoint = apiUrl + path;
        const response = await fetch(endpoint, {
            method: method,
            headers: headers,
            body: body,
        });
        const responseObject = await response.json();
        return responseObject;
    } catch (error) {
        console.error(error.message);
    }
};

const loginUser = async (loginCredentials) => {
    try {
        const response = await fetchApi(
            '/user/login',
            'POST',
            {'Content-Type': 'application/json'},
            JSON.stringify(loginCredentials)
        );

        return response;
    } catch (error) {
        console.error(error.message);
    }
};

const registerUser = async (userData) => {
    try {
        const response = await fetchApi(
            '/user/register',
            'POST',
            {'Content-Type': 'application/json'},
            JSON.stringify(userData)
        );

        return response;
    } catch (error) {
        console.error(error.message);
    }
};

const downloadFile = async (userToken, file) => {
    try {
        const downloadPath =
            ReactNativeBlobUtil.fs.dirs.LegacyDownloadDir + `/${file.name}`;
        if (await ReactNativeBlobUtil.fs.exists(downloadPath)) {
            return {downloaded: false, filePath: downloadPath};
        } else {
            ReactNativeBlobUtil.config({
                addAndroidDownloads: {
                    useDownloadManager: true,
                    notification: true,
                    title: 'Downloading: ' + file.name,
                    path: downloadPath,
                    mediaScannable: true,
                },
            }).fetch('GET', apiUrl + file.url, {
                Authorization: `Bearer ${userToken}`,
                'Content-Type': 'multipart/form-data',
            });
        }
        return {downloaded: true, filePath: downloadPath};
    } catch (error) {
        console.error(error.message);
    }
};

export {fetchApi, loginUser, registerUser, downloadFile};
