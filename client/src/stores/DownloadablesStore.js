import {atom} from 'jotai';

const downloadablesAtom = atom({
    state: 0,
    files: [],
    options: [],
});

export {downloadablesAtom};
