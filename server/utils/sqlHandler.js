const {Sequelize, DataTypes} = require('sequelize');

const collegeModel = require('../models/collegeModel');
const forumModel = require('../models/forumModel');
const chatModel = require('../models/chatModel');
const userModel = require('../models/userModel');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    logging: console.log,
    storage: './db/usapchan.db',
});

const {User} = userModel(sequelize, DataTypes);
const {Course, Faculty, Schedule} = collegeModel(sequelize, DataTypes);
const {Post, Comment} = forumModel(sequelize, DataTypes);
const {Corpus, UnhandledCorpus} = chatModel(sequelize, DataTypes);

const associateModels = () => {
    try {
        User.hasMany(Post, {
            as: 'posts',
            sourceKey: 'username',
            foreignKey: {name: 'poster', type: DataTypes.STRING},
        });
        User.hasMany(Comment, {
            as: 'comments',
            sourceKey: 'username',
            foreignKey: {name: 'poster', type: DataTypes.STRING},
        });

        Post.belongsTo(User, {
            targetKey: 'username',
            foreignKey: {name: 'poster', type: DataTypes.STRING},
        });
        Comment.belongsTo(User, {
            targetKey: 'username',
            foreignKey: {name: 'poster', type: DataTypes.STRING},
        });

        Post.hasMany(Comment, {
            as: 'comments',
            sourceKey: 'id',
            foreignKey: {name: 'postId', type: DataTypes.INTEGER},
        });
        Comment.belongsTo(Post, {
            targetKey: 'id',
            foreignKey: {name: 'postId', type: DataTypes.INTEGER},
        });

        Faculty.hasMany(Schedule, {
            as: 'schedules',
            sourceKey: 'name',
            foreignKey: {name: 'facultyName', type: DataTypes.STRING},
        });
        Schedule.belongsTo(Faculty, {
            targetKey: 'name',
            foreignKey: {name: 'facultyName', type: DataTypes.STRING},
        });
        Schedule.belongsTo(Course, {
            targetKey: 'code',
            foreignKey: {name: 'courseCode', type: DataTypes.STRING},
        });
        Course.hasMany(Schedule, {
            as: 'schedules',
            sourceKey: 'code',
            foreignKey: {name: 'courseCode', type: DataTypes.STRING},
        });
    } catch (error) {
        console.error('Error associating models: ', error.message);
    }
};

const initDb = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection established to database.');
        associateModels();
        await sequelize.sync();
        console.log('Tables synced.');
    } catch (error) {
        console.error('Error connecting to database: ', error.message);
    }
};

module.exports = {
    initDb,
    User,
    Course,
    Faculty,
    Schedule,
    Post,
    Comment,
    Corpus,
    UnhandledCorpus,
};
