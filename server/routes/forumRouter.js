const express = require('express');
const config = require('../config.json');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const forumController = require('../controllers/forumController');
const {verifyUser, verifyAdmin} = require('../controllers/userController');

var forumRouter = express.Router();

forumRouter.use(bodyParser.json());
forumRouter.use(cookieParser());

forumRouter.get('/', verifyUser, (req, res) => {
    res.status(200).end();
});

forumRouter.get('/list_posts', verifyUser, forumController.getPosts);

forumRouter.get('/list_comments', verifyUser, forumController.getComments);

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

module.exports = forumRouter;
