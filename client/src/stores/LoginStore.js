import {atom} from 'jotai';

const firstNameAtom = atom('');
const lastNameAtom = atom('');
const usernameAtom = atom('');
const studentIdAtom = atom('');
const passwordAtom = atom('');
const emailAtom = atom('');
const loggedInAtom = atom(false);

export {
    firstNameAtom,
    lastNameAtom,
    usernameAtom,
    studentIdAtom,
    passwordAtom,
    emailAtom,
    loggedInAtom,
};
