import {atom} from 'jotai';

const studentFilesAtom = atom(false);
const facultyFilesAtom = atom(false);
const studentOptionAtom = atom(true);
const facultyOptionAtom = atom(true);

export {
    studentFilesAtom,
    facultyFilesAtom,
    studentOptionAtom,
    facultyOptionAtom,
};
