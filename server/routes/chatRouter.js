const express = require('express');
const config = require('../config.json');
const cookieParser = require('cookie-parser');

const chatController = require('../controllers/chatController');
const {verifyUser, verifyAdmin} = require('../controllers/userController');

var chatRouter = express.Router();

chatRouter.use(express.urlencoded({extended: true}));
chatRouter.use(express.json());
chatRouter.use(cookieParser());

chatRouter.get('/', verifyUser, (req, res) => {
    res.status(200).end();
});

chatRouter.post('/send_chat', verifyUser, chatController.sendChat);

chatRouter.get('/manage', verifyAdmin, (req, res) => {
    res.render('chatView.ejs', {collegeName: config.collegeName});
});

chatRouter.get('/list_corpus', verifyAdmin, chatController.getCorpus);

chatRouter.post('/add_corpus', verifyAdmin, chatController.addCorpus);

chatRouter.post('/update_corpus', verifyAdmin, chatController.updateCorpus);

chatRouter.get('/train_nlp', verifyAdmin, chatController.trainNlp);

chatRouter.post('/drop_corpus', verifyAdmin, chatController.dropCorpus);

module.exports = chatRouter;
