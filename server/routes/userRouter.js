const express = require('express');
const cookieParser = require('cookie-parser');

const userController = require('../controllers/userController');

var userRouter = express.Router();

userRouter.use(express.urlencoded({extended: true}));
userRouter.use(express.json());
userRouter.use(cookieParser());

userRouter.get('/', (req, res) => {
    res.status(200).end();
});

userRouter.get('/login', userController.renderLogin);

userRouter.post('/login', userController.loginUser);

userRouter.get('/logout', userController.logoutUser);

userRouter.post('/register', userController.registerUser);

module.exports = userRouter;
