const express = require('express');
const bodyParser = require('body-parser');

const userController = require('../controllers/userController');

var userRouter = express.Router();

userRouter.use(bodyParser.urlencoded({extended: false}));

userRouter.get('/', (req, res) => {
    res.status(200).end();
});

userRouter.post('/login', userController.loginUser);

userRouter.post('/register', userController.registerUser);

module.exports = userRouter;
