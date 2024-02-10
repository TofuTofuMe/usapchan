const {Sequelize, DataTypes} = require('sequelize');

const collegeModel = require('../models/collegeModel');
const forumModel = require('../models/forumModel');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    logging: console.log,
    storage: './db/usapchan.db',
});

const {Course, Faculty, Schedule} = collegeModel(sequelize, DataTypes);
const {Post, Comment} = forumModel(sequelize, DataTypes);

const initDb = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection established to database.');
        await sequelize.sync();
        console.log('Tables synced.');
    } catch (error) {
        console.error('Error connecting to database: ', error);
    }
};

module.exports = {
    initDb,
    Course,
    Faculty,
    Schedule,
    Post,
    Comment,
};
