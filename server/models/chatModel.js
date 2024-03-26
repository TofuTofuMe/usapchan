module.exports = (sequelize, DataTypes) => {
    const Corpus = sequelize.define('Corpus', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            unique: true,
            autoincrement: true,
        },
        lang: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        intent: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        query: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        answer: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        queryCount: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
    });

    const UnhandledCorpus = sequelize.define('UnhandledCorpus', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            unique: true,
            autoincrement: true,
        },
        query: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    const Suggestion = sequelize.define('Suggestion', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            unique: true,
            autoincrement: true,
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        query: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    return {Corpus, UnhandledCorpus, Suggestion};
};
