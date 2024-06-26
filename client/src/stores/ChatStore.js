import {atom} from 'jotai';
import {atomWithStorage, createJSONStorage} from 'jotai/utils';
import {AsyncStorage} from '@react-native-async-storage/async-storage';

const storage = createJSONStorage(() => AsyncStorage);

const textInputAtom = atom('');
const textOutputAtom = atom('');
const messagesAtom = atomWithStorage(
    'messages',
    [
        {
            id: Date.now() + Math.random().toString(),
            text: 'Hi! How can I help you?',
            user: false,
        },
    ],
    storage
);
const suggestionsAtom = atom({
    visible: false,
    state: 0,
    data: [],
    options: {},
});

const showIntroAtom = atom(true);

export {
    textInputAtom,
    textOutputAtom,
    messagesAtom,
    suggestionsAtom,
    showIntroAtom,
};
