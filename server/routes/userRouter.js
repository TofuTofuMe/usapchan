const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const userController = require('../controllers/userController');

var userRouter = express.Router();

userRouter.use(bodyParser.json());
userRouter.use(cookieParser());

userRouter.get('/', (req, res) => {
    res.status(200).end();
});

userRouter.get('/login', userController.renderLogin);

userRouter.post('/login', userController.loginUser);

userRouter.post('/register', userController.registerUser);

module.exports = userRouter;
