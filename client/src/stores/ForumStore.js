import {atom} from 'jotai';

const selectedPostAtom = atom(null);

const postInputAtom = atom({
    poster: null,
    title: null,
    content: null,
});
const commentInputAtom = atom(null);

const postsAtom = atom([]);
const commentsAtom = atom([]);

export {
    selectedPostAtom,
    postInputAtom,
    commentInputAtom,
    postsAtom,
    commentsAtom,
};
