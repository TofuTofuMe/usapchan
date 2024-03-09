import {atom} from 'jotai';
import {atomWithStorage, createJSONStorage} from 'jotai/utils';
import AsyncStorage from '@react-native-async-storage/async-storage';

const storage = createJSONStorage(() => AsyncStorage);

const loginStateAtom = atom(false);

const userDataAtom = atom({
    studentId: '',
    username: '',
    email: '',
    password: '',
    firstName: '',
    lastName: '',
});

const userTokenAtom = atomWithStorage('userToken', '', storage);

const settingsAtom = atomWithStorage('settings', {}, storage);

const modalAtom = atom({
    visibility: false,
    interactable: false,
    loading: false,
    message: '',
});

export {loginStateAtom, userDataAtom, userTokenAtom, settingsAtom, modalAtom};
