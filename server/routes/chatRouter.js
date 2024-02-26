const express = require('express');
const config = require('../config.json');
const bodyParser = require('body-parser');

const chatController = require('../controllers/chatController');

var chatRouter = express.Router();

chatRouter.use(bodyParser.urlencoded({extended: false}));
chatRouter.use(bodyParser.json());

chatRouter.get('/', (req, res) => {
    res.status(200).end();
});

chatRouter.get('/manage', (req, res) => {
    res.render('chatView.ejs', {college_name: config.college_name});
});

chatRouter.get('/list_corpus', chatController.getCorpus);

chatRouter.post('/add_corpus', chatController.addCorpus);

chatRouter.post('/update_corpus', chatController.updateCorpus);

chatRouter.post('/send_chat', chatController.sendChat);

chatRouter.get('/train_nlp', chatController.trainNlp);

chatRouter.post('/drop_corpus', chatController.dropCorpus);

module.exports = chatRouter;
