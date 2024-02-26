const express = require('express');
const config = require('../config.json');
const bodyParser = require('body-parser');

const forumController = require('../controllers/forumController');

var forumRouter = express.Router();

forumRouter.use(bodyParser.urlencoded({extended: false}));

forumRouter.get('/', (req, res) => {
    res.status(200).end();
});

forumRouter.get('/manage', (req, res) => {
    res.render('forumView.ejs', {
        collegeName: config.collegeName,
        table: 'forum',
    });
});

forumRouter.get('/list_posts', forumController.getPosts);

forumRouter.get('/list_comments', forumController.getComments);

forumRouter.post('/add_post', forumController.addPost);

forumRouter.post('/add_comment', forumController.addComment);

module.exports = forumRouter;
