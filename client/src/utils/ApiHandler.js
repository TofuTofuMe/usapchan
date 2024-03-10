import Config from 'react-native-config';

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

export {fetchApi, loginUser, registerUser};
