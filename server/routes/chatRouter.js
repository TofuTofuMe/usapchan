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

chatRouter.get(
    '/get_chatsuggestions',
    verifyUser,
    chatController.getChatSuggestions
);

chatRouter.get('/manage', verifyAdmin, (req, res) => {
    res.render('chatView.ejs', {collegeName: config.collegeName});
});

chatRouter.get('/train_nlp', verifyAdmin, chatController.trainNlp);

chatRouter.get('/get_corpus', verifyAdmin, chatController.getCorpus);

chatRouter.get(
    '/get_unhandledcorpus',
    verifyAdmin,
    chatController.getUnhandledCorpus
);

chatRouter.get('/get_suggestions', verifyAdmin, chatController.getSuggestions);

chatRouter.post('/add_corpus', verifyAdmin, chatController.addCorpus);

chatRouter.post('/add_suggestion', verifyAdmin, chatController.addSuggestion);

chatRouter.post('/update_corpus', verifyAdmin, chatController.updateCorpus);

chatRouter.post(
    '/update_suggestion',
    verifyAdmin,
    chatController.updateSuggestion
);

chatRouter.post('/drop_corpus', verifyAdmin, chatController.dropCorpus);

chatRouter.post('/drop_suggestion', verifyAdmin, chatController.dropSuggestion);

module.exports = chatRouter;
