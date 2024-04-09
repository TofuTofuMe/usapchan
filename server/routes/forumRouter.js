const express = require('express');
const config = require('../config.json');
const cookieParser = require('cookie-parser');

const forumController = require('../controllers/forumController');
const {verifyUser, verifyAdmin} = require('../controllers/userController');

var forumRouter = express.Router();

forumRouter.use(express.urlencoded({extended: true}));
forumRouter.use(express.json());
forumRouter.use(cookieParser());

forumRouter.get('/', verifyUser, (req, res) => {
    res.status(200).end();
});

forumRouter.get('/get_posts', verifyUser, forumController.getApprovedPosts);

forumRouter.get('/get_comments', verifyUser, forumController.getComments);

forumRouter.get('/post/:postId/', verifyUser, forumController.getPost);

forumRouter.post('/add_post', verifyUser, forumController.addPost);

forumRouter.post(
    '/post/:postId/add_comment',
    verifyUser,
    forumController.addComment
);

forumRouter.get('/manage', verifyAdmin, (req, res) => {
    res.render('forumView.ejs', {
        collegeName: config.collegeName,
    });
});

forumRouter.get('/get_allposts', verifyAdmin, forumController.getAllPosts);

forumRouter.post(
    '/post/:postId/approve_post',
    verifyAdmin,
    forumController.approvePost
);

forumRouter.post(
    '/post/:postId/unapprove_post',
    verifyAdmin,
    forumController.unapprovePost
);

forumRouter.post(
    '/post/:postId/drop_post',
    verifyAdmin,
    forumController.dropPost
);

forumRouter.post('/drop_comment', verifyAdmin, forumController.dropComment);

module.exports = forumRouter;
