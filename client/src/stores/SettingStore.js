import {atom} from 'jotai';
import {atomWithStorage, createJSONStorage} from 'jotai/utils';
import AsyncStorage from '@react-native-async-storage/async-storage';

const storage = createJSONStorage(() => AsyncStorage);

const settingsAtom = atomWithStorage(
  'settings',
  {
    inferenceType: [],
    llamaServerAddress: '',
  },
  storage,
);
const modalAtom = atom({
  visibility: false,
  interactable: false,
  message: '',
});

export {settingsAtom, modalAtom};
