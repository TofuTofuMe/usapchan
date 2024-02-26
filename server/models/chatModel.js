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
    });

    return {Corpus};
};
