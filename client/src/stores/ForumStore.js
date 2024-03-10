import {atom} from 'jotai';

const selectedPostAtom = atom(null);

const postInputAtom = atom({
    poster: '',
    title: '',
    content: '',
});
const commentInputAtom = atom('');

const postsAtom = atom([]);
const commentsAtom = atom([]);

export {
    selectedPostAtom,
    postInputAtom,
    commentInputAtom,
    postsAtom,
    commentsAtom,
};
