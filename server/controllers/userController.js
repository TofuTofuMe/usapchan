const {User} = require('../utils/sqlHandler');
const {nanoid} = require('nanoid');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const config = require('../config.json');

exports.loginUser = async (req, res) => {
    try {
        const {username, password} = req.body;

        const dbUser = await User.findOne({
            where: {username: username},
        });

        if (dbUser) {
            const validPass = await bcrypt.compare(password, dbUser.password);

            if (validPass) {
                const user = {
                    id: nanoid(10),
                    username: dbUser.username,
                    email: dbUser.email,
                    studentId: dbUser.studentId,
                    firstName: dbUser.firstName,
                    lastName: dbUser.lastName,
                    type: dbUser.type,
                };

                const userToken = jwt.sign(user, config.jwtSecret, {
                    expiresIn: config.jwtExpiry,
                });
                return res
                    .status(200)
                    .json({success: true, user: user, token: userToken});
            }
        }
        res.status(401).json({
            success: false,
            message: 'Invalid login credentials. Try again',
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error logging user in',
        });
        console.error(error);
    }
};

exports.registerUser = async (req, res) => {
    try {
        const {studentId, username, email, password, firstName, lastName} =
            req.body;

        const dbUser = await User.findOne({
            where: {studentId: studentId, username: username, email: email},
        });

        if (!dbUser) {
            const passHash = await bcrypt.hash(
                password,
                config.bcryptSaltRounds
            );
            await User.create({
                id: nanoid(10),
                studentId,
                firstName,
                lastName,
                username,
                email,
                password: passHash,
                type: 'User',
            });

            res.status(201).json({
                success: true,
                message: `User ${username} registered!`,
            });
        } else {
            res.status(409).json({
                success: false,
                message: `A user with the same credentials already exists`,
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error registering user',
            error: error.message,
        });
        console.error(error);
    }
};

exports.verifyUser = async (req, res, next) => {
    try {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];

        if (token == null || undefined) {
            return res.status(401).end();
        }

        jwt.verify(token, config.jwtSecret, (error, user) => {
            if (user && !error) {
                next();
            } else {
                return res.status(401).end();
            }
        });
    } catch (error) {
        res.status(500).end();
        console.error(error);
    }
};

exports.verifyAdmin = async (req, res, next) => {
    try {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];

        if (token == null || undefined) {
            return res.status(401).end();
        }

        jwt.verify(token, config.jwtSecret, (error, user) => {
            if (user.type === 'Admin' && !error) {
                next();
            } else {
                return res.status(401).end();
            }
        });
    } catch (error) {
        res.status(500).end();
        console.error(error);
    }
};
